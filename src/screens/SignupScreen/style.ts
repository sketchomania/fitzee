import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../constants/colors';

const createStyles = () =>
  StyleSheet.create({
    body: {
      flex: 1,
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   borderWidth: 1,
      //   borderColor: Colors.YELLOW,
      backgroundColor: '#000000',
    },
    background: {
      // top: 20,
      //   marginVertical: 20,
      marginTop: 20,
      width: '100%',
      height: 350,
      alignItems: 'center',
    },
    content: {
      marginHorizontal: RFValue(35),
    },
    titleText: {
      //   marginVertical: 10,
      marginTop: -15,
      marginBottom: 15,
      fontSize: RFValue(25),
      //   fontWeight: '300',
      color: Colors.LIGHT_GREY,
      textAlign: 'center',
      //   marginHorizontal: RFValue(20),
    },
    input: {
      marginVertical: 10,
      fontSize: RFValue(18),
      //   marginHorizontal: RFValue(20),
      height: 40,
      borderBottomWidth: 1,
      borderColor: Colors.YELLOW,
      //   borderRadius: 8,
      paddingHorizontal: 24,
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      // justifyContent: 'center',
    },
    checkboxContainer: {
      marginTop: 20,
      marginBottom: 60,
      marginHorizontal: 5,
    },
    checkbox: {
      borderColor: '#00FF5E',
      //   marginVertical: 10,
      borderWidth: 1,
      borderRadius: 6,
      height: 22,
      width: 22,
    },
    textSmall: {
      marginVertical: 10,
      fontSize: RFValue(15),
      color: Colors.LIGHT_GREY,
      textAlign: 'center',
      marginHorizontal: RFValue(20),
    },
    textBold: {
      fontWeight: '600',
    },
  });

export default createStyles;
