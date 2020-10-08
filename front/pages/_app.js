import React from 'react'
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prop-types';
import withReduxSaga from "next-redux-saga";
import wrapper from '../store/configureStore';

const NodeBird = ({ Component }) => {
    return (
      <>
        <Head>
            <title>NodeBird</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.6.6/antd.min.css"/>
        </Head>
        <AppLayout>
            <Component/>
        </AppLayout>
      </>
    );
  };

NodeBird.propTypes = {
    Component: PropTypes.elementType,
    store: PropTypes.object,
};

export default wrapper.withRedux(withReduxSaga(NodeBird));
