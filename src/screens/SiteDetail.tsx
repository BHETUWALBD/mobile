import {Route} from '@react-navigation/routers';
import React, {memo} from 'react';
import BackButton from '../components/BackButton';
import Background from '../components/Background';
import Header from '../components/Header';
import {Navigation} from '../types';

type Props = {
  navigation: Navigation;
  route: Route<string, {[key: string]: any}>;
};

const SiteDetail = ({route, navigation}: Props) => {
  const {name} = route.params;
  return (
    <Background behavior="padding">
      <BackButton goBack={() => navigation.navigate('SiteDetail')} />
      <Header>{name}</Header>
    </Background>
  );
};

export default memo(SiteDetail);
