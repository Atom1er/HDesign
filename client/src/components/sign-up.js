import React, { Component } from 'react';


class SUP extends Component {
    state = {
    }

    handleSubmit(event){
        event.peventDefault()
        console.log(this.state.username);
        console.log(this.state.password);
    }

    render() {
        return (
            <div className="login" >
                {/* <h1>SignUp Page</h1> */}

                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Sign In</h5>
                                    <form className="form-signin">
                                        <div className="form-label-group">
                                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus
                                            value={this.state.username} onChange={this.handleChange} name="username"
                                            />
                                            <label for="inputEmail">Email address</label>
                                        </div>

                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                            <label for="inputPassword">Password</label>
                                        </div>

                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" for="customCheck1">Remember password</label>
                                        </div>
                                        <button className=" log btn btn-lg btn-primary btn-block text-uppercase" type="submit"
                                        onSubmit={this.handleSubmit}
                                        >Sign in</button>
                                       </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                );
           }
       }
        
export default SUP;