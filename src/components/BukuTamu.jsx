import React from "react";

const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row p-4">
                    <div className="text-center">
                        <h1>Buku Tamu</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/images/oreo.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">
                                    Nama Panjang
                                </label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="Bima Rakajati" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Alamat Email
                                </label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">
                                    Pesan
                                </label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-danger">
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
                <br />
                <div className="row">
                    <hr />
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Pesan</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1.</th>
                                    <td>Bima</td>
                                    <td>bima@gmail.com</td>
                                    <td>Bismillah</td>
                                    <td>
                                        <button className="btn btn-warning mb-1" style={{ marginRight: "5px" }}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger mb-1">Hapus</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2.</th>
                                    <td>Raka</td>
                                    <td>raka@gmail.com</td>
                                    <td>UAS</td>
                                    <td>
                                        <button className="btn btn-warning mb-1" style={{ marginRight: "5px" }}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger mb-1">Hapus</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3.</th>
                                    <td>Jati</td>
                                    <td>jati@gmail.com</td>
                                    <td>Lancar</td>
                                    <td>
                                        <button className="btn btn-warning mb-1" style={{ marginRight: "5px" }}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger mb-1">Hapus</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4.</th>
                                    <td>Supreme</td>
                                    <td>supreme@gmail.com</td>
                                    <td>Amin</td>
                                    <td>
                                        <button className="btn btn-warning mb-1" style={{ marginRight: "5px" }}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger mb-1">Hapus</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
