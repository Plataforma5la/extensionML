import React from 'react';
import HeaderTop from '../components/HeaderTop';
import HeaderInput from '../components/HeaderInput';
import HeaderList from '../components/HeaderList'


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
            window.open("http://mercadolibre.com.mx")
            e.preventDefault();
        }
        else {
            window.open("http://listado.mercadolibre.com.mx/" + this.state.value);
            e.preventDefault()
            this.setState({
                value: ''
            })
        }
    }

    handleClick(id) {
        if (this.state.condition !== id) {
            this.setState({
                condition: id
            })
            this.props.handleValor(id)
        }

    }

    render() {
        return (
            <div>
                <HeaderTop />
                <HeaderInput value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <HeaderList condition={this.state.condition} handleClick={this.handleClick} />
            </div>
        )
    }
}

export default HeaderContainer