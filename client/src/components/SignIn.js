import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import * as firebase from 'firebase';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			token: '',
			secret: '',
			user: '',
			error: {
				code: '',
				message: '',
			}
		}
	}

	signIn() {
		console.log('this.state', this.state)
		const { email , password } = this.state;
		firebaseApp.auth().signInWithEmailAndPassword(email, password)
			.catch(error => {
				console.log('error', error);
				this.setState({error});
			})
	}

	signInWithTwitter() {
		const provider = new firebase.auth.TwitterAuthProvider();
		firebaseApp.auth().signInWithPopup(provider).then(result => {

		  const token = result.credential.accessToken;
		  const secret = result.credential.secret;
		  const user = result.user;
		  this.setState({token, secret, user});
		  console.log('STATE', this.state);
	  
		}).catch(error => {

		  const errorCode = error.code;
		  const errorMessage = error.message;
		  // const email = error.email;
		  // const credential = error.credential;
		  this.setState({errorCode, errorMessage});

		});
	}

	render() {
		return (
			<div className="form-inline" style={{margin: '5%'}}>
				<h2>Sign In</h2>
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						style={{marginRight: '5px'}}
						placeholder="email"
						onChange={event => this.setState({email: event.target.value})}
					/>
					<input
						className="form-control"
						type="password"
						style={{marginRight: '5px'}}
						placeholder="password"
						onChange={event => this.setState({password: event.target.value})}
					/>
					<button
						className="btn btn-primary"
						type="button"
						onClick={() => this.signIn()}
					>
					Sign In
					</button>
				</div>
					<div>{this.state.error.message}</div>
					<div><Link to={'/signup'}>Sign Up instead</Link></div>
					<button
						className="btn btn-info"
						type="button"
						onClick={() => this.signInWithTwitter()}
					>
					Sign In with Twitter
					</button>
			</div>	
		)
	}
}

export default SignIn;
