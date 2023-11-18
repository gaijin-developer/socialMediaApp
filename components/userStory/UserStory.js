import React from 'react';
import {Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
const UserStory = props => {
  console.log(props.profileImage);
  return (
    <View style={style.storyContainer}>
      <View style={style.userImageContainer}>
        <Image source={props.profileImage} style={props.image} />
      </View>
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};
UserStory.propTypes = {
  firsName: PropTypes.string.isRequired,
  profileImage: PropTypes.object.isRequired,
};
export default UserStory;
