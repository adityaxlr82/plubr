import React, { Component } from 'react'
import NavBar from './navbar/NavBar'
import Search from './search/Search'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'




class PumblrApp extends Component {
  render() {
    return (
      
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider> 
    )
  }
}

export default PumblrApp
