import React from 'react';
import '../css/style.css';
import images_biodata from '../images/profil.jpeg';

const AboutStatelsss = () => {
    return (
        <div>
            <div className="wrapper">

                <div class="container">
                    <div class="row align-items-start">
                        <div class="col-sm-4">
                        <img src={images_biodata} className="image_biodata"></img>
                        </div>
                        <div class="col">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Nama    : Subhan Indra Prayoga</th>
                                </tr>
                                <tr>
                                <th scope="col">TTL     : Malang, 02 November 1999</th>
                                </tr>
                                <tr>
                                <th scope="col">Jenis Kelamin     : Laki-laki</th>
                                </tr>
                                <tr>
                                <th scope="col">Alamat  : Jln Wr. Supratman no 139b, Kesiman, Denpasar Timur, Bali</th>
                                </tr>
                                <tr>
                                <th scope="col">Status  : Mahasiswa</th>
                                </tr>
                                <tr>
                                <th scope="col">Hobi     : Olahraga</th>
                                </tr>
                                
                            </thead>
                            </table>
                        </div>
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default AboutStatelsss;