/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Comics from 'containers/Comics/Loadable';
import About from 'containers/About/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;


const AppWrapper2 = styled.div`
  max-width: calc(1024px + 128px * 2);
  width: 90%;
  margin: 0 auto;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;


export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s"
        defaultTitle="Vivek Darsanapu"
      >
        <meta name="description" content="Personal website of Vivek Darsanapu" />
      </Helmet>
      <Header />
      <AppWrapper2>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" component={FeaturePage} />
          <Route path="/comics" component={Comics} />
          <Route path="/about" component={About} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        </AppWrapper2>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}

