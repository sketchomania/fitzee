import React, {FC, useMemo} from 'react';
import {Text, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './style';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const StatusScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>StatusScreen</Text>
    </View>
  );
};

export default StatusScreen;
