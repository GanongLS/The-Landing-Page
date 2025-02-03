import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/RootStack';
import {height} from '../../shared/constants/AppConstants';
import PageTitle from './PageTitle';
import AppColors from '../../shared/constants/AppColors';
import {Image} from '@rneui/base';
import {useAusiState} from '../../shared/provider/AusiProvider';
import ContentCard from './ContentCard';

const DashboardPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {ausiData} = useAusiState();
  const content = ausiData?.modular_content;
  const modular_content_1 = content?.technical_test___mobile_dev___page_item_1;

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
      <View // container for all content columns
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: 20,
        }}>
        <ContentCard contentDetail={modular_content_1} />
        <ContentCard
          contentDetail={content?.technical_test___mobile_dev___page_item_2}
        />
        <ContentCard
          contentDetail={content?.technical_test___mobile_dev___page_item_3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 56,
    height: 56,
    marginRight: 16,
    flex: 1,
  },
});

export default DashboardPage;
