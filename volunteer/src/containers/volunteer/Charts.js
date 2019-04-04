import React, { PureComponent } from 'react';
import echarts from 'echarts';

class Charts extends PureComponent {
  constructor(props) {
    super(props);
    this.chart = null;
    this.options = {
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      dataZoom: [
        {
          type: 'inside',
          show: true
        }
      ],
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#193D37'],
            width: 1,
            type: 'solid'
          }
        },
        axisLabel: {
          show: true,
          fontSize: 10,
          textStyle: {
            color: '#FFEBC8',
            fontSize: 10
          },
          margin: 4
        },
        splitArea: {
          show: true,
          areaStyle: {color: ['#182422', '#111A19']}
        }
      },
      yAxis: {
        z: 2,
        type: 'value',
        scale: true,
        nameTextStyle: {
          color: '#FFEBC8',
          fontSize: 10,
          align: 'right'
        },
        axisLabel: {
          textStyle: {
            color: '#FFEBC8'
          },
          scale: true,
          axisLine: {
            show: false
          }
        },
        splitLine: {
          interval: 1,
          show: true,
          lineStyle: {
            color: ['#193D37'],
            width: 1,
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        }
      }
    };
  }

  componentDidMount() {
    //初始化图表
    if (this.chart) {
      this.chartContainer = echarts.init(this.chart);
      const options = this.props.option;
      this.options.xAxis.data = options.xAxis.data.map((k) => k);
      this.options.series = options.series;
      this.chartContainer.setOption(this.options);
    }
  }

  componentDidUpdate() {
    //每次组件更新都重置
    this.chartContainer.setOption(this.props.option);
  }

  componentWillUnmount() {
    //组件卸载前卸载图表
    if (this.chartContainer) echarts.dispose(this.chartContainer);
  }

  //刷新图标
  updateChart(data) {
    if (this.chartIns) this.chartIns.setOption(this.setOpt(data), true);
  }

  render() {
    return <div ref={(ref) => (this.chart = ref)} />;
  }
}

export default Charts;
