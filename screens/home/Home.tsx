import React, { FunctionComponent, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { fetchUser } from '../../redux/actions';
import styles from '../styles';

interface HomeProps {
  route: any;
  navigation: any;
}

const Home: FunctionComponent<HomeProps> = ({ navigation }) => {
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>User is logged in</Text>
      </View>
    </ScrollView>
  );
};

const mapDispatchProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(null, mapDispatchProps)(Home);
