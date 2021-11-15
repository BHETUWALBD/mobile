import React, {memo} from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import {Navigation} from '../types';
import {useDispatch} from 'react-redux';
import {logout} from '../reducers/user';

type Props = {
  navigation: Navigation;
};

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <Background behavior="padding">
      <Header>Let’s start</Header>
      <Paragraph>This is the main page of app.</Paragraph>
      <Button mode="outlined" onPress={() => dispatch(logout())}>
        Logout
      </Button>
    </Background>
  );
};

export default memo(Dashboard);
