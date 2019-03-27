import React, { Component } from 'react'
import {View, Text} from 'react-native'
import AlbumDetail from './albumDetail'

class AblumList extends Component {
  constructor(){
    super()
    this.state = { albums: []}
  }

  componentDidMount(){
    fetch("https://rallycoding.herokuapp.com/api/music_albums")
    .then(resp => resp.json())
    .then(data => this.setState({albums: data}))
  }

  render(){
    console.log(this.state.albums, "TEST")
    return (
      <View>
        {this.state.albums.map(album => <AlbumDetail album={album}/>)}
      </View>
    )
  }
}

export default AblumList
