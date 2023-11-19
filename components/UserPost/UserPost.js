import React from 'react';
import style from './style.js';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage.js';
import {Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';

const UserPost = props => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.userPostTopBar}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            ImageDimensions={48}
          />
          <View style={style.userTextContainer}>
            <Text style={style.userName}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.locationStyle}>{props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} color={'#79869f'} size={22} />
      </View>
      <View style={style.postImageContainer}>
        <Image source={props.image} />
      </View>
      <View style={style.userPostStats}>
        <View style={style.userPostStatButtonStart}>
          <FontAwesomeIcon icon={faHeart} color={'#79869f'} />
          <Text style={style.statText}>{props.likes}</Text>
        </View>
        <View style={style.userPostStatContainer}>
          <FontAwesomeIcon icon={faMessage} color={'#79869f'} />
          <Text style={style.statText}>{props.comments}</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 30}}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869f'} />
          <Text style={style.statText}>{props.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};
UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};
export default UserPost;
