import React, { useState } from 'react';
import { View, Text , Button } from 'react-native';
import { Chip } from 'react-native-paper';

const InterestsChips = ({setUserInterests}) => {

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
    setSelectedInterests(selectedInterests => [...selectedInterests, interest]);
  };

  const removeInterest = (interest) => {
    setSelectedInterests(selectedInterests => selectedInterests.filter(i => i !== interest));
  };




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
        {/* potential async bug here, setUserInterests before last chip is added to selectedInterests*/}
    <Button title = "Submit" onPress = {() => setUserInterests(selectedInterests)}></Button>
    </View>
  );
}

export default InterestsChips;
