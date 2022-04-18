import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <main>
            <section className="banner py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="banner-content shadow-sm align-middle">
                                <h2 className='mb-3 text-capitalize'>Learn & Grow your career with <span className='text-success'>Rony</span></h2>
                                <h6 className='fst-italic text-primary'>Make Your Dream True</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;