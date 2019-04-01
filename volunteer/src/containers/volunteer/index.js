import React from 'react';
import { connect } from 'react-redux';
import {} from './Columns';
import './style/style.less';
import Main from './Main';
import Search from './Search'

class Volunteer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      show:false,
      value:'',
      Jurisdiction:false,
    }
  }
  render() {
    const {prefixCls} = this.props;
    return (
      <div className={prefixCls}>
          <div className={`${prefixCls}-left`}>
          <Search />
          </div>
          <Main prefixCls={prefixCls}/>
      </div>
    )
  }
}


export default Volunteer;
