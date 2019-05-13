import React from 'react';

// IMPORTS CMP
import SousMenuProduits from './SousMenuProduits';

// IMPORT SCSS
import './navbar.scss';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        

        // STATE
        this.state = {
            arraynavbaritem: [
                { 
                    'name':'Home',
                    'id':1
                }, 
                {
                    'name':'Produits',
                    'id':2
                },       
                {
                    'name':'Concept',
                    'id':3
                }, 
                {
                    'name':'Contact',
                    'id':3
                }
            ]
        }
    }

        render() {

            return (
                <div className='container-fluid'>
                    <ul className='row' id='ulNavBar'>

                        {/* BARRE DE NAVIGATION : */}
                        {
                            this.state.arraynavbaritem.map( (item) => {

                                return (
                                    <li className='col-3 navItem' key={item.name} ref='navItem'>
                                        <a 
                                            onMouseOver={this.props.fonctionToggleSousMenuProduits} 
                                            onClick={this.props.fonctionTogglePages} 
                                            id={item.id}  
                                            href="#" 
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                )
                            })
                        }

                    </ul>

                    {/* SOUS MENU */}
                    { this.props.showSousMenuProduits === true && (
                        <SousMenuProduits/>
                    )}
                    
                </div>
            )
        }
}

export default NavBar;