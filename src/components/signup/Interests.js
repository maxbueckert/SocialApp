import React, { useState } from 'react';
import { View, Text , Button } from 'react-native';
import { Chip } from 'react-native-paper';

const InterestsChips = ({setUserInterests, registerUser}) => {

  const initialInterests = [
    'Hiking', 
    'Reading', 
    'Cooking', 
    'Traveling', 
    'Photography',
    'Yoga',
    'Painting',
    'Music',
    'Dancing',
    'Gardening'
  ];

  const [interests, setInterests] = useState(initialInterests);

  const [selectedInterests, setSelectedInterests] = useState([]);


  const addInterest = (interest) => {
    setSelectedInterests([...selectedInterests, interest]);
  };

  const removeInterest = (interest) => {
    setSelectedInterests(selectedInterests.filter(i => i !== interest));
  };

  const onSubmit = () => {
    setUserInterests(selectedInterests);
    registerUser();
  }



  return (
    <View style = {{alignItems: 'center'}}>
    <Text>What intererests you?</Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

      {interests.map((interest, index) => (
        <Chip 
         mode = {selectedInterests.includes(interest) ? "flat" : 'outlined'}
         key={index} 
         onPress={selectedInterests.includes(interest) ? () => removeInterest(interest) : () => addInterest(interest)}
         style={{ margin: 4 }}
        >{interest}
        </Chip>

  
      ))}
    </View>
    <Button title = "Submit" onPress = {onSubmit}></Button>
    </View>
  );
}

export default InterestsChips;
