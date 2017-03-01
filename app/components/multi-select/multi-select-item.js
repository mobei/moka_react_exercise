import React, { Component, PropTypes } from 'react';
import './index.scss';

export default class MultiSelectItem extends Component {
	constructor(props) {
		super(props);
		this.state = { checked: props.itemData.checked };
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			checked: nextProps.itemData.checked
		});
	}
	onCheckChange(e) {
		let checked = e.target.checked;
		this.setState({ checked });
		
		if(this.props.onCheckChange) {
			this.props.onCheckChange(this.props.itemData.id, checked);
		}
	}
	render() {
		const item = this.props.itemData;
		const checked = this.state.checked || false;
		
		return (
			<div className="multi-select-item">
				<label><input className="multi-select-checkbox" type="checkbox" checked={checked} onChange={this.onCheckChange.bind(this)}/>{item.name}</label>
				<span className="badge">{item.value}</span>
			</div>
		)
	}
}

MultiSelectItem.propTypes = {
	itemData: PropTypes.object.isRequired,
	onCheckChange: PropTypes.func.isRequired
};