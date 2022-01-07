import React from "react";
import "./Style.css";

const Footer = () => {
    return (
        <div class="footer">
            <a href="https://www.facebook.com/supremeofficial" target={"_blank"}>
                <i class="fa fa-facebook-square fa-2x"></i>
            </a>
            <a href="https://twitter.com/" target={"_blank"}>
                <i class="fa fa-twitter-square fa-2x"></i>
            </a>
            <a href="https://id.pinterest.com/" target={"_blank"}>
                <i class="fa fa-pinterest-square fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/" target={"_blank"}>
                <i class="fa fa-linkedin-square fa-2x"></i>
            </a>
            <a href="https://www.youtube.com/" target={"_blank"}>
                <i class="fa fa-youtube-square fa-2x"></i>
            </a>
            <p>Supreme Store by Bima Rakajati &copy; 2021.</p>
        </div>
    );
};

export default Footer;
