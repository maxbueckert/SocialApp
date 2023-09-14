import { useState, useEffect } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { updateUsers } from '../graphql/mutations';
import { onUpdateUsers } from '../graphql/subscriptions';

const addUserAttributes = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Set up subscription to listen for user updates
    const userSubscription = API.graphql(
      graphqlOperation(onUpdateUsers)
    ).subscribe({
      next: (data) => {
        console.log('User attributes updated:', data);
        // Handle the updated user attributes as needed
      },
      error: (subscriptionError) => {
        console.error('User attributes subscription error:', subscriptionError);
      }
    });

    // Clean up the subscription on unmount
    return () => {
      userSubscription.unsubscribe();
    };
  }, []);

  const updateUserAttribute = async (attributeValue) => {
    try {
        setLoading(true);

        // Retrieve the current authenticated user
        const userInfo = await Auth.currentAuthenticatedUser();
        const userId = userInfo.attributes.sub;

        // Fetch the current interests array from the database
        const response = await API.graphql(graphqlOperation(getUsers, { id: userId }));
        const currentInterests = response.data.getUsers.interests || [];

        // Add the new interest to the array if it doesn't already exist
        const updatedInterests = [...new Set([...currentInterests, attributeValue])];

        // Update the user's interests in the database
        const input = {
            id: userId,
            interests: updatedInterests,
        };

        await API.graphql(graphqlOperation(updateUsers, { input }));

        setLoading(false);
    } catch (err) {
        setError(err);
        setLoading(false);
    }
};


  return [updateUserAttribute, loading, error];
};

export default addUserAttributes;
