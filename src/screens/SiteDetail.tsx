import React, {memo} from 'react';
import BackButton from '../components/BackButton';
import Background from '../components/Background';
import Header from '../components/Header';
import {Navigation} from '../types';

type Props = {
  navigation: Navigation;
};

const SiteDetail = ({navigation}: Props) => {
  return (
    <Background behavior="padding">
      <BackButton goBack={() => navigation.navigate('SiteDetail')} />
      <Header>Locations Details</Header>
    </Background>
  );
};

export default memo(SiteDetail);
