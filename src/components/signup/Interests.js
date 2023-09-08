import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Chip } from 'react-native-paper';

const InterestsChip = () => {
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

  const handlePress = (interest) => {
    setSelectedInterests([...selectedInterests, interest]);
    setInterests(interests.filter(i => i !== interest));
  };

  return (
    <View style = {{alignItems: 'center'}}>
    <Text>Tell us about yourself</Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {interests.map((interest, index) => (
        <Chip 
         mode = "outlined"
         key={index} onPress={() => handlePress(interest)} style={{ margin: 4 }}>
          {interest}
        </Chip>
      ))}
    </View>
    </View>
  );
}

export default InterestsChip;
