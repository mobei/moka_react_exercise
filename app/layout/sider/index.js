import React, { Component } from 'react';
import MultiSelect from '../../components/multi-select';
import './index.scss';

//测试数据
import data from '../../../config/data-source';

export default class Sider extends Component {
	render() {
		return (
			<div className="mk-sider">
				<MultiSelect data={data} />
			</div>
		)
	}
}

Sider.propTypes = {};