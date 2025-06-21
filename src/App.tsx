import React from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import store from './store';

import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';
import HomeBanner from './views/HomeBanner/HomeBanner';
import CustomersListView from './views/CustomersListView/CustomersListView';
import PopularStylesView from './views/PopularStylesView/PopularStylesView';
import NewsLetterView from './views/NewsLetterView/NewsLetterView';
import TopCollectionView from './views/TopCollectionView/TopCollectionView';
import BestSellersView from './views/BestSellersView/BestSellersView';
import DiscountProductsView from './views/DiscountProductsView/DiscountProductsView';

function App() {
  return (<Provider store={store}>
    <div className="App">
      <Header />
      <HomeBanner />
      <CustomersListView />
      <PopularStylesView />
      <NewsLetterView />
      <TopCollectionView />
      <BestSellersView />
      <DiscountProductsView />
      <Footer />
    </div>
  </Provider>);
}

export default App;
