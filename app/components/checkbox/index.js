/**
	desc: checkbox
	params: {
		checked: boolean  是否选中  必选
		indeterminate: boolean 是否半选 可选
		onCheckChange: function  事件方法 可选
		label: string 显示文本 可选
		className: string 样式 可选
	}
	author: lianhy
*/

import React, { Component, PropTypes } from 'react';
import './index.scss';

export default class Checkbox extends Component {
	constructor(props) {
		super(props);
		this.state = { checked: props.checked, indeterminate: props.indeterminate };
	}
	componentWillReceiveProps(nextProps) {
		let { checked, indeterminate } = nextProps;
		if(checked) {
			indeterminate = false;
		}

		this.setState({checked, indeterminate});
	}
	componentDidUpdate() {
		this.refs.checkBoxNode.indeterminate = this.state.indeterminate;
	}
	onCheckChange(e) {
		this.setState({ checked: e.target.checked, indeterminate: false });
		if(this.props.onCheckChange) {
			this.props.onCheckChange(e.target.checked);
		}
	}
	render() {
		const clazzs = `mk-checkbox ${this.props.className}`;
		let checkedClass = '';
		let {checked, indeterminate}  = this.state;
		
		if(checked) {
			checkedClass = 'mk-checkbox-checked';
		} else if(indeterminate) {
			checkedClass = 'mk-checkbox-indeterminate';
		}

		return (
			<label className={clazzs}>
				<input ref="checkBoxNode" className="mk-checkbox-input" type="checkbox" checked={checked} onChange={this.onCheckChange.bind(this)}/>
				<span className={`mk-checkbox-label ${checkedClass}`}></span>
				<span className="mk-checkbox-text">{this.props.label}</span>
			</label>
		)
	}
}

Checkbox.propTypes = {
	checked: PropTypes.bool.isRequired,
	indeterminate: PropTypes.bool,
	label: PropTypes.string,
	onCheckChange: PropTypes.func,
	className: PropTypes.string
};