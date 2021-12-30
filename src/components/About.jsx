import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-danger fw-bold mb-4">Tentang Kami</h1>
                        <p className="lead mb-4">Supreme adalah sebuah merek pakaian dan papan luncur asal Amerika Serikat yang didirikan di New York City pada bulan April 1994. Merek ini mencoba mengangkat budaya seluncur papan dan hip hop, serta budaya pemuda secara umum. Merek ini memproduksi pakaian, replika, aksesoris, serta papan luncur. Sepatu, pakaian, dan aksesorisnya juga dijual di pasar sekunder. Logo kotak merah khas "Supreme" dengan huruf Futura Heavy Oblique berwarna putih terinspirasi dari seni propaganda Barbara Kruger. Supreme merilis produk baru melalui gerai ritelnya di seluruh dunia serta di situs webnya tiap hari Kamis pagi di Eropa dan Amerika, serta pada hari Sabtu di Jepang.</p>
                        <NavLink to="/contact" className="btn btn-outline-danger px-3">
                            Kontak Kami
                        </NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
