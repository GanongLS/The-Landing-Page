import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

import BlackGradient from '../../shared/components/Gradient';
import AppColors from '../../shared/constants/AppColors';
import {height} from '../../shared/constants/AppConstants';
import {useAusiState} from '../../shared/provider/AusiProvider';

const PageTitle = () => {
  const {ausiData} = useAusiState();
  const bannerImage = ausiData?.item?.elements?.banner_image;
  const titlePage = ausiData?.item?.elements?.title_page;

  return (
    <ImageBackground
      source={{
        uri: ausiData?.item?.elements?.banner_image
          ? `${bannerImage.value[0].url}`
          : 'https://www.vectorstock.com/royalty-free-vector/no-photo-or-blank-image-icon-loading-images-vector-37375020',
      }}
      style={{
        ...styles.TitleBackground,
      }}>
      <BlackGradient>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: '20%',
          }}>
          <Text
            style={{
              fontSize: 32,
              fontWeight: '900',
              color: AppColors.white,
              textAlign: 'center',
            }}>
            {titlePage?.value}
          </Text>
        </View>
      </BlackGradient>
    </ImageBackground>
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

export default PageTitle;
