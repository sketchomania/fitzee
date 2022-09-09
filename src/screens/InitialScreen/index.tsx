import React, {FC, useMemo} from 'react';
import {ImageBackground, Pressable, Image, Text, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './style';
import {INITIAL, LOGO} from '../../assets';
import Button from '../../components/Button';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const InitialScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <Text style={styles.text}>InitialScreen</Text>
      <ImageBackground source={INITIAL} style={styles.background}>
        <Image source={LOGO} style={styles.logo} />
        <Text style={styles.text}>
          It hurts, but one day it will be just warm up
        </Text>
        <View style={styles.bottom}>
          <Button
            title="Get Started"
            disabled={false}
            onPress={() => navigation.navigate('SignupScreen')}
          />
          <Pressable onPress={() => navigation.navigate('SigninScreen')}>
            <Text style={styles.loginText}>Or login</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InitialScreen;
