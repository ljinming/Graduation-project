import React from 'react';
import { connect } from 'react-redux';
import Table from 'fast-table';
import { MainColumns } from './Columns';
import { main } from './data';
import VoluntaryReport from './VoluntaryReport';
import Segment from  './Segment'

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: '',
      Jurisdiction: false,
    }
  }



  render() {
    const {prefixCls} = this.props;
    const chart={
      xData:['2018','2017','2016'],
      sData:{math:[120, 132, 101],arts:[120, 142, 111]},
    };
    return (
      <div className={`${prefixCls}-right`}>
        <div className={`${prefixCls}-right-main`}>
          <div
            className={`${prefixCls}-right-main-left`}
            ref={(ref) => (this.chartContainer = ref)}
          >
            <p>暂无数据</p>
          </div>
            <div className={`${prefixCls}-right-main-right`}>
             <Segment chart={chart}/>
              <VoluntaryReport />
            </div>
        </div>
        <div className={`${prefixCls}-right-table`}>
          <Table
            columns={MainColumns}
            dataSource={main}
            rowClassName={(r, i) => `table-row-${i % 2}`}
            useScrollY={false}
            showHeader={true}
            scroll={{y: 280}}
            bordered />
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
          // console.log('================================');
          // console.log(state.volunteer.history)
  return {
    history:state.volunteer.history,
  };
}
export default connect(mapStateToProps)(Main);
