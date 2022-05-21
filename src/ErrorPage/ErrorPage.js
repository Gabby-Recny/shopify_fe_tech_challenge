import React from "react";
import crystalBall from '../assets/crystal-ball.png';
import './ErrorPage.scss';

const ErrorPage = () => {
    return (
        <section className='error-page'>
            <h2>404 Error</h2>
            <img className='error-page-img' src={crystalBall} alt='Crystal ball vector for a 404 error'/>
            <h3 className='error-page-msg'>We're sorry, there seems to be a 404 Error. <br></br>The crystyal ball says to refresh or try again later.</h3>
            <button className='error-page-btn'>Go Home</button>
        </section>
    )
}

export default ErrorPage;