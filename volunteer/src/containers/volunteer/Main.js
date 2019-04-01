import React from 'react';
import { connect } from 'react-redux';
import Table from 'fast-table';
//import echarts from 'echarts';
import { Layout } from 'antd';
import { MainColumns } from './Columns';
import { main } from './data';
import VoluntaryReport from './VoluntaryReport'

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: '',
      Jurisdiction: false,
    }
  }

  componentDidMount() {
    // if (this.chartContainer) {
    //   console.log('============')
    //   console.log(echarts)
    //   let chart = echarts.init(this.chartContainer);
    //    chart.setOption(this.setOpt());
    // }
  }

  setOpt = () => {
    return {
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
  };
  render() {
    const {prefixCls} = this.props;
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
            bordered />
        </div>
      </div>
    )
  }
}
export default Main;
