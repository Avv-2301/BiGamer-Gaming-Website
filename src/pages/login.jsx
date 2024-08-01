import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import SocialMedia from "../component/section/socialmedia";
import validation from "../LoginValidation";

const title = "Login";

const LogIn = () => {
    const [state, setState] = useState({ userName: '', userPass: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setState(validation(state));
    }

    return (
        <Fragment>
            <Header />
            <PageHeader title={'LOGIN FOR GAMING'} curPage={'Login'} />
            <div className="login-section padding-top padding-bottom">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form action="" onSubmit={handleSubmit} className="account-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    id="item01"
                                    value={state.userName}
                                    onChange={(e) => setState({ ...state, userName: e.target.value })}
                                    placeholder="User Name *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    id="item02"
                                    value={state.userPass}
                                    onChange={(e) => setState({ ...state, userPass: e.target.value })}
                                    placeholder="Password *"
                                />
                            </div>
                            <div className="form-group">
                                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                    <div className="checkgroup">
                                        <input type="checkbox" name="remember" id="remember" />
                                        <label htmlFor="remember">Remember Me</label>
                                    </div>
                                    <a href="#">Forget Password?</a>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="d-block default-button"><span>Submit Now</span></button>
                            </div>
                        </form>
                        {/* <div className="account-bottom">
                            <span className="d-block cate pt-10">Don’t Have any Account? <Link to="/signup"> Sign Up</Link></span>
                            <span className="or"><span>or</span></span>
                            <h5 className="subtitle">Login With Social Media</h5>
                            <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center mt-4">
                                <SocialMedia />
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default LogIn;
