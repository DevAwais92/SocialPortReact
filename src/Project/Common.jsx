import React from 'react'
import { NavLink } from 'react-router-dom'
import '.././index.css'

const Common = (props) => {
    return (
        <div>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-3 d-flex justify-content-center flex-column">
                                    <h1>
                                        {props.name} <strong style={{ color: 'Red' }}>SocialPort</strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are Team of Half Stack Developers
                                </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.route} className="btn-get-started" >
                                            {props.btname}
                                    </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} alt="Home" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Common
