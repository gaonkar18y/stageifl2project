import { createSlice } from '@reduxjs/toolkit';
import { HomeBrandItem, HomeMenuItem } from '../../models/home';

export interface HomeState {
    menuList: HomeMenuItem[];
    brandsList: HomeBrandItem[];
}

const initialState: HomeState = {
    menuList: [
        {
            label: 'Jewelry & Accessories'
        },
        {
            label: 'Clothing & Shoes'
        },
        {
            label: 'Home & Living'
        },
        {
            label: 'Wedding & Party'
        },
        {
            label: 'Toys & Entertainment'
        },
        {
            label: 'Art & Collectibles'
        },
        {
            label: 'Craft Supplies & Tools'
        }
    ],
    brandsList: [
        {
            image: 'brand-1.png'
        }, 
        {
            image: 'brand-2.png'
        },
        {
            image: 'brand-3.png'
        },
        {
            image: 'brand-4.png'
        },
        {
            image: 'brand-5.png'
        }

    ]
}

const HomeStateSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {

    }
});

export default HomeStateSlice.reducer;

