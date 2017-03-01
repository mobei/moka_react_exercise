import React, { Component, PropTypes } from 'react';
import MultiSelectItem from './multi-select-item';
import './index.scss';

export default class MultiSelectGroup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkAll: false,
			positions: props.group.positions,
			indeterminate: false,
			showPositions: true
		};
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.clearFlag !== this.props.clearFlag) {
			this.checkAll(false, false);
		}
	}
	onCheckAllChange(e) {
		this.checkAll(e.target.checked, false);
	}
	onToggle() {
		this.setState({
			showPositions: !this.state.showPositions
		});
	}
	onItemCheckChange(id, checked) {
		let positions = this.state.positions || [];
		let checkedList = [];
		let checkAll, indeterminate;

		let oldCheckedList = positions.filter(item => !!item.checked) || [];
		positions.forEach(position => {
			if(id === position.id) {
				position.checked = checked;
			}

			if(position.checked) {
				checkedList.push(position);
			}
		});

		let oldLength = oldCheckedList.length,
			checkedLength = checkedList.length,
			allLength = positions.length;

		//优化
		if(oldLength > 0 && oldLength < allLength && checkedLength < allLength && checkedLength > 0) {
			return;
		}

		checkAll = checkedList.length === positions.length; //全选中
		indeterminate = (checkedList.length && checkedList.length < positions.length); //部分选中

		this.checkAll(checkAll, indeterminate, positions);
	}
	checkAll(checkAll, indeterminate, positions) {
		positions = positions || this.state.positions || [];

		if(checkAll) {
			positions = positions.map(item => {
				item.checked = true;
				return item;
			});
		} else if(!indeterminate) {
			positions = positions.map(item => {
				item.checked = false;
				return item;
			});
		}

		this.refs.groupNode.indeterminate = indeterminate;
		this.setState({checkAll, indeterminate, positions});
	}
	render() {
		const group = this.props.group;
		const { positions, checkAll, showPositions } = this.state;
		const contentClazz = showPositions ? 'show' : 'hide';
		const dropDownClazz = showPositions ? 'drop-down' : 'drop-up';

		return (
			<div className="multi-select-group">
				<div className="multi-select-group-header">
					<input className="multi-select-checkbox" ref="groupNode" type="checkbox" checked={checkAll} onChange={this.onCheckAllChange.bind(this)}/>
					<label onClick={this.onToggle.bind(this)}>
						{group.name} <span className={`drop-btn ${dropDownClazz}`}></span>
					</label>
					<span className="badge">{group.value}</span>
				</div>
				<div className={`multi-select-group-content ${contentClazz}`}>
					{positions.map(position => {
						return <MultiSelectItem key={position.id} itemData={position} onCheckChange={this.onItemCheckChange.bind(this)} />
					})}
				</div>
			</div>
		);
	}
}

MultiSelectGroup.propTypes = {
	group: PropTypes.object.isRequired,
	clearFlag: PropTypes.bool.isRequired,
};