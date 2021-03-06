import React, { Component } from 'react'
import {ScrollView, Text} from 'react-native'
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
    return (
      <ScrollView>
        {this.state.albums.map(album => <AlbumDetail album={album} key={album.title}/>)}
      </ScrollView>
    )
  }
}

export default AblumList
