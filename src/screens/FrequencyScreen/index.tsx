import React, {FC, useMemo} from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './style';
import {SET_FREQUENCY} from '../../assets';
import Button from '../../components/Button';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const FrequencyScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>FrequencyScreen</Text>
      <ImageBackground source={SET_FREQUENCY}>
        <Text>how many days you want to workout in a week</Text>
        <View>
          <Button
            title="Frequency"
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

export default FrequencyScreen;
