import {Route} from '@react-navigation/routers';
import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
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
      <BackButton goBack={() => navigation.navigate('SiteList')} />
      <Header>{name}</Header>
      <Button
        mode="contained"
        onPress={() => console.log('Signed In')}
        style={styles.button}>
        Sign In
      </Button>
    </Background>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 12,
  },
});

export default memo(SiteDetail);
