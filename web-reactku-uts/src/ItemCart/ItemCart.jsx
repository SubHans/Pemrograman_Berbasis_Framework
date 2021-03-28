import React, { Component } from 'react';
import '../css/style.css';
import PostCart from './PostCart';

class ItemCart extends Component {
    state = {
        listCart: [],
        totalHarga: 0,
        nom: 0
    }

    ambilDataDariApi = () => {
        fetch("http://localhost:3002/cart?_sort=id&_order=asc")
            .then(response => response.json())
            .then(jsonGetDataApi => {
                this.setState({
                    listCart: jsonGetDataApi
                })
            })
    }

    handleHapusData = (data) => {
        fetch(`http://localhost:3002/cart?_sort=id&_order=asc${data}`, {method: 'DELETE'})
            .then(res => {
                this.ambilDataDariApi()
            })
    }

    componentDidMount() {
        this.ambilDataDariApi();
    }

    render() {
        return (
            <div className="wrapper">
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Nomor</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Harga</th>
                        <th scope="col">Quality</th>
                        <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                
                        <tbody>
                            {this.state.listCart.map(cart => {
                                return (this.state.nom += 1,
                                    <PostCart key={cart.userId} 
                                    nama={cart.nama} 
                                    nom={this.state.nom}
                                    harga={cart.harga} 
                                    total_qty={cart.total_qty} 
                                    total_harga={cart.total_harga} 
                                    // hapusData={this.handleHapusData}
                                    />
                                )
                                
                            })}
                                {this.state.listCart.map(cart => {
                                this.state.totalHarga += cart.total_harga
                            })}
                            < tr >
                                <td colSpan="4" style={{ textAlign: "right" }}><b>Total</b></td>
                                <td>Rp. {this.state.totalHarga}</td>
                            </tr>
                        </tbody>
            </table>
           </div>   
        );
    }
}

export default ItemCart;