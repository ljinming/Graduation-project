import React from 'react';
import { connect } from 'react-redux';
import {Button} from 'antd';

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
    return (
      <div style={{width:'100%'}}>
        <Button style={{marginLeft:30}}>kk</Button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    //cacl: state.credbBondCacl.data.result
  }
}

export default connect(mapStateToProps)(Volunteer);
