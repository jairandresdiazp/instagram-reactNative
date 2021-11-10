import React, { FunctionComponent } from 'react';
import { Button, StyleSheet, View } from 'react-native';

interface LandingProps {
  route: any;
  navigation: any;
}

const Landing: FunctionComponent<LandingProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate('Register');
        }}
      ></Button>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      ></Button>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
