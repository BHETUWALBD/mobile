import React, {memo} from 'react';
import {StyleSheet, KeyboardAvoidingView, View} from 'react-native';

type Props = {
  children: React.ReactNode;
  behavior?: 'height' | 'position' | 'padding';
};

const Background = ({children, behavior}: Props) => (
  <View style={styles.background}>
    <KeyboardAvoidingView
      style={styles.container}
      behavior={behavior || 'padding'}>
      {children}
    </KeyboardAvoidingView>
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);
