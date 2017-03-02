import React, { Component, PropTypes } from 'react';
import Checkbox from '../checkbox';
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
	onCheckChange(checked) {
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
				<Checkbox
					className="multi-select-checkbox"
					checked={checked}
					onCheckChange={this.onCheckChange.bind(this)}
					label={item.name}
				/>
				<span className="badge">{item.value}</span>
			</div>
		)
	}
}

MultiSelectItem.propTypes = {
	itemData: PropTypes.object.isRequired,
	onCheckChange: PropTypes.func.isRequired
};