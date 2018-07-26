import React from 'react';
import './header.css';

class HeaderList extends React.Component {
    render() {
        return (
            <div className={"headerList"}>
                <ul className={"lista-botones"}>
                    <li>
                        <button className={this.props.condition === 'home' ? 'botones seleccionado' : 'botones'} onClick={() => this.props.handleClick("home")}>Home
                        </button>
                    </li>
                    <li>
                        <button className={this.props.condition === 'carrito' ? 'botones seleccionado' : 'botones'} onClick={() => this.props.handleClick("carrito")}>Agregar al carrito</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HeaderList;