import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { UserType } from 'types-app';

interface RegisterProps {
  route: any;
  navigation: any;
}

const Register: FunctionComponent<RegisterProps> = ({ navigation }) => {
  const [user, setUser] = useState<UserType>({ email: '', pass: '', name: '' });
  const handleChangeText = (key: string, value: string) => {
    setUser({ ...user, [key]: value });
  };
  const handleSingUp = () => {
    navigation.navigate('Register');
  };
  return (
    <View style={styles.container}>
      <View>
        <Input
          placeholder="Name"
          value={user.name}
          leftIcon={{ type: 'font-awesome', name: 'font' }}
          onChangeText={(value: string) => {
            handleChangeText('name', value);
          }}
        />
      </View>
      <View>
        <Input
          placeholder="Email"
          value={user.email}
          leftIcon={{ type: 'font-awesome', name: 'font' }}
          onChangeText={(value: string) => {
            handleChangeText('email', value);
          }}
        />
      </View>
      <View>
        <Input
          placeholder="Password"
          secureTextEntry
          value={user.pass}
          leftIcon={{ type: 'font-awesome', name: 'font' }}
          onChangeText={(value: string) => {
            handleChangeText('pass', value);
          }}
        />
      </View>
      <View>
        <Button
          title="Sing Up"
          onPress={() => {
            handleSingUp();
          }}
        ></Button>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
