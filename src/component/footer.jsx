import React from "react";
import './css/footer.css';
import '../App.css';

class Footer extends React.Component{
    render() {
        return(
            <div>
                <div className="container-fluid footer">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                        <div className="logo">
                                    <img src="foodlogo.png" alt="logo" height="100  px" width="100px"></img>
                                </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="blog">
                                <div>
                                <h5>Blog</h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consecte                       
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, conse                   
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, conse      
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, co 
                                    </p>
                               
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="faq">
                                <div>
                                <h5>FAQ</h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consecte                       
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, conse                   
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, conse      
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, co 
                                    </p>
                               
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="aboutus">
                                <div>
                                <h5>About Us</h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consecte                       
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, conse                   
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, conse      
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, co 
                                    </p>
                               
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;