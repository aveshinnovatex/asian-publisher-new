import React from "react";

function Login() {
  return (
    <>
      <meta httpEquiv="content-type" content="text/html;charset=utf-8" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="theme-color" content="#dd321e" />
      <title>Login - Asian Publishers</title>
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
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  #background-video {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    min-width: 100%;\n    min-height: 100%;\n    width: auto;\n    height: auto;\n    z-index: -1;\n}\n\n",
        }}
      />
      <video autoPlay="" muted="" loop="" id="background-video">
        <source src="Images/HomeVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <main>
        <div className="customer-page theme-default-margin">
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
                          <h3 style={{ fontWeight: 600 }}>LOGIN</h3>
                          <p>Please Login using Account Detail Below</p>
                        </div>
                        <div className="login-form">
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
                                Sign In
                              </button>
                              <a href="/register" id="customer_register_link">
                                If You Don't Have an Account Sign Up Now
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

export default Login;
