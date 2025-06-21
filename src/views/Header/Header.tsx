import React from "react";

import { useSelector } from 'react-redux';

import searchIcon from '../../assets/icons/search.png';
import AccountIcon from '../../assets/icons/account.png';
import ShopIcon from '../../assets/icons/account.png';
import Group97 from '../../assets/icons/group_97.png';
import Group98 from '../../assets/icons/group_98.png';

import './Header.css'
import { RootState } from "../../store";

const Header = ()=> {
    const menuList = useSelector((state: RootState)=> state.home.menuList);

    return <div id="headerContainer">
        <div id="topHeader">
            <div>
                <img src={searchIcon} className="headerIcon"/>
            </div>
            <div>
                <span><img src={Group98} className="headerIcon" />CORAL<img src={Group97} className="headerIcon" /></span>
            </div>
            <div>
                <div className="headerIconTextContainer"><img src={AccountIcon} className="headerIcon" />Account</div>
                <div className="headerIconTextContainer"><img src={ShopIcon} className="headerIcon" />Shopping</div>
            </div>
        </div> 
        <div id="headerNavMenu">
           {
            menuList.map(item=> <span>{item.label}</span>)
           }
        </div>
    </div>
}

export default Header;