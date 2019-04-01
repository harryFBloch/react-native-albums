import React, { Component } from 'react'
import {Text, View, Image} from 'react-native'
import Card from './card'
import CardItem from './cardItem'

const AlbumDetail = ({ album }) => {
  return (
    <Card>
      <CardItem>
      <View style={styles.thumbnailContainerStyle}>
        <Image style={styles.thumbnailStyle} source={{uri: album.thumbnail_image}}/>
      </View>

      <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle}>{album.title}</Text>
        <Text>{album.artist}</Text>
      </View>

      </CardItem>

      <CardItem>
        <Image style={styles.imageStyle} source={{uri: album.image}}/>
      </CardItem>
    </Card>
  )
}

export default AlbumDetail

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }

}
