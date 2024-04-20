import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-area">
      <div id="shopify-section-footer_5" className="shopify-section">
        <div className="theme_footer_top" id="section-footer_5">
          <div className="container default ">
            <div className="footer-top-2 pb-20 footer_style_5">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="footer-widget mb-40">
                    <a href="index.html">
                      <img
                        src="Images/AsianLogo.jpeg"
                        style={{
                          width: "auto",
                          height: "14vh",
                          borderRadius: 15,
                        }}
                        alt=""
                      />
                    </a>
                    <div className="subscribe-style">
                      <p style={{ width: "100%" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        sed do eiusmod tempor inci ut labore et dolore.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="footer-widget mb-40">
                    <div className="footer-title">
                      <h3>Address Information</h3>
                    </div>
                    <div className="footer_about_contact">
                      <p>
                        <i className="sli sli-map" />
                        <span>Address: Muzaffarnagar, Uttar Pradesh</span>
                      </p>
                      <p>
                        <i className="sli sli-envelope" />
                        <span>Email: hello@example.com</span>
                      </p>
                      <p>
                        <i className="sli sli-phone" />
                        <span>Phone: (012) 345 6789</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6">
                  <div className="footer-widget mb-40">
                    <div className="footer-title">
                      <h3>Location</h3>
                    </div>
                    <div className="footer-list">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55574.58198434516!2d77.66765778469876!3d29.475194078566478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1ba00983523d%3A0xc6a75ba008574871!2sMuzaffarnagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1712662812454!5m2!1sen!2sin"
                        width="100%"
                        height={150}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n                .footer-widget .footer-title h3 {\n                color: #ffffff;\n                }\n                .subscribe-style p, .footer-widget .footer-list ul li a, \n                .footer-top ul li a,\n                .theme_footer_top .social_widget a,\n                .footer-widget .footer-list ul li {\n                color: #ffffff;\n                }\n                .theme_footer_top .footer-widget .subscribe-style p {\n                color: #ffffff;\n                }\n                .subscribe-style .subscribe-form .mc-form .clear:hover {\n                background-color: #dd321e;\n                }  \n                .footer-top ul li a:hover {\n                color: #dd321e;\n                }\n                .subscribe-style .subscribe-form .mc-form input::-moz-placeholder {\n                color: #ffffff !important;\n                }\n                .subscribe-style .subscribe-form .mc-form input::-webkit-input-placeholder {\n                color: #ffffff !important;\n                }\n                .subscribe-style .subscribe-form .mc-form input {\n                border-color: #ffffff\n                }\n                .footer-widget .footer_about_contact p {\n                color: #ffffff;\n                }\n                .theme_footer_top .top_bar_social a {\n                color: #ffffff;\n                }\n                .theme_footer_top .top_bar_social a:hover {\n                color: #dd321e;\n                }@font-face {\n                font-family: Futura;\n                font-weight: 400;\n                font-style: normal;\n                src: url("Assets/fonts/futura/futura_n4.df36ce3d9db534a4d7947f4aa825495ed740e4107941.woff2?h1=YXNzeXJpYW4tMy5hY2NvdW50Lm15c2hvcGlmeS5jb20&amp;h2=ZHVua2ktZGVtby5teXNob3BpZnkuY29t&amp;hmac=4685eb3a7180e62ddf191370d23164d60304af1a30c582deb0889ba465b1b403") format("woff2"),\n                url("Assets/fonts/futura/futura_n4.6bce24beb4ba1ff4ddeb20f7cd6e2fa513a3d6ec2d45.woff?h1=YXNzeXJpYW4tMy5hY2NvdW50Lm15c2hvcGlmeS5jb20&amp;h2=ZHVua2ktZGVtby5teXNob3BpZnkuY29t&amp;hmac=e4130ced5fd30018d43e34eaa324b8777e07b07982b23cb6f1a3039115366e9a") format("woff");\n                }\n                @font-face {\n                font-family: Futura;\n                font-weight: 400;\n                font-style: normal;\n                src: url("Assets/fonts/futura/futura_n4.df36ce3d9db534a4d7947f4aa825495ed740e4107941.woff2?h1=YXNzeXJpYW4tMy5hY2NvdW50Lm15c2hvcGlmeS5jb20&amp;h2=ZHVua2ktZGVtby5teXNob3BpZnkuY29t&amp;hmac=4685eb3a7180e62ddf191370d23164d60304af1a30c582deb0889ba465b1b403") format("woff2"),\n                url("Assets/fonts/futura/futura_n4.6bce24beb4ba1ff4ddeb20f7cd6e2fa513a3d6ec2d45.woff?h1=YXNzeXJpYW4tMy5hY2NvdW50Lm15c2hvcGlmeS5jb20&amp;h2=ZHVua2ktZGVtby5teXNob3BpZnkuY29t&amp;hmac=e4130ced5fd30018d43e34eaa324b8777e07b07982b23cb6f1a3039115366e9a") format("woff");\n                }\n                .theme_footer_top .footer-widget .footer-title h3 {\n                font-family: Futura, sans-serif;\n                font-style: normal;\n                font-weight: 400;\n                font-size:22px;\n                }\n                .theme_footer_top .subscribe-style p,\n                .theme_footer_top .footer-widget .footer-list ul li a,\n                .theme_footer_top .footer-top ul li a,\n                .theme_footer_top .footer-widget .footer_about_contact p,\n                .theme_footer_top .social_widget a{\n                font-family: Futura, sans-serif;\n                font-style: normal;\n                font-weight: 400;\n                font-size:16px;\n                }\n             ',
          }}
        />
        <style
          data-shopify=""
          dangerouslySetInnerHTML={{
            __html:
              "#section-footer_5{background: #282828 no-repeat scroll center center / cover;padding-top: 80px;\n                padding-bottom: 0px;margin-top: 0px;\n                margin-bottom: 0px;}\n                @media (min-width: 768px) and (max-width: 991px) {\n                #section-footer_5{padding-top: 80px;\n                padding-bottom: 0px;margin-top: 0px;\n                margin-bottom: 0px;}\n                }\n                @media (max-width: 767px) {\n                #section-footer_5{padding-top: 60px;\n                padding-bottom: 0px;margin-top: 0px;\n                margin-bottom: 0px;}\n                }\n             ",
          }}
        />
      </div>
      <div id="shopify-section-footer-bottom" className="shopify-section">
        <div
          className="footer-bottom "
          id="section-footer-bottom"
          style={{ borderTop: "1px solid #313030" }}
        >
          <div className="container default ">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-6 col-12">
                <div className="copyright text-center pb-20">
                  <p></p>
                  <p>Designed &amp; Developed By Innovate X</p>
                  <p />
                </div>
              </div>
              {/* <div class="col-lg-6 col-md-6 col-12">
                   <div class="payment-mathod pb-20 text-right"><a href="index.html">
                      <img src="Assets/shop/files/paymet_largefcce.png?v=1698813667" alt="">
                      </a>
                   </div>
                </div> */}
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n                .footer-bottom .footer-social a, \n                .footer-bottom .copyright p,\n                .footer-bottom .copyright a  {\n                color: #ffffff;\n                }  \n                .footer-bottom .footer-social a:hover,\n                .footer-bottom .copyright a:hover{\n                color: #dd321e;\n                }@font-face {\n                font-family: Futura;\n                font-weight: 400;\n                font-style: normal;\n                src: url("Assets/fonts/futura/futura_n4.df36ce3d9db534a4d7947f4aa825495ed740e4107941.woff2?h1=YXNzeXJpYW4tMy5hY2NvdW50Lm15c2hvcGlmeS5jb20&amp;h2=ZHVua2ktZGVtby5teXNob3BpZnkuY29t&amp;hmac=4685eb3a7180e62ddf191370d23164d60304af1a30c582deb0889ba465b1b403") format("woff2"),\n                url("Assets/fonts/futura/futura_n4.6bce24beb4ba1ff4ddeb20f7cd6e2fa513a3d6ec2d45.woff?h1=YXNzeXJpYW4tMy5hY2NvdW50Lm15c2hvcGlmeS5jb20&amp;h2=ZHVua2ktZGVtby5teXNob3BpZnkuY29t&amp;hmac=e4130ced5fd30018d43e34eaa324b8777e07b07982b23cb6f1a3039115366e9a") format("woff");\n                }\n                .footer-bottom .footer-social a, \n                .footer-bottom .copyright p{\n                font-family: Futura, sans-serif;\n                font-style: normal;\n                font-weight: 400;\n                font-size:16px;\n                }\n                .footer-bottom.position_fb {\n                position: absolute;\n                left: 0;\n                bottom: 0;\n                right: 0;\n                }\n             ',
          }}
        />
        <style
          data-shopify=""
          dangerouslySetInnerHTML={{
            __html:
              "#section-footer-bottom{padding-top: 20px;\n                padding-bottom: 0px;background: #242424 no-repeat scroll center center / cover;}\n                @media (min-width: 768px) and (max-width: 991px) {\n                #section-footer-bottom{padding-top: 20px;\n                padding-bottom: 0px;}\n                }\n                @media (max-width: 767px) {\n                #section-footer-bottom{padding-top: 20px;\n                padding-bottom: 0px;}\n                }\n             ",
          }}
        />
      </div>
    </div>
  );
}

export default Footer;
