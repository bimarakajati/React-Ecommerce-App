import React from "react";

const Signup = () => {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-danger mb-1" data-bs-toggle="modal" data-bs-target="#signupModal" style={{ marginRight: "8px" }}>
                <span className="fa fa-user-plus me-1"></span>Daftar
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Daftar
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-danger w-100 mb-4">
                                <span className="fa fa-google me-2"></span> Daftar dengan Google
                            </button>
                            <button className="btn btn-danger w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span> Daftar dengan Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">
                                        Username
                                    </label>
                                    <input type="text" className="form-control" id="exampleInput" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Alamat email
                                    </label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">
                                        Kami tidak akan pernah membagikan email Anda kepada orang lain.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">
                                        Kata Sandi
                                    </label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-outline-danger w-100 mt-5">
                                    Daftar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
