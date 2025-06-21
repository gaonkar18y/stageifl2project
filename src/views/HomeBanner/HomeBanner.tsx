import React from "react";

import BannerImage from '../../assets/images/homeBanner.png';

import './HomeBanner.css';

const HomeBanner = ()=> {

    return <div id="HomeBannerContainer">
        <div className="HomeBannerSubContainer">
                <h3 id="collectionsTitle">Collections</h3>
                <p id="collectionsSubTitle">you can explore ans shop many differnt collection
                from various barands here.</p>
                <div id="ShopNowButton">Shop Now</div>
        </div>
        <div className="HomeBannerSubContainer">
            <img src={BannerImage} id="bannerImage" />
        </div>
    </div>
}

export default HomeBanner;