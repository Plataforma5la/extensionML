import React from 'react';
import './header.css';
import Config from '../../config.js'

class HeaderInput extends React.Component {
    render() {
        return (
            <div className={"nav-header"}>
                <div className={"nav-header-logo"}>
                    <a className={"nav-logo"} href={Config.urlRedirect} target="_blank">Mercado Libre, donde comprar y vender
                </a>
                </div>
                <div className={"nav-bounds"}>
                    <form className={"nav-search"} onSubmit={this.props.handleSubmit}>
                        <input className={"nav-search-input"} size="15" type="text" id="query" placeholder="Estoy buscando..." value={this.props.value} onChange={this.props.handleChange} autoComplete="off" />
                        <button className={"boton-lupa"} type="submit">
                            <span className={"nav-icon-search"}>
                            </span>
                        </button>
                    </form>
                </div>

                <div className={"nav-boton"} >
                    <div className={"botones"} onClick={() => this.props.handleClick()}>
                        <span className={this.props.condition === 'home' ? 'nav-icon-bookmarks' : 'nav-icon-stores-mobile'}>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderInput;