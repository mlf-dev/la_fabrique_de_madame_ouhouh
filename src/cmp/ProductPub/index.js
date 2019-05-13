import React from 'react';

// IMPORT SCSS
import './productPub.scss';

class ProductPub extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            pubItem:
                [
                    {
                        name: 'Produit du mois',
                        nomProduit: 'Shampooing à la poudre de Shikakai'
                    },
                    {
                        name: 'Meilleure vente',
                        nomProduit: 'Dentifrice solide aux HE'
                    },
                    {
                        name: 'Spécial grossesse',
                        nomProduit: 'Déodorant solide sans HE'
                    }
                ]
        };
    }

    render(){
        return (
                <div id='zoomProduitContainer'>
                    <h3 id='TitleContainerPub'>Nos Suggestions</h3>

                    <ul className='row containerFlex'>
                        {/* AFFICHAGE DES PUB DU TABLEAU PUBITEM */}
                        {this.state.pubItem.map( (item) => {
                            return (
                                <li className='produitPubItemContainer'>
                                    <div key={item.name} className='produitPubItem'>
                                        <h3 className='titlePub'>{item.name}</h3>
                                    </div>
                                    <h4 className='productName'>{item.nomProduit}</h4>
                                </li>
                            )
                        })}
                    </ul>
                    
                </div>
        )
    }
}

export default ProductPub;