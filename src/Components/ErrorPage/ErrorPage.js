import React from "react";
import crystalBall from '../../assets/crystal-ball.png';
import './ErrorPage.scss';
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <section className='error-page'>
            <h2>404 Error</h2>
            <img className='error-page-img' src={crystalBall} alt='Crystal ball for a 404 error'/>
            <h3 className='error-page-msg'>We're sorry, there seems to be a 404 Error. <br></br>The crystyal ball says to refresh or press the  magic button below.</h3>
            <Link to="/">
                <button className='error-page-btn'>Go Home</button>
            </Link>
        </section>
    )
}

export default ErrorPage;