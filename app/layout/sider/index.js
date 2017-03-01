import React, { Component } from 'react';
import MultiSelect from '../../components/multi-select';
import './index.scss';

export default class Sider extends Component {
	render() {
		return (
			<div className="mk-sider">
				<MultiSelect />
			</div>
		)
	}
}

Sider.propTypes = {};