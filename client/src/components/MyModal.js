import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Share } from 'react-twitter-widgets';
import './App.css';

class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const options = { 
      hashtag: "CodingNews",
      text: "Found this article on Coding News: ",
      size: "large",
    }

    return (
      <div>
        <Button color="secondary" onClick={this.toggle}>Open Article</Button>
        <Modal style={{ backgroundColor: '#333' }} id="myModal" isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            <iframe width="100%" height="100%" frameBorder="0" scrolling="yes" src={this.props.url}></iframe>
          </ModalBody>
          <ModalFooter>
           
            <Share url={this.props.url} options={options} />
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

// <a href="https://twitter.com/share" class="twitter-share-button" data-size="large" data-text="Found an interesting article: " data-via="mbcoder" data-hashtags="codernews" data-related="mbcoder" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

export default MyModal;