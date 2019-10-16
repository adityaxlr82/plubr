import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {GridList,GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from "material-ui/FlatButton";
import AddCaptionPage from '../add-caption/AddCaptionPage';
import { BrowserRouter as Router, Route,Switch, Redirect,Link,NavLink} from 'react-router-dom'



class ImageResults extends Component {
    constructor(props) {
      super(props)
      this.state = {
         open:false,
        currentImg:'',
        showComponent: false
      }
    }

    handleAddCaption= ()=>{
        return <NavLink to="/"></NavLink>
    }

    handleOpen = img=>{
        this.setState({open:true, currentImg:img })
        
    }
    



    handleClose = img=>{
        this.setState({open:false })
        
    }

     render() {
     let imageListContent;
     const {images} = this.props;

     if(images){
        imageListContent=(
            <GridList cols={4}>
            {images.map(img=>(
                <GridTile
                title={img.tags}
                key ={img.id}
                subtitle={
                    <span>
                    by <strong>{img.user}</strong>
                    </span>
                }
                actionIcon={
                    <IconButton onClick={()=>this.handleOpen(img.largeImageURL) }>
                        <ZoomIn color="white"/>
                        
                    </IconButton>

                }
                >
                    <img src = {img.largeImageURL} alt=""  />
                    
                </GridTile >
            ))}
                
                </GridList>
        )
     }else{
        imageListContent=null;
     }  

     const actions = [
         <FlatButton label="Close" primary={true} onClick={this.handleClose}/>,
        ]

    return (
      <div>
      {imageListContent}
      <Dialog
        actions={actions}
        modal={true}
        open = {this.state.open}
        onRequestClose={this.handleClose}>
        <img src={this.state.currentImg} alt=""style={{width:'100%'}}/>
        </Dialog>
        
      </div>
    )
  }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
}




 export default ImageResults
 
//  () => (
//     <div>
//        <Router>
//             <Route component={ImageResults} />
//        </Router>
//    </div>
//  );
