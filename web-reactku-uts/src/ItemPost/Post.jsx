import React, { Component } from 'react';
import '../css/style.css';
import ItemCart from '../ItemCart/ItemCart';
import { Link, Router, Route } from 'react-router-dom';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: this.props,
            insertProduk: {
                userId: props.id,
                id: 1,
                nama: this.props.nama,
                harga: this.props.harga,
                total_qty: 0,
                total_harga: 0
            }
        }
    }

    handleIncrement = () => {
        this.setState({
            qty: this.state.insertProduk.total_qty += 1,
        })
        if (this.state.insertProduk.total_qty >= this.props.stok) {
            this.setState({
                qty: this.state.insertProduk.total_qty = this.props.stok
            })
        }
        this.handleTotal()
    }

    handleTotal = () => {
        this.setState({
            totalHarga: this.state.insertProduk.total_harga = this.props.harga * this.state.insertProduk.total_qty,
            id: this.state.insertProduk["id"] = new Date().getTime()
        })
    }

    handleDecrement = () => {
        this.setState({
            qty: this.state.insertProduk.total_qty -= 1,
        })
        if (this.state.insertProduk.total_qty <= 0) {
            this.setState({
                qty: this.state.insertProduk.total_qty = 0
            })
        }
        this.handleTotal()
    }

    handleChanged = (event) => {
        this.setState({
            total_qty: this.state.insertProduk["total_qty"] = event.target.value,
        })
        this.handleTotal()
    }

    handleSimpan = () => {
        if (this.state.insertProduk.total_qty <= 0) {
            alert("Masukkan Jumlah Pesanan anda ");
            this.handleDecrement()
        }
        else if (this.state.insertProduk.total_qty > this.props.stok) {
            alert("Pesanan Anda Melebihi Stok Yang Ada");
            this.handleIncrement()
        }
        else if (this.state.insertProduk.total_qty != 0 && this.state.insertProduk.total_qty <= this.props.stok) {
            fetch("http://localhost:3002/cart", {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.state.insertProduk)
            }).then(response => {
                if (response.ok) {
                    alert("Item Masuk Ke Keranjang")
                    this.setState({
                        total_qty: this.state.insertProduk["total_qty"] = 0
                    })
                    this.handleTotal()
                    return response.json()
                }
                else {
                    alert(response.statusText)
                }
            })
        }
    }

    render() {
        return (
            <table class="table">
                <div class="row">
                    
                    <div class="col-sm-2" style={{ marginTop: 20, marginLeft: 20 }} >
                    <img src={this.props.image}  height="150" width="150"></img>
                    </div>
                        <div class="col-sm-3" style={{ marginTop: 20 }}>
                        
                        ID : {this.props.id}
                        <br/>
                        Nama : {this.props.nama} 
                        <br/>
                        Harga : Rp. {this.props.harga}
                        <br/>
                        Stok : {this.props.stok}
                        <br/>
                        
                        </div>
                        <div class="col-4 col-sm-6" style={{ marginTop: 20 }}>
                            <center>
                                <div>Jumlah Barang : {this.state.insertProduk.total_qty}</div><br/>
                                <button class="btn btn-danger" onClick={this.handleDecrement}><b>-</b></button>&emsp;
                                <button onClick={this.handleIncrement} class="btn btn-success"><b>+</b></button>
                                <br /><br/>
                                <div >Harga Total : Rp. {this.state.insertProduk.total_harga}</div>
                                </center>
                                <ul class="navbar-nav ml-auto" ><button type="submit" onClick={this.handleSimpan} class="btn btn-primary" style={{ margin: 10 }} >
                                Beli</button></ul>
                            
                        </div>
                </div>
                </table>
          
        )
    }
}

export default Post;