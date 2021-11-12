import React, { FunctionComponent } from 'react';
import { ScrollView, Text } from 'react-native';
import styles from '../styles';

interface FeedProps {
  route: any;
  navigation: any;
}

const Feed: FunctionComponent<FeedProps> = ({}) => {
  return (
    <ScrollView style={styles.container}>
      <Text>Feed</Text>
    </ScrollView>
  );
};

export default Feed;
