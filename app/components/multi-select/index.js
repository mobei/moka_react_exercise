import React, { Component, PropTypes } from 'react';
import MultiSelectGroup from './multi-select-group';
import './index.scss';

const clearText = '清空';

export default class MultiSelect extends Component {
	constructor(props) {
		super(props);
		this.state = { clearFlag: false };
	}
	clear() {
		this.setState({ clearFlag: !this.state.clearFlag});
	}
	render() {
		const {title, departments} = this.props.data;
		const clearFlag = this.state.clearFlag;

		return (
			<div className="multi-select">
				<div className="multi-select-header">
					<span className="multi-select-title">{title}</span>
					<a className="multi-select-clear" onClick={this.clear.bind(this)}>{clearText}</a>
				</div>
				<div className="multi-select-content">
					{departments.map(group => <MultiSelectGroup key={group.id} group={group} clearFlag={clearFlag} />)}
				</div>
			</div>
		)
	}
}

MultiSelect.propTypes = {
	data: PropTypes.object.isRequired
};