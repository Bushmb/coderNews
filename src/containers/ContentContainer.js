import React, { Component } from 'react';

import ButtonList from '../components/ButtonList';
import CardContainer from './CardContainer';

import { connect } from 'react-redux';
import { scrapedDataFetchData } from '../actions/scrapedData';

// function to pass to buttons which was clicked
// pass down our stories to the card container

class ContentContainer extends Component {
  componentDidMount () {

    this.props.fetchData('/hacker');

  }
  render() {
    return (
      <div className="content-container">
        <ButtonList />
        <CardContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scrapedData: state.scrapedData,
    hasErrored: state.scrapedDataHasErrored,
    isLoading: state.scrapedDataIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(scrapedDataFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);

