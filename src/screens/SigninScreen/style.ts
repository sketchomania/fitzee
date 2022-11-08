import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../constants/colors';

const createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: 'black',
      // backgroundColor: 'cyan',
    },
    background: {
      marginTop: 20,
      width: '100%',
      height: '70%',
      alignItems: 'center',
    },
    textMain: {
      flex:1,
      fontSize: RFValue(25),
      fontWeight: '500',
      color: Colors.WHITE,
      textAlign: "center"
    },
    text: {
      fontSize: RFValue(25),
      fontWeight: '300',
      color: Colors.BLACK,
    },
  });

export default createStyles;
