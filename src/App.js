import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TopHeader from './components/top-header/top-header.component';
import Navbar from './components/navbar/navbar.component';
import React, { useEffect } from 'react';
import { fetchCollectionsStart } from './redux/collection/collection.actions';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import CollectionPage from './pages/collection/collection.component';
import Cart from './pages/cart/cart.component';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import PrivacyPage from './pages/privacy/privacy.component';
import TermsAndConditionsPage from './pages/terms-and-conditions/terms-and-conditions.component';
import Footer from './components/footer/footer.component';
import AboutPage from './pages/about/about.component';
import HowToOrderPage from './pages/how-to-order/how-to-order.component';
import ReturnAndExchangePage from './pages/return-and-exchange/return-and-exchange.component';
import FaqPage from './pages/faq/faq.component';

const App = ({ fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className='App'>
      <TopHeader />
      <Navbar />
      <Route exact path='/' component={Homepage} />
      <Route exact path='/pk' component={Homepage} />
      <Route exact path='/pk/collections' component={Homepage} />
      <Route
        path='/pk/collections/:collectionPage'
        component={CollectionPage}
      />
      <Route path='/cart' component={Cart} />
      <Route exact path='/privacy' component={PrivacyPage} />
      <Route exact path='/terms' component={TermsAndConditionsPage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/how-to-order' component={HowToOrderPage} />
      <Route
        exact
        path='/return-and-exchange'
        component={ReturnAndExchangePage}
      />
      <Route exact path='/faq' component={FaqPage} />
      <Footer />
      <NotificationContainer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(App);
