import { configureStore } from '@reduxjs/toolkit';

import HomeReducer,{ HomeState } from './home/reducer';

const store = configureStore({
    reducer: {
        home: HomeReducer
    }
})

export interface RootState {
    home: HomeState
}

export default store;