import React, {useEffect, useState} from 'react';
import style from './style';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from '../../components/Title/Title';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import UserStory from '../../components/userStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import globalStyles from '../../assets/styles/globalStyles';
import {Routes} from '../../navigation/Routes';

const Home = ({navigation}) => {
  const userStoriesPageSize = 4;
  const [userStoryCurrentPage, setUserStoryCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUSerStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  const userPosts = [
    {
      id: 1,
      firstName: 'Frank',
      lastName: 'Entsie',
      location: 'Ok,Japan',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 1120,
      comments: 24,
      bookmarks: 55,
    },
    {
      id: 2,
      firstName: 'Sakura',
      lastName: 'Entsie',
      location: 'Ok,Japan',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 1120,
      comments: 24,
      bookmarks: 55,
    },
    {
      id: 3,
      firstName: 'Joseph',
      lastName: 'Entsie',
      location: 'Ok,Japan',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 1120,
      comments: 24,
      bookmarks: 550,
    },
    {
      id: 4,
      firstName: 'Faustina',
      lastName: 'Entsie',
      location: 'Ok,Japan',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 1120,
      comments: 244,
      bookmarks: 55,
    },
    {
      id: 5,
      firstName: 'Keiko',
      lastName: 'Omae',
      location: 'Ok,Japan',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 1120,
      comments: 24,
      bookmarks: 5,
    },
    {
      id: 6,
      firstName: 'Mikio',
      lastName: 'Omae',
      location: 'Ok,Japan',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 1120,
      comments: 24,
      bookmarks: 355,
    },
    {
      id: 7,
      firstName: 'Simon',
      lastName: 'Entsie',
      location: 'Takoradi,Ghana',
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      likes: 1120,
      comments: 124,
      bookmarks: 55,
    },
  ];
  const userStories = [
    {
      id: 1,
      firstName: 'Joseph',
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      id: 2,
      firstName: 'Frank',
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      id: 3,
      firstName: 'Sakura',
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      id: 4,
      firstName: 'Faustina',
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      id: 5,
      firstName: 'Mikio',
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      id: 6,
      firstName: 'Keiko',
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      id: 7,
      firstName: 'Justice',
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      id: 8,
      firstName: 'Takuma',
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      id: 9,
      firstName: 'George',
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      id: 10,
      firstName: 'Agartha',
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      id: 11,
      firstName: 'Nana Adwoa',
      profileImage: require('../../assets/images/default_profile.png'),
    },
  ];

  useEffect(() => {
    setIsLoadingUSerStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUSerStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);

  const pagination = (database, currentPage, pageSize) => {
    const startingIndex = (currentPage - 1) * pageSize;
    const endingIndex = startingIndex + pageSize;
    if (startingIndex >= database.length) {
      return [];
    } else {
      return database.slice(startingIndex, endingIndex);
    }
  };
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite]}>
      <View>
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) {
              return;
            } else {
              setIsLoadingUserPosts(true);
              const contentToAppend = pagination(
                userPosts,
                userPostsCurrentPage + 1,
                userPostsPageSize,
              );
              if (contentToAppend.length > 0) {
                setUserPostsCurrentPage(userPostsCurrentPage + 1);
                setUserPostsRenderedData(prevData => [
                  ...prevData,
                  ...contentToAppend,
                ]);
              }
              setIsLoadingUserPosts(false);
            }
          }}
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title={"Let's Explore"} />
                <TouchableOpacity style={style.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={20}
                    color={'#898dae'}
                  />
                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={style.userStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    } else {
                      setIsLoadingUSerStories(true);
                      const contentToAppend = pagination(
                        userStories,
                        userStoryCurrentPage + 1,
                        userStoriesPageSize,
                      );
                      if (contentToAppend.length > 0) {
                        setUserStoryCurrentPage(userStoryCurrentPage + 1);
                        setUserStoriesRenderedData(prevData => [
                          ...prevData,
                          ...contentToAppend,
                        ]);
                      }
                      setIsLoadingUSerStories(false);
                    }
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={'userStory' + item.id}
                      profileImage={item.profileImage}
                      firstName={item.firstName}
                    />
                  )}
                />
              </View>
            </>
          }
          showsVerticalScrollIndicator={false}
          data={userPostsRenderedData}
          renderItem={({item}) => (
            <View style={style.userPostContainer}>
              <UserPost
                key={item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                image={item.image}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
                profileImage={item.profileImage}
                location={item.location}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default Home;
