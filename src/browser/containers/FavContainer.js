import React from 'react';
import CardDeals from '../components/cardDeals';
import Axios from '../../axiosdef';


class FavContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fav: []
        }
        this.favUpdate = this.favUpdate.bind(this);
    }
    favUpdate(fav) {
        const bookmark = fav.bookmark
        var favAux = []
        var p = []
        Object.keys(bookmark).forEach((element, index) => {
            p.push(Axios.get(`/back/product/${element}`).then(result => {
                favAux.push(result.data)
            }))
        })
        Promise.all(p).then(() => this.setState({
            fav: favAux
        }))
    }
    componentDidMount() {

        this.favUpdate(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.favUpdate(nextProps)
    }

    render() {

        const { bookmark, valor, handleValor, bookmarkState } = this.props

        return <CardDeals bookmarkState={bookmarkState} bookmark={bookmark} fav={this.state.fav} valor={valor} handleValor={handleValor} />
    }

}

export default FavContainer;