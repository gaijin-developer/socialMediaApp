import React from 'react';

import style from './style';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../../assets/styles/globalStyles';
import {Routes} from '../../navigation/Routes';
import {ProfileTabsNavigation} from '../../navigation/MainNavigation';
const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView contentContainerStyle={globalStyles.flexGrow}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageWrap}>
            <Image
              source={require('../../assets/images/default_profile.png')}
              style={style.profileImage}
            />
          </View>
        </View>
        <Text style={style.userName}>Frank Kojo Entsie</Text>
        <View style={style.statContainer}>
          <View>
            <Text style={style.statAmount}>45</Text>
            <Text style={style.statType}>Following</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>30M</Text>
            <Text style={style.statType}>Followers</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>400</Text>
            <Text style={style.statType}>Posts</Text>
          </View>
        </View>
        <View style={globalStyles.flex}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;
