import React from 'react'
import Nav from './nav.js';
function LayOut(props){

    return(
        <div className="container-fluid" style={{height:'100vh'}}>
            <div className="row">
                <Nav />
            </div>
            <div className="row" style={{marginTop:'5%'}}>
                <div className="col-md-12">
                    { props.children }
                </div>
            </div>
        </div>
    )
};

export default LayOut;