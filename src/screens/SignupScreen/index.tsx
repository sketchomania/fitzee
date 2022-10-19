import React, {FC, useMemo} from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './style';
import {SIGN_UP} from '../../assets';
import Button from '../../components/Button';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SignupScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>SignupScreen</Text>
      <ImageBackground source={SIGN_UP}>
        <Text>Sign-up to get started</Text>
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

export default SignupScreen;
