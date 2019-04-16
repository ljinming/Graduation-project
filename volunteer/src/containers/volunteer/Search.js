import React from 'react';
import { Input, Radio } from 'antd';
import Action from '@actions';
import { city } from './variable'
import './style/style.less';

class Search extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      code: '1009',
      year:'2018',
    }
  }

  handleSearch = (value) => {
    this.setState({search: value})
  };

  componentDidMount() {
    const {code,year} =this.state;
    const payload={
    provinceCode:code+year,
    };
    Action.emit('volunteer.history',payload)
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  };

  render() {
    const {search, value} = this.state;
    return (
      <div style={{display: 'flex', width: '100%', height: '100%', padding: 10, flexDirection: 'column'}}>
        <Input.Search
          placeholder='input search'
          value={search}
          onSearch={value => this.handleSearch(value)}
          style={{width: '100%'}}
        />
        <div className='volunteer-search'>
          <span className='search-span'> 地区：</span>
          <Radio.Group
            buttonStyle='solid'
            value={this.state.value}
            onChange={this.handleChange}
          >
            {city.map((p) => {
              return <Radio.Button
                value={p.key}
                style={{margin: 5}}
                key={p.key}>{p.value}</Radio.Button>;
            })}
          </Radio.Group>
        </div>
      </div>
    )
  }
}

export default Search;
