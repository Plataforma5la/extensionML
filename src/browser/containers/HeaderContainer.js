import React from 'react';
import HeaderInput from '../components/HeaderInput';
import Config from '../../config.js'

class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            condition: this.props.valor
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })

    }

    handleSubmit(e) {
        if (!this.state.value) {
            window.open(Config.urlRedirect)
            e.preventDefault();
        }
        else {
            window.open(Config.search + this.state.value);
            e.preventDefault()
            this.setState({
                value: ''
            })
        }
    }

    handleClick() {
        if (this.props.valor === 'home') {
            this.props.handleValor('carrito')
            this.setState({
                condition: 'carrito'
            })
        }
        else if (this.props.valor === 'carrito') {
            this.props.handleValor('home')
            this.setState({
                condition: 'home'
            })
        }
    }

    render() {
        return (
            <HeaderInput value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleClick={this.handleClick} condition={this.state.condition} />
        )
    }
}

export default HeaderContainer