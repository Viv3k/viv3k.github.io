/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import NotFoundPage from 'containers/NotFoundPage/Loadable';


import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import myImage from './images/me.jpg'
import './styles/styles.css'
import Img from '../../components/Img';
import { text } from 'body-parser';
const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  const mini = 0;
  const maxi = 7;
  const rando= parseInt(mini + Math.random() * (maxi - mini));
  const [Text, setText] = useState(messages.aboutPage.quote1.defaultMessage[rando]);

  return (
    <article>
      <Helmet>
        <title>Vivek Darsanapu</title>
        <meta
          name="Vivek Darsanapu"
          content="Personal website for Vivek Darsanapu"
        />
      </Helmet>
      <div>
        <Jumbotron className='mb-n1'>
          <div className='row justify-content-between align-text-bottom'>
            <h1 className='col align-self-end'>
              <FormattedMessage {...messages.aboutPage} />
            </h1>
            <Img 
             src={myImage} className="mx-5 rounded-circle" alt="Vivek Darsanapu" style={{width:100, height:100}}/>
          </div>
          <p className='mt-4 desc'>
            <FormattedMessage {...messages.aboutPage.desc} />
          </p>
          <p className='desc'>
            <FormattedMessage {...messages.aboutPage.goodbye} />
          </p>
          <p>
            <Button variant="primary" 
                onClick={(e) => 
                  {
                    const min = 0;
                    const max = 7;
                    const rand = parseInt(min + Math.random() * (max - min));
                    e.preventDefault();setText(messages.aboutPage.quote1.defaultMessage[rand])
                  }
                }>
              <FormattedMessage {...messages.aboutPage.justBye} />
            </Button>
          </p>
          <blockquote className="blockquote text-center">
            <text className="small desc text-center">{Text}</text>
            <footer className="blockquote-footer small mt-2" style={{fontSize:10}}><FormattedMessage {...messages.aboutPage.note}/></footer>
          </blockquote>
      </Jumbotron>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
