import React, { Component } from 'react';

// IMPORT OUTILS
import 'bootstrap/dist/css/bootstrap.min.css';

// IMPORT CSS
import './App.css';

// IMPORTS CMP
import Header from './cmp/Header';
import NavBar from './cmp/NavBar';
// IMPORTS PAGES
import Home from './Pages/HomePage';
import Produits from './Pages/ProduitsPage';
import Concept from './Pages/ConceptPage';
import Contact from './Pages/ContactPage';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'Home',
      showSousMenuProduits: false
    };

    // TOGGLE PAGES-VIEWS ONCLICK
    this.togglePages = (e) => {
      e.preventDefault()
      console.log(this)
      this.setState({
        // Change la vue et affiche la page correspondante au click
        view: e.target.innerText
      })
      // Fait disparaître le sous-menu produits si la page affichée n'est pas produits
      if (e.target.innerText !== 'Produits') {
        this.setState({showSousMenuProduits: false})
      }else this.setState({showSousMenuProduits: true})
    }

    // TOGGLE SOUS-MENU PRODUITS ET CHANGER VUE PRODUITS ONMOUSEOVER
    this.toggleSousMenuProduits = (e) => {
      e.preventDefault()
      // Si la page affichée n'est pas Produits
      if (this.state.view !== 'Produits') {
        // On toggle le sous-menu produits onMouseOver de Produits
        if (e.target.innerText === 'Produits'){
        this.setState(() => ({ 
        showSousMenuProduits: !this.state.showSousMenuProduits,
      }))
      } else {
        // onMouseOver d'un autre item de NavBar on fait disparaître le sous-menu Produits
        this.setState(() => ({
          showSousMenuProduits: false
        }))
      }
      }

      
      
    };

  }

  render() {
var MyComponent = this.state.view;
    return (
      <div>
        <Header/>
        <NavBar 
          // On passe les fonctions en props au cmp pour les déclencher dans le cmp
          fonctionToggleSousMenuProduits={this.toggleSousMenuProduits} 
          fonctionTogglePages={this.togglePages}
          showSousMenuProduits={this.state.showSousMenuProduits}
        />
        <main>
          {/* AFFICHAGE DES PAGES EN FONCTION DU STATE ET DE LA NAVBAR */}
          {this.state.view === 'Home' && (
            <Home/>
          )}
          {this.state.view === 'Produits' && (
            <Produits/>
          )}
          {this.state.view === 'Concept' && (
            <Concept/>
          )}
          {this.state.view === 'Contact' && (
            <Contact/>
          )}
        </main>
      </div>
    );
  }
}

export default App;
