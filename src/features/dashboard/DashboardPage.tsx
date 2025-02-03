import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/RootStack';
import {height} from '../../shared/constants/AppConstants';
import PageTitle from './PageTitle';
import AppColors from '../../shared/constants/AppColors';

const DashboardPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  console.log(height);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: AppColors.grayF8,
      }}>
      <PageTitle />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: 20,
        }}>
        <View
          style={{
            width: height * 0.45,
            height: height * 0.184,
            backgroundColor: 'white',
            borderRadius: 12,
          }}>
          <Text>Apa</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TitleBackground: {
    resizeMode: 'cover',
    width: '100%',
    height: height * 0.33,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    overflow: 'hidden',
  },
});

export default DashboardPage;
