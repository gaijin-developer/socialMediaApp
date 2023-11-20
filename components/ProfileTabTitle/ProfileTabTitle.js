import React from 'react';
import style from './style';
import {Text, View} from 'react-native';
import {PropTypes} from 'prop-types';

const ProfileTabsTitle = props => {
  return (
    <Text style={[style.title, !props.isFocused && style.titleNotFocused]}>
      {props.title}
    </Text>
  );
};
ProfileTabsTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};
export default ProfileTabsTitle;
