import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  map: {
    width: winWidth * 0.9,
    height: winHeight * 0.6,
  },
});
