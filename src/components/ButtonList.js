import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { selectTopic } from '../actions/selectTopic';

import "./App.css";

class ButtonList extends Component {

	constructor(props) {

		super(props);
		this.handleClick = this.handleClick.bind(this);
		
	}

	handleClick(e){
		
		this.props.dispatch(selectTopic(e.target.value))
		
	}
    
	render() {

		return(
			<div id="nav" className="button-list content-container" data-spy="affix" data-offset-top="60" data-offset-bottom="200">
		       <Button color={this.props.selectedTopic === "javascript" ? "primary" : "info"} value="javascript" onClick={this.handleClick}>Javascript</Button>{' '}
		       <Button color={this.props.selectedTopic === "redux+react" ? "primary" : "info"} value="redux+react" onClick={this.handleClick}>React/Redux</Button>{' '}
		       <Button color={this.props.selectedTopic === "perl" ? "primary" : "info"} value="perl" onClick={this.handleClick}>Perl</Button>{' '}
		       <Button color={this.props.selectedTopic === "python" ? "primary" : "info"} value="python" onClick={this.handleClick}>Python</Button>{' '}
		       <Button color={this.props.selectedTopic === "ruby" ? "primary" : "info"} value="ruby" onClick={this.handleClick}>Ruby</Button>{' '}
		       <Button color={this.props.selectedTopic === "angular" ? "primary" : "info"} value="angular" onClick={this.handleClick}>Angular</Button>
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

export default connect(mapStateToProps)(ButtonList);


