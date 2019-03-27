import React, { Component } from 'react'
import {View, Text} from 'react-native'

const AlbumDetail = ({ album }) => {
  console.log(album)
  return (
    <View>
      <Text>{album.artist}</Text>
      <Text>{album.title}</Text>
    </View>
  )
}

export default AlbumDetail
