import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from "../../store";

import './CustomersListView.css'

const CustomersListView = ()=> {
    const brands = useSelector((state: RootState)=> state.home.brandsList);
    return <div id="CustomersListView">
                {
                    brands.map(brand=> <img src={'brands/'+brand.image} className="homeBrandImage" />)
                }
    </div>
}

export default CustomersListView;