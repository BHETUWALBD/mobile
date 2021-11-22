import React, {memo} from 'react';
import {Appbar, Text} from 'react-native-paper';
import {Navigation} from '../types';

type Props = {
  navigation: Navigation;
};

const SiteDetail = () => {
  return (
    <Appbar.Header>
      <Appbar.BackAction
        onPress={() => {
          console.log('Site Detail');
        }}></Appbar.BackAction>
      <Appbar.Content title="Detail">
        <Text>Hello</Text>
      </Appbar.Content>
    </Appbar.Header>
  );
};

export default memo(SiteDetail);
