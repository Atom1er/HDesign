import React, { Component } from 'react';

class LogIn extends Component {
	render() {
		return (
			<div className='login '>
				<div>
					<div className='container-fluid '>

						<div className="limiter">
							<div className="container-login100">
								<div className="wrap-login100 p-l-50 p-r-50 p-t-77 p-b-30">
									<form className="login100-form validate-form">
										<span className="login100-form-title p-b-55">
											Login
					</span>

										<div className="wrap-input100 validate-input m-b-16" data-validate="Valid email is required: ex@abc.xyz">
											<input className="input100" type="text" name="email" placeholder="Email" />
											<span className="focus-input100"></span>
											<span className="symbol-input100">
												<span className="lnr lnr-envelope"></span>
											</span>
										</div>

										<div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
											<input className="input100" type="password" name="pass" placeholder="Password" />
											<span className="focus-input100"></span>
											<span className="symbol-input100">
												<span className="lnr lnr-lock"></span>
											</span>
										</div>

										<div className="contact100-form-checkbox m-l-4">
											<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
											<label className="label-checkbox100" for="ckb1">
												Remember me
						</label>
										</div>

										<div className="container-login100-form-btn p-t-25">
											<button className="login100-form-btn">
												Login
						</button>
										</div>

										<div className="text-center w-full p-t-42 p-b-22">
											<span className="txt1">
												Or login with
						</span>
										</div>

										<a href="a" className="btn-face m-b-10">
											<i className="fa fa-facebook-official"></i>
											Facebook
					</a>

										<p href="a" className="btn-google m-b-10">
											<img src="images/icons/icon-google.png" alt="GOOGLE" />
											Google
					</p>

										<div className="text-center w-full p-t-115">
											<span className="txt1">
												Not a member?
						</span>

											<a className="txt1 bo1 hov1" href="a">
												Sign up now
						</a>
										</div>
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
export default LogIn;