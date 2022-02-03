import React from 'react';
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "ksxx" :"his is from first jsx"
        }
    }
    handleChange = (event)=>{
        console.log("event.target.value",event.target.value)
        this.setState({ksxx:event.target.value ? event.target.value : 'his is from first jsx'})
        this.props.userText(this.state.ksxx)
    }
    render(){
        return (
            <div>
                <p>{this.state.ksxx}</p>
                <input onChange={this.handleChange}/>
                <hr/>
            </div>
            
        )
    }
}
export default Header;