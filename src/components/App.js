import React, { Component } from 'react';
import Search from './search'
import youtube from'../apis/youtube'
import VideoList from './videoList'
import Details from './Details'

class App extends Component {

  state={
    videos:[],
    selectedVideo:null
  }
  
onKeySubmit= async keyword=>{
  const response= await youtube.get('/search',
   {
     params:{
       q:keyword
     }
   })
   this.setState({
     videos:response.data.items
   })
}

onVideoSelect=(video)=>{
  this.setState({
    selectedVideo:video
  })
}
  render() {
    return (
      <div className='ui container'>
        <h3 style={{textAlign:'center', marginTop:'1rem',marginBottom:'2rem',fontWeight:'bold',fontStyle:'italic'}}>A Simple Youtube Like Video Searching App Made By React.js</h3>
         <Search onFormSubmit={this.onKeySubmit}/>

         <div className='ui grid'>
         <div className='ui row'>
          <div className='ten wide column'><Details video={this.state.selectedVideo}/></div>
         <div className='six wide column'> <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/></div>
         </div>
         </div>
         </div>
    );
  }
}

export default App;
