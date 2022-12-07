import React, {FC, useMemo, useState} from 'react';
import {ImageBackground, Pressable, Text, TextInput, View} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import createStyles from './style';
import {SIGN_UP} from '../../assets';
import Button from '../../components/Button';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const SignupScreen: FC<IProps> = ({navigation}) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const styles = useMemo(() => createStyles(), []);
  return (
    <View style={styles.body}>
      <ImageBackground source={SIGN_UP} style={styles.background} />
      <View style={styles.content}>
        <Text style={{...styles.titleText, ...styles.textBold}}>
          Add details to setup your account
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="example@gmail.com"
          placeholderTextColor={'gray'}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Enter a password"
          placeholderTextColor={'gray'}
        />
        <View style={styles.checkboxContainer}>
          <View style={styles.flexRow}>
            <View style={styles.checkbox}></View>
            <Text style={styles.textSmall}>
              I've read the
              <Text style={{...styles.textSmall, ...styles.textBold}}>
                {' '}
                privacy policy
              </Text>
            </Text>
          </View>
          <View style={styles.flexRow}>
            <View style={styles.checkbox}></View>
            <Text style={styles.textSmall}>
              I accept the
              <Text style={{...styles.textSmall, ...styles.textBold}}>
                {' '}
                terms & conditions
              </Text>
            </Text>
          </View>
        </View>

        <View>
          <Button
            title="Create account"
            disabled={false}
            onPress={() => navigation.navigate('NameScreen')}
          />
          <Pressable onPress={() => navigation.navigate('SigninScreen')}>
            <Text style={styles.textSmall}>Or Sign-up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
