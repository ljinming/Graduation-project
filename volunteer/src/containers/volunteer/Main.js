import React from 'react';
import { connect } from 'react-redux';
import Table from 'fast-table';
import { MainColumns } from './Columns';
import { Radio, Input ,LocaleProvider, Pagination} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import Action from '@actions';
import {all} from './variable';
import VoluntaryReport from './VoluntaryReport';
import Segment from  './Segment';


class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: '',
      score:[],
      Jurisdiction: false,
      current:0,
      year:'2018',
      provinceCode:'1009',
      total:0,
    };
    this.curPage = 1
  }

  componentDidMount () {
    this.load()
  };

  load = () =>{
    const {current ,provinceCode,year}=this.state;
    const payload={
      current: current,
      pageSize: 50,
      provinceCode: provinceCode+year,
    };
    Action.emit('volunteer.history',payload)
  };

  componentWillReceiveProps (nextProps) {
    const {score ,current}=this.state;
   if(this.score !== nextProps.score ){
    if(nextProps.score.result && current !==0 ){
      this.setState({score:score.concat(nextProps.score.result.content) , total:nextProps.score.result.total})
    }else if(nextProps.score.result && current ===0){
      this.setState({score:nextProps.score.result.content,total:nextProps.score.result.total})
    }
   }

  };

  onScrollEnd = () =>{
    const {current,total,score}=this.state;
    this.setState({current: current + 1}, () => {
      this.load()
    })
  };
  onChange = (e) =>{
    this.setState({
      year: e.target.value,
    },()=>{
      this.load()
      }
    );
  };
  handlePageChange = (pageNum) => {
    // 改变页码，不改变bondkey
    this.curPage = pageNum;
  };
  renderCollege = (num)=>{
    const result=all.slice(num-1,num+20);
    return result.map(k=>{
         return <a key={k.href} className ='volunteer-college' href={k.href}>{k.key}</a>

    })

  };
  render() {
    const {prefixCls} = this.props;
    const chart={
      xData:['2018','2017','2016'],
      sData:{math:[120, 132, 101],arts:[120, 142, 111]},
    };
    const {score ,year} =this.state;
    return (
      <div className={`${prefixCls}-right`}>
        <div className={`${prefixCls}-right-main`}>
          <div
            className={`${prefixCls}-right-main-left`}
            style={{   flexDirection:'column'}}
          >
            <div style={{width:'100%',height:'calc(100% - 36px)'}}>
              {this.renderCollege(this.curPage)}
            </div>
            <div style={{width:'100%',height:36,textAlign:'center'}}>
              <LocaleProvider locale={zh_CN} >
                <Pagination
                  defaultPageSize={10}
                  showTitle={false}
                  showQuickJumper
                  total={500}
                  current={this.curPage}
                  onChange={this.handlePageChange}
                />
              </LocaleProvider>
            </div>

          </div>
            <div className={`${prefixCls}-right-main-right`}>
             <Segment chart={chart}/>
              <VoluntaryReport />
            </div>
        </div>
        <div className={`${prefixCls}-right-table`}>
          <div style={{lineHeight:'30px',marginLeft:30}}>
            <span>选择年份：</span>
            <Radio.Group onChange={this.onChange} value={this.state.year}>
              <Radio value={'2018'}>2018</Radio>
              <Radio value={'2017'}>2017</Radio>
              <Radio value={'2016'}>2016</Radio>
            </Radio.Group>
            <Input.Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
            <span style={{color:'gray',float:'right'}}>考生总人数：75289654</span>
          </div>
          <Table
            columns={MainColumns}
            dataSource={score}
            rowClassName={(r, i) => `table-row-${i % 2}`}
            onScrollEnd={this.onScrollEnd}
            bordered
          />
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    score:state.volunteer.history,
  };
}
export default connect(mapStateToProps)(Main);
