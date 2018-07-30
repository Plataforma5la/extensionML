import React from 'react';
import CardDeals from '../components/cardDeals';


class CardDealsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
<<<<<<< HEAD
||||||| merged common ancestors
    
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1430&limit=5&price=549-650`)
            .then(data => this.setState({products: data.data.results}))
    }

    // handleClick = id => 
    //  this.setState(({bookmark}) => ({
    //         bookmark: {...bookmark, [id]: !bookmark[id]}
    //     }))
   
    
    handleClick = id => { 
    const axiosConfig = {
        headers : {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
           }
    }
    if(!this.state.token) {
        axios.post('https://auth.mercadolibre.com.ar/authorization?response_type=token&client_id=6429131972786101', axiosConfig)
    }
=======

        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1430&limit=5&price=549-650`)
            .then(data => this.setState({ products: data.data.results }))
    }

    // handleClick = id => 
    //  this.setState(({bookmark}) => ({
    //         bookmark: {...bookmark, [id]: !bookmark[id]}
    //     }))


    handleClick = id => {
        const axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            }
        }
        if (!this.state.token) {
            axios.post('https://auth.mercadolibre.com.ar/authorization?response_type=token&client_id=6429131972786101', axiosConfig)
        }
>>>>>>> origin/12-single-product
    }

    render() {
<<<<<<< HEAD
    const { handleClick, bookmark, products } = this.props
     return <CardDeals handleClick={handleClick} bookmark={bookmark} products={products}/>
||||||| merged common ancestors
     return <CardDeals handleClick={this.handleClick} bookmark={this.state.bookmark} products={this.state.products}/>
=======
        return <CardDeals handleClick={this.handleClick} bookmark={this.state.bookmark} products={this.state.products} />
>>>>>>> origin/12-single-product
    }

}

export default CardDealsContainer;