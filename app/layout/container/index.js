import React, { Component } from 'react';
import './index.scss';

export default class Container extends Component {
	render() {
		return (
			<div className="mk-container">
				<div>感谢查看！</div>
				<span>希望有机会参加面试</span>
			</div>
		)
	}
}

Container.propTypes = {};