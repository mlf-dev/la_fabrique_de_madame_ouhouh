import React from 'react';

// IMPORT SCSS
import './sousMenuProduits.scss';

class SousMenuProduits extends React.Component{

    constructor(props){
        super(props);

        this.state={
            sousMenuItem:['Cheveux','Visage','Corps','Autres','Grossesse','Bébé']
        }
        
        this.agrandirImgAuSurvolDeLaSourisA = (e) => {
            console.log(e.target.childNodes[0])
        }

        this.agrandirImgAuSurvolDeLaSourisIMG = (e) => {
            console.log(e.target)
        }
    }
    

    render(){
        return (
            <ul className='row' id='sousMenuProduits'>
                {/* BARRE DE DECO A GAUCHE DU SOUS MENU */}
                <li className='col-3 deco'></li>
                
                {/* SOUS-MENU ITEMS */}
                {this.state.sousMenuItem.map( (item) => {
                    return (
                        <li key={item} className='col-1 sousMenuProduitsItem'>
                            <a href='#' onMouseOver={this.agrandirImgAuSurvolDeLaSourisA}>
                                {item}
                            </a>
                        </li>
                    )
                } )}

                {/* BARRE DE DECO A DROITE DU SOUS MENU */}
                <li className='col-3 deco'></li>
            </ul>
        )
    }
}

export default SousMenuProduits;