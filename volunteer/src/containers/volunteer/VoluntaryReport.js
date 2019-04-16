import React from 'react';
import { Select ,Radio,Input,Button } from 'antd';
import {city} from './variable'
import './style/style.less';
const { Option } = Select;

class VoluntaryReport extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      value:'science',
      score:''
    }
  }

  renderOption = () =>{
    return city.map(t=>{
      return  <Option key={t.key}>{t.value}</Option>
    })
  };
  handleChange = (e) =>{
    this.setState({value:e.target.value})
  };
  handleInputChange = (e) =>{
    this.setState({score:e.target.value})
  };
  handleSubmit = () =>{
    console.log('===============')
    console.log(this.state)
  };
  render() {
    return (
      <div style={{textAlign:'center',  width: '50%',paddingTop: 50,
        height: '100%', border: '1px solid #193d37'}}>
        <div style={{width:'100%',height:30,textAlign:'center',marginTop:10}}>
          <span style={{fontSize:'16px'}}>志愿模拟填报</span>
          <Select
            defaultValue='1009'
            style={{width:80,marginLeft:10}}>
            {this.renderOption()}
          </Select>
        </div>
        <div style={{width:'100%',height:30,textAlign:'center',marginTop:10}}>
          <span>选择科目</span>
          <Radio.Group
            onChange={this.handleChange}
            value={this.state.value}
            style={{marginLeft:10}}
          >
            <Radio value='science'>理科</Radio>
            <Radio value='arts'>文科</Radio>
          </Radio.Group>
        </div>
        <div style={{width:'100%',height:30,textAlign:'center',marginTop:10}}>
          <span>分数</span>
          <Input
            onChange={this.handleInputChange}
            style={{width:260,marginLeft:10}}/>
        </div>
        <Button
          onClick={this.handleSubmit}
          style={{width:'120px',height:30,marginTop:10}}
        >提交</Button>
      </div>
    )
  }
}


export default VoluntaryReport;
