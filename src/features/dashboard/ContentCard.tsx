import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Image} from '@rneui/base';
import {height} from '../../shared/constants/AppConstants';
import {PageDetailItem} from '../../shared/model/Australia';

export interface ContentCardProps {
  contentDetail: PageDetailItem;
}

const ContentCard = (props: ContentCardProps) => {
  return (
    <View // the card for content
      style={{
        width: height * 0.45,
        backgroundColor: 'white',
        borderRadius: 12,
        flexShrink: 0.4,
        flexGrow: 1,
        flexBasis: 'auto',
        marginBottom: 16,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: 16,
        }}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: props.contentDetail
              ? `${props.contentDetail?.elements?.icon.value[0].url}`
              : 'https://www.vectorstock.com/royalty-free-vector/no-photo-or-blank-image-icon-loading-images-vector-37375020',
          }}
        />
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              lineHeight: 17,
              marginBottom: 4,
            }}>
            {props.contentDetail?.elements?.title?.value}
          </Text>
          <Text
            style={{
              flexShrink: 1,
              flexBasis: 'auto',
              flexWrap: 'wrap',
              fontSize: 12,
              fontWeight: '400',
              lineHeight: 14,
            }}>
            {props.contentDetail?.elements?.description?.value}
          </Text>
        </View>
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

export default ContentCard;
