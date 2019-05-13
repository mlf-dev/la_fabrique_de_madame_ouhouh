import React from 'react';

// IMG
import facebookicon from '../../img/facebookicon.png';
import instagramicon from '../../img/instagramicon.png';
import logounicorn from '../../img/logounicorn.png';

// SASS
import './header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className='container' id='headerDiv' ref='divHeader'>
                <div className='row'>
                    {/* DIV GAUCHE : RESEAUX SOCIAUX */}
                    <div className='col-3'>
                        <a href='http://www.facebook.fr'>
                            <img className='reseau_social_icon' alt='facebook icon' src={facebookicon}/>
                        </a>
                        <a href='http://www.instagram.fr'>
                            <img className='reseau_social_icon' alt='facebook icon' src={instagramicon}/>
                        </a>
                    </div>
                    <div className='col-6'></div>
                    {/* DIV DROITE : MON COMPTE */}
                    <div className='col-3'>Search + Mon Compte</div>
                </div>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                        <img className='logounicorn' src={logounicorn} alt='logo de la Fabrique de Madame Ouhouh (licorne)'/>
                        <h1>La Fabrique de Madame Ouhouh</h1>
                    </div>
                    <div className='col-3'></div>
                </div>
            </div>
        )
    }
}

export default Header;