import React from 'react';
import './header.css';

class HeaderInput extends React.Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return(
        <div className={"headerImput"}>
            <form onSubmit={this.props.handleSubmit}>
                <div className={"formulario"}>
                    <input size="15" type="text" id="query" placeholder="Buscar productos, marcas y más..." maxlength="120" value={this.props.value} onChange={this.props.handleChange}/>
                    <button className={"botonSubmit"} type="submit"><img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png" id="lupa" alt="lupa" /></button>
                </div>
            </form>
        </div>
        )
    }
}

export default HeaderInput;