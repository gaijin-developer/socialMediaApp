import PropTypes from 'prop-types';
import style from './style';
import React from 'react';
import {Image, View} from 'react-native';

const UserProfileImage = props => {
  return (
    <View style={[style.userImageContainer, {borderRadius: 1000}]}>
      <Image
        source={props.profileImage}
        style={{
          ...style.image,
          width: props.ImageDimensions,
          height: props.ImageDimensions,
        }}
      />
    </View>
  );
};
UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  ImageDimensions: PropTypes.number.isRequired,
};
export default UserProfileImage;
