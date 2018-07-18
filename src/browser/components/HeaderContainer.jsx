import React from 'react';
import HeaderTop from '../components/HeaderTop';
import HeaderInput from '../components/HeaderInput';
import { Route } from 'react-router-dom';

class HeaderContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e){
        this.setState({
            value: e.target.value
        })
        
    }

    handleSubmit(e){
    
    }

    render() {
        return(
        <div>
            <HeaderTop />
            <HeaderInput value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
        )
    }
}

export default HeaderContainer