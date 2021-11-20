import React from 'react'

import loginImg from "../images/loginPage.jpg"

const Login = () => {
    const ptag = {
    backgroundColor: "#eee"
  };
  const myStyle = {
    borderRadius: "15px"
  };

  const user = {
    fontSize: "50px"
  }
 

    return (
        <>
        

    <section className="vh-100" style={{ ptag }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ myStyle }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold ml-5 mx-1 mx-md-4 mt-4">Sign In</p>

                <form className="mx-1 mx-md-4">
                
                
             

    <div className="d-flex flex-row align-items-center mlg-5">
                  <div className="row">
      <div className="col-15">
      <i className="fa fa-envelope fa-1x" style={{user}}></i>
      </div>
      <div className="col-75">
      
      <input type="text" id="form3Example1c" className="form-control" placeholder="Your Email" />
      </div>
    </div>
    </div>

    <div className="d-flex flex-row align-items-center mb-5">
                  <div className="row">
      <div className="col-15">
      <i className="fa fa-lock fa-1x" style={{user}}></i>
      </div>
      <div className="col-75">
      
      <input type="text" id="form3Example1c" className="form-control"  placeholder="Password"/>
      </div>
    </div>
    </div>

    

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary buttonR btn-lg">Login</button>
                  </div>
                

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={loginImg} className="img-fluid" alt="Sample"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
       
        </>
    )
}

export default Login

