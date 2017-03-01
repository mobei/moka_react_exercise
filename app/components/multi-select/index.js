import React, { Component, PropTypes } from 'react';
import MultiSelectGroup from './multi-select-group';
import './index.scss';

const clearText = '清空';

export default class MultiSelect extends Component {
	clear() {

	}
	render() {
		const {title, departments} = this.props.data;

		return (
			<div className="multi-select">
				<div className="multi-select-header">
					<span className="multi-select-title">{title}</span>
					<a className="multi-select-clear" onClick={this.clear.bind(this)}>{clearText}</a>
				</div>
				<div className="multi-select-content">
					{departments.map(group => <MultiSelectGroup key={group.id} group={group} />)}
				</div>
			</div>
		)
	}
}

MultiSelect.propTypes = {
	data: PropTypes.object.isRequired
};