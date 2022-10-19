import React, {FC, useMemo} from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './style';
import {USER_STATS} from '../../assets';
import Button from '../../components/Button';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const StatusScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Stat Screen</Text>
      <ImageBackground source={USER_STATS}>
        <Text>Your Stats</Text>
        <View>
          <Button
            title="Stats"
            disabled={false}
            onPress={() => navigation.navigate('')}
          />
          <Pressable onPress={() => navigation.navigate('')}>
            <Text>Next</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StatusScreen;
