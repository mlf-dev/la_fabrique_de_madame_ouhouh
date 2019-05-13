import React from 'react';

// IMPORT DU CSS
import './ProductList.scss'

// IMPORT DATAS PRODUITS
import data from '../../Data/productsData.json';

class ProductList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {}

        this.styleOnMouseOver = (e) => {
            console.log(e.target)
        }
    }

    render(){
        return(
            <div>
                <h3>Tous nos produits</h3>
                <ul className='row containerFlex'>
                    {
                        data.map( (item) =>{
                            return(
                                <li key={item.id} onMouseOver={this.styleOnMouseOver} className='productListItemContainer'>
                                    <div className='productListItem'></div>
                                    <h4 className='productName'>{item.nom}</h4>
                                    <div className='priceAndBtnContainer'>
                                        <p>{item.prixUnitaire}€</p>
                                        <button type='button' className='ajouterPanierBtn'>Ajouter au panier</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ProductList;