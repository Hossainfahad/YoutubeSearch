import React ,{Component} from 'react'
import './index.css'

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            keyword:''
        }
    }

handleChange=(event)=>{
    this.setState({
        keyword:event.target.value
    })
}
handleSubmit=(e)=>{
    e.preventDefault();
    this.props.onFormSubmit(this.state.keyword);
}
    render(){
        return(
           <div className=' search-bar ui segmant container'>
               <form className="ui form" onSubmit={this.handleSubmit}>
               <div className="field">
               <input type="text"
                value={this.state.keyword}
                onChange={this.handleChange}
                placeholder='Enter keyword'
                />
               </div>
               </form>
           </div>

        )
    }
}
export default Search;