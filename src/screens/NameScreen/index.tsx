import React, {FC, useMemo} from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './style';
import {USER_NAME} from '../../assets';
import Button from '../../components/Button';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const NameScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>NameScreen</Text>
      <ImageBackground source={USER_NAME}>
        <Text>What should we call you</Text>
        <View>
          <Button
            title="Sign-up"
            disabled={false}
            onPress={() => navigation.navigate('')}
          />
          <Pressable onPress={() => navigation.navigate('')}>
            <Text>Or Sign-up</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default NameScreen;
