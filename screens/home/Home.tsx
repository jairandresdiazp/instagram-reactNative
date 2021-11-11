import React, { FunctionComponent, useMemo } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { UserStateType } from 'types-app';
import { useActionsUser } from '../../redux/actions/user';
import styles from '../styles';

interface HomeProps {
  route: any;
  navigation: any;
  userState: UserStateType;
}

const Home: FunctionComponent<HomeProps> = ({ userState }) => {
  const actionsUser = useActionsUser();
  useMemo(() => {
    actionsUser.fetchUser();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>User is logged in {JSON.stringify(userState)}</Text>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (store: any) => ({
  userState: store,
});

export default connect(mapStateToProps)(Home);
