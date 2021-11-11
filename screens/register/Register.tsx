import React, { FunctionComponent, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { UserType } from 'types-app';
import { auth, db } from '../../firebase/firebase';
import styles from '../styles';

interface RegisterProps {
  route: any;
  navigation: any;
}

const Register: FunctionComponent<RegisterProps> = ({ navigation }) => {
  const [user, setUser] = useState<UserType>({
    email: '',
    password: '',
    name: '',
  });
  const handleChangeText = (key: string, value: string) => {
    setUser({ ...user, [key]: value });
  };
  const handleSingUp = async () => {
    if (user.email != '' || user.name != '' || user.password != '') {
      await auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(async (result: any) => {
          await db.collection('user').doc(result?.user?.uid).set({ user });
        })
        .catch((error) => {
          error?.error ? alert(error?.error?.message) : alert(error);
          console.log(`Error Firebase: ${error}`);
        });
      navigation.navigate('Landing');
    } else {
      alert('Bad data');
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <Input
          placeholder="Name"
          value={user.name}
          onChangeText={(value: string) => {
            handleChangeText('name', value);
          }}
        />
      </View>
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
          title="Sing Up"
          onPress={() => {
            handleSingUp();
          }}
        ></Button>
      </View>
    </ScrollView>
  );
};

export default Register;
