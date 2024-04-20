import React from "react";
import "./Register.css";

function Register() {
  return (
    <>
      <link
        href="../../Assets/shop/t/9/assets/bootstrap.min528d.css?v=19868337340211324411698938058"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/stylea2a8.css?v=23287745902246098161698938060"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/theme-default8cb8.css?v=87801545591066565141698938089"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/theme-custom0acb.css?v=63313606314167933051698938089"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/icons.min4e41.css?v=144771626144460745771698938059"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/icofont.minba8d.css?v=49818375117710154861698938058"
        rel="stylesheet"
        type="text/css"
        media="all"
      />

      <link
        href="../../Assets/shop/t/9/assets/skin-and-color85c1.css?v=64489753365287532231698938089"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <script src="../../Assets/shop/t/9/assets/jquery-1.12.4.min61ad.js?v=167620768852842279821698938059"></script>
      {/* <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#dd321e" />
      <title>Register - Asian Publishers</title>
      <link
        href="../../Assets/shop/t/9/assets/bootstrap.min528d.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/stylea2a8.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/theme-default8cb8.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/theme-custom0acb.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/icons.min4e41.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/icofont.minba8d.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      />
      <link
        href="../../Assets/shop/t/9/assets/skin-and-color85c1.css"
        rel="stylesheet"
        type="text/css"
        media="all"
      /> */}
      <video autoPlay="" muted="" loop="" id="background-video">
        <source src="Images/HomeVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <main>
        <div
          className="customer-page theme-default-margin"
          style={{ paddingTop: 25 }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                <div className="login">
                  <div id="CustomerLoginForm">
                    <form
                      method="post"
                      action="https://dunki-demo.myshopify.com/account/login"
                      id="customer_login"
                      acceptCharset="UTF-8"
                      data-login-with-shop-sign-in="true"
                    >
                      <input
                        type="hidden"
                        name="form_type"
                        defaultValue="customer_login"
                      />
                      <input type="hidden" name="utf8" defaultValue="✓" />
                      <div
                        className="login-form-container"
                        style={{
                          backgroundColor: "rgb(243,243,243,0.7)",
                          borderRadius: 10,
                        }}
                      >
                        <div className="login-text">
                          <h3 style={{ fontWeight: 600 }}>REGISTER NOW</h3>
                          <p>Please Register Now By Fill Below Details</p>
                        </div>
                        <div className="login-form">
                          <input
                            type="text"
                            name="Name"
                            id="Name"
                            className="input-full"
                            placeholder="Name"
                            autoCorrect="off"
                            autoCapitalize="off"
                            autofocus=""
                          />
                          <input
                            type="MobileNo"
                            name="MobileNo"
                            id="MobileNo"
                            className="input-full"
                            placeholder="Mobile No."
                            autoCorrect="off"
                            autoCapitalize="off"
                            autofocus=""
                          />
                          <input
                            type="email"
                            name="customer[email]"
                            id="CustomerEmail"
                            className="input-full"
                            placeholder="Email"
                            autoCorrect="off"
                            autoCapitalize="off"
                            autofocus=""
                          />
                          <input
                            type="password"
                            defaultValue=""
                            name="customer[password]"
                            id="CustomerPassword"
                            className="input-full"
                            placeholder="Password"
                          />
                          <div className="login-toggle-btn">
                            <div className="form-action-button">
                              <button
                                type="submit"
                                className="theme-default-button"
                              >
                                Sign Up
                              </button>
                              <a href="/login" id="customer_register_link">
                                If You Already Have an Account Login Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div id="RecoverPasswordForm" style={{ display: "none" }}>
                    <form
                      method="post"
                      action="https://dunki-demo.myshopify.com/account/recover"
                      acceptCharset="UTF-8"
                    >
                      <input
                        type="hidden"
                        name="form_type"
                        defaultValue="recover_customer_password"
                      />
                      <input type="hidden" name="utf8" defaultValue="✓" />
                      <div className="login-form-container">
                        <div className="login-text">
                          <h2>Reset your password</h2>
                          <p>
                            We will send you an email to reset your password.
                          </p>
                        </div>
                        <div className="login-form">
                          <input
                            type="email"
                            defaultValue=""
                            name="email"
                            id="RecoverEmail"
                            className="input-full"
                            placeholder="Email"
                            autoCorrect="off"
                            autoCapitalize="off"
                          />
                          <div className="login-toggle-btn">
                            <div className="form-action-button">
                              <button
                                type="submit"
                                className="theme-default-button"
                              >
                                Submit
                              </button>
                              <a href="#" id="HideRecoverPasswordLink">
                                Cancel
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Register;
