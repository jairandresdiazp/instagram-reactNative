import React, { FunctionComponent, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { UserType } from 'types-app';
import { auth } from '../../firebase/firebase';
import styles from '../styles';

interface SignInProps {
  route: any;
  navigation: any;
}

const SignIn: FunctionComponent<SignInProps> = ({ navigation }) => {
  const [user, setUser] = useState<UserType>({
    email: '',
    password: '',
    name: '',
  });
  const handleChangeText = (key: string, value: string) => {
    setUser({ ...user, [key]: value });
  };
  const handleSignIn = async () => {
    if (user.email != '' || user.password != '') {
      await auth
        .signInWithEmailAndPassword(user.email, user.password)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert('Bad data');
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <Input
          placeholder="Email"
          value={user.email}
          onChangeText={(value: string) => {
            handleChangeText('email', value);
          }}
        />
      </View>
      <View style={styles.inputGroup}>
        <Input
          placeholder="Password"
          secureTextEntry
          value={user.password}
          onChangeText={(value: string) => {
            handleChangeText('password', value);
          }}
        />
      </View>
      <View style={styles.inputGroup}>
        <Button
          title="Sign In"
          onPress={() => {
            handleSignIn();
          }}
        ></Button>
      </View>
    </ScrollView>
  );
};

export default SignIn;
