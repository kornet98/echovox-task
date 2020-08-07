import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import axios from 'axios';

import './App.css';

import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

import AllNewsPage from './components/AllNewsPage/AllNewsPage.js';
import MainPage from './components/MainPage/MainPage.js';
import ContactsPage from './components/ContactsPage/ContactsPage.js';
import SearchForm from './components/SearchForm/SearchForm.js'




const useFetch = () => {
  const [data, updateData] = useState(null);
  const requestUrl = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=d4d4b1ebd46c426891f2999ce75c33fc';

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requestUrl);
      updateData(response.data.articles);
    }
    fetchData();
  }, [requestUrl])
  return data;
}


function App() {

  const newsItems = useFetch();

  return (
    <div className="App">
      <Header />
      <Route
        path='/'
        exact
        render={() => <MainPage newsItems={newsItems} />}
      />

      <Route
        path='/news'
        exact
        render={() => <AllNewsPage newsItems={newsItems} />}
      />

      <Route
        path='/contacts'
        exact
        component={ContactsPage}
      />

      <Route
        path='/page/:id'
        exact
        render={() => <SearchForm
          data={newsItems} />}
      />
      <Footer />
    </div>
  );
}

export default App;
