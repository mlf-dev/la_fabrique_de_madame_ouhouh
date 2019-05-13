import React from 'react';

// IMPORT CMP
import ProductPub from '../../cmp/ProductPub';
import ProductList from '../../cmp/ProductList';
import MenuLeftProduits from '../../cmp/MenuLeftProduits';

// IMPORT CSS
import './ProduitsPage.scss';

class Produits extends React.Component{
    render(){
        return (
            <div className='container mainProduitsPage'>
                <MenuLeftProduits/>
                <div id='productsContainerRight'>
                    <ProductPub/>
                    <hr/>
                    <ProductList/>
                </div>
            </div>
        )
    }
}

export default Produits;