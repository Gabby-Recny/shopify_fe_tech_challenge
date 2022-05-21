import React from "react";
import crystalBall from './crystal-ball.png';
import './ErrorPage.scss';

const ErrorPage = () => {
    return (
        <section className='error-page'>
            <h2>404 Error</h2>
            <img className='error-page-img' src={crystalBall} alt='Crystal ball vector for a 404 error'/>
            <h4 className='error-page-msg'>We're sorry, there seems to be a 404 Error. <br></br>The crystyal ball says to refresh or try again later.</h4>
        </section>
    )
}

export default ErrorPage;