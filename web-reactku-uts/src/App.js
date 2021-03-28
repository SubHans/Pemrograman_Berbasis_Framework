import React from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css'
import ItemPost from './ItemPost/ItemPost'
import AboutStateless from './statelessComponent/AboutStateless'
import ItemCart from './ItemCart/ItemCart';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function uts_cart() {
  return (
    <Router>
      
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Hansingingslasher Elektronik</a>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto" >
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="list_item">List Produk</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="cart_item">Keranjang</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <center>
          <h1>
            <span class="badge rounded-pill bg-light text-dark">Hansingingslasher Elektronik</span></h1>
          <br />
        </center>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/list_item">
          <ListItem />
        </Route>
        <Route exact path="/cart_item">
          <CartItem />
        </Route>
        <Route exact path="/about">
          <AboutStateless />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div>
    
      <center>
      <img src="https://www.wallpapertip.com/wmimgs/221-2215147_tv-background-3d-wallpaper.jpg" class="img-fluid" size="300px"></img>
      <h4><p><strong>Welcome to my Online Store</strong></p></h4>
      <p><em>Toko Elektronik Online pertama di Indonesia yang menyediakan pembayaran Cicilan 0%. Belanja TV Lengkap dan Cicilan 0%</em></p>
      </center>
       
    </div>
  )
}

function ListItem() {
  return (
    <ItemPost />
  )
}

function CartItem() {
  return (
    <ItemCart />
  )
}
