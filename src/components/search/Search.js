import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem';
import ImageResults from '../image-results/ImageResults'
const axios = require("axios");





 class Search extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        SearchText:'',
        amount:15,
        apiUrl: "https://pixabay.com/api",
        apiKey:'13952898-845e19960791ff710f2e0205e',
        id:[],
        images:[]
      }
    }


    onTextChange = (e)=>{
        const val = e.target.value;
        this.setState({
            [e.target.name]:val
        },()=>{
            if (val === '') {
                this.setState({images:[]})
            }   else {
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}
                &image_type=photo&per_page=${this.state.amount}&safesearch=true`)   
                       .then(res=>this.setState({
                           images:res.data.hits,
                           id:res.data.hits[1].id
                       }))
                       .catch(err=>console.log(err))

                }
        })
    }
    
    onAmountChange=(e,index,value)=>{
        this.setState({
            amount:value
        })
    }


  
    render() {
        console.log(this.state.images)
    return (
      <div>
     
      <TextField 
        name="searchText"
        value={this.state.searchText}
        onChange={this.onTextChange}
        floatingLabelText="Search For Images"
        fullWidth={true}
      />
      <br />
      <SelectField
      name="amount"
      value={this.state.amount}
      onChange={this.onAmountChange}
    >
      <MenuItem value="5" primaryText="5"/ >
      <MenuItem value="10" primaryText="10"/ >
      <MenuItem value="15" primaryText="15"/ >
      <MenuItem value="30" primaryText="30"/ >
      <MenuItem value="50" primaryText="50"/ >
      <MenuItem value="100" primaryText="100"/ >
      <MenuItem value="200" primaryText="200"/ >

    </SelectField> 
        <br />
        {this.state.images.length>0 ? (<ImageResults images={this.state.images } />):null }
        
      </div>
    )
  }
}
export default Search