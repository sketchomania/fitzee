import React, {FC, useMemo} from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './style';
import {SET_DATE} from '../../assets';
import Button from '../../components/Button';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const DateScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>DateScreen</Text>
      <ImageBackground source={SET_DATE}>
        <Text>Set your time</Text>
        <View>
          <Button
            title="Date"
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

export default DateScreen;
