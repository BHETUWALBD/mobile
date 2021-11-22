import React, {memo} from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import {Navigation} from '../types';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';

type Props = {
  navigation: Navigation;
};

const renderItem = ({item}: any) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Header>{item.name}</Header>
    </TouchableOpacity>
  );
};

const SiteList = () => {
  const sites = [
    {id: '1', name: 'Site1'},
    {id: '2', name: 'Site2'},
  ];
  return (
    <Background behavior="padding">
      <Header>Nearby Locations</Header>
      <FlatList
        style={styles.list}
        data={sites}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Background>
  );
};

const styles = StyleSheet.create({
  list: {width: '100%'},
  item: {
    paddingLeft: 20,
    backgroundColor: 'white',
    marginVertical: 10,
  },
});

export default memo(SiteList);
