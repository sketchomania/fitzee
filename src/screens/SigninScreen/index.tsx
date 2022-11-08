import React, {FC, useMemo} from 'react';
import {ImageBackground, Pressable, Text, TextInput, View} from 'react-native';
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
      {/* <Text style={styles.text}>SigninScreen</Text> */}
      <ImageBackground source={SIGN_IN} style={styles.background} />
      <>
      <View>
        
      </View>
        <Text style={styles.textMain}>
          {'Add details to setup your account'}
        </Text>
        <View>

        <TextInput
          style={{color: 'red', borderColor: 'yellow', borderBottomWidth: 2 , padding: 2}}
          />
          </View>
        <Text style={styles.textMain}> Sign-in to get started</Text>
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
      </>
    </View>
  );
};

export default SigninScreen;
