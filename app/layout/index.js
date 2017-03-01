import React, { Component } from 'react';
import Header from './header';
import Sider from './sider';
import Container from './container';
import './index.scss';

export default class Layout extends Component {
	render() {
		return (
			<div className="mk-application">
				<Header />
				<Sider />
				<Container />
			</div>
		)
	}
}

Layout.propTypes = {};