import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import style from './style';

const ProfileTabContent = () => {
  return (
    <ScrollView style={style.profileTabcontentcontainer}>
      <View style={style.imageContainer}>
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode={'contain'}
          style={style.image}
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode={'contain'}
          style={style.image}
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode={'contain'}
          style={style.image}
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode={'contain'}
          style={style.image}
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode={'contain'}
          style={style.image}
        />
        <Image
          source={require('../../assets/images/default_post.png')}
          resizeMode={'contain'}
          style={style.image}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
