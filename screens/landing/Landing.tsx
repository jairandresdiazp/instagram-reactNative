import React, { FunctionComponent } from 'react';
import { Button, ScrollView, View } from 'react-native';
import styles from '../styles';

interface LandingProps {
  route: any;
  navigation: any;
}

const Landing: FunctionComponent<LandingProps> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <Button
          title="Register"
          onPress={() => {
            navigation.navigate('Register');
          }}
        ></Button>
      </View>
      <View style={styles.inputGroup}>
        <Button
          title="Sign In"
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        ></Button>
      </View>
    </ScrollView>
  );
};

export default Landing;
