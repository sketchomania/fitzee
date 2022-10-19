import React, {FC, useMemo} from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './style';
import {SIGN_IN} from '../../assets';
import Button from '../../components/Button';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SigninScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>SigninScreen</Text>
      <ImageBackground source={SIGN_IN} style={styles.background} >
        <Text> Sign-in to get started</Text>
        <View>
          <Button
            title="Sign-in"
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

export default SigninScreen;
