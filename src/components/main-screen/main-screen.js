import React from 'react';
import { useSelector } from 'react-redux';
import { getNews } from '../../store/selectors';
import CatalogList from '../catalog-list/catalog-list';

import Header from '../header/header';
import Footer from '../footer/footer';
import LoadingScreen from '../loading-screen/loading-screen';

function MainScreen() {
  const newsList = useSelector(getNews);

  if (newsList.length === 0) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <React.Fragment>
      <Header />

      <main className="page__main main">
        <section className="main__catalog catalog">
          <h2 className="catalog__header">Latest News of Today</h2>

          <CatalogList newsList={newsList} />
        </section>
      </main>

      <Footer />
    </React.Fragment>
  )
}

export default MainScreen;
