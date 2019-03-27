import React, { Component } from 'react'
import { Text, View } from 'react-native'


const Header = ({ title }) => {
  const { textStyle, viewStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{title}</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
  }
}


export default Header
