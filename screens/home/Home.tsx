import React, { FunctionComponent, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { fetchUser } from '../../redux/actions';
import styles from '../styles';
import { UserStateType } from 'types-app';

interface HomeProps {
  route: any;
  navigation: any;
  userState: UserStateType;
}

const Home: FunctionComponent<HomeProps> = ({ navigation, userState }) => {
  useEffect(() => {
    fetchUser();
  }, []);
  console.log(`userState ${JSON.stringify(userState)}`);
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>User is logged in</Text>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (store: any) => ({
  userState: store.userState,
});

const mapDispatchProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Home);
