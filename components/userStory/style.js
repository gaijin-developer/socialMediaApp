import {getFontFamily} from '../../assets/fonts/helper';

const {StyleSheet} = require('react-native');

const style = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },
  userImageContainer: {
    borderColor: '#f35bac',
    borderWidth: 1,
    padding: 3,
    borderRadius: 70,
  },
  firstName: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 14,
    color: '#022150',
    marginTop: 8,
    textAlign: 'center',
  },
  image: {
    width: 65,
    height: 65,
  },
});
export default style;
