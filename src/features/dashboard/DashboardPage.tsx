import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/RootStack';
import {useAusiState} from '../../shared/provider/AusiProvider';
import AppColors from '../../shared/constants/AppColors';
import {height} from '../../shared/constants/AppConstants';
import BlackGradient from "../../shared/components/Gradient";

const DashboardPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {ausiData} = useAusiState();
  const bannerImage = ausiData?.item?.elements?.banner_image;
  console.log(bannerImage);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Text>Dashboard Page</Text>
      <Button onPress={() => navigation.navigate('Unique Wildlife')}>
        Go to Unique Wildlife
      </Button> */}
      <ImageBackground
        source={{
          uri: ausiData?.item?.elements?.banner_image
            ? `${bannerImage.value[0].url}`
            : 'https://st2.depositphotos.com/4083751/6003/v/600/depositphotos_60038011-stock-video-film-negative-animation.jpg',
        }}
        style={{
          ...styles.imageThumbnail,
        }}>
        <BlackGradient>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              paddingBottom: 15,
              paddingLeft: 10,
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                color: AppColors.white,
                marginBottom: 6,
              }}>
              Selamat Datang,
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: AppColors.white,
              }}>
              Nikmati ribuan movie cukup dengan smartphone.
            </Text>
          </View>
        </BlackGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageThumbnail: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.35,
  },
});

export default DashboardPage;
