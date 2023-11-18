import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyles from './assets/styles/globalStyles';
import UserStory from './components/userStory/UserStory';

function App() {
  const userStories = [
    {
      id: 1,
      firstName: 'Joseph',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 2,
      firstName: 'Frank',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 3,
      firstName: 'Sakura',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 4,
      firstName: 'Faustina',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 5,
      firstName: 'Mikio',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 6,
      firstName: 'Keiko',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 7,
      firstName: 'Justice',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 8,
      firstName: 'Takuma',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 9,
      firstName: 'George',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 10,
      firstName: 'Agartha',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      id: 11,
      firstName: 'Nana Adwoa',
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];

  return (
    <SafeAreaView>
      <View style={globalStyles.header}>
        <Title title={"Let's Explore"} />
        <TouchableOpacity style={globalStyles.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={'#898dae'} />
          <View style={globalStyles.messageNumberContainer}>
            <Text style={globalStyles.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyles.userStoryContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStories}
          renderItem={({item}) => (
            <UserStory
              profileImage={item.profileImage}
              firstName={item.firstName}
            />
          )}></FlatList>
      </View>
    </SafeAreaView>
  );
}

export default App;
