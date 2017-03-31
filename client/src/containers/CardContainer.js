import React, { Component } from 'react';
// import fetch from 'better-fetch';
import { connect } from 'react-redux';
// import { scrapedDataFetchData } from './actions/scrapedData';
// import { Button, ButtonGroup, Card, CardImg, CardTitle, CardText, CardColumns, CardBlock } from 'reactstrap';
import { CardColumns } from 'reactstrap';
import '../components/App.css';

import MakeCard from '../components/MakeCard';

// Container component
class CardContainer extends Component {

  layoutCards () {
  	const data = this.props.scrapedData[this.props.selectedTopic];
  	if (data) {
  	  return data.map(function (article) {
  	    return (
  	    	<MakeCard key={article.story_id} {...article} />
  	   	);
  	  });
  	} else {
  		return (
  			// <Alert color="info"><strong>Hold tight...</strong>the data is incoming.</Alert> 
  			
  			<p>Hold tight...the data is incoming</p>
  		)
  	}

  }
    
  render() {
  	
  	if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
        return <p>Loading…</p>;
    }

	return (
		<div className='CardContainer'>
				<CardColumns>
					{this.layoutCards()}
				</CardColumns>
		</div>	
	)
  }
}


const mapStateToProps = (state) => {

	return {
		selectedTopic: state.topic.selectedTopic ? state.topic.selectedTopic : 'javascript',
		scrapedData: state.scrapedData,
		hasErrored: state.scrapedDataHasErrored,
		isLoading: state.scrapedDataIsLoading
	};

};

export default connect(mapStateToProps)(CardContainer);


