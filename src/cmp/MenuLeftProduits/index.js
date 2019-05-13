import React from 'react';

// IMPORT CSS
import './style.css';

class MenuLeftProduits extends React.Component {
    render(){
        return (
            <nav id='MenuLeftProduits'>
                <ul>
                    <li className='categorie allproductstitle'>Tous les produits</li>
                    <li className='hr'/>
                    <li className='categorie'>Cheveux</li>
                        <ul>
                            <li>Shampooings</li>
                            <li>Après-Shampooings</li>
                        </ul>
                    <li className='hr'/>
                    <li className='categorie'>Visage</li>
                        <ul>
                            <li>Démaquillant</li>
                            <li>Huiles hydratantes</li>
                        </ul>
                    <li className='hr'/>
                    <li className='categorie'>Corps</li>
                        <ul>
                            <li>Crèmes hydratantes</li>
                            <li>Savons solides douche</li>
                            <li>Déodorants</li>
                        </ul>
                    <li className='hr'/>
                    <li className='categorie'>Autres</li>
                        <ul>
                            <li>Dentifrices</li>
                        </ul>
                    <li className='hr'/>
                    <li className='categorie'>Grossesse</li>
                        <li>Tous les produits</li>
                    <li className='hr'/>
                    <li className='categorie'>Bébé</li>
                        <li>Tous les produits</li>
                </ul>
                
            </nav>
        )
    }
}

export default MenuLeftProduits;