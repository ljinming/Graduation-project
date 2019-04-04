import React from 'react';
import echarts from 'echarts';

class Segment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 'science',
      score: '',
      segment: []
    }
  }

  componentDidMount() {
    if (this.chartContainer) {
      let chart = echarts.init(this.chartContainer);
      chart.setOption(this.setOpt(this.props.chart));
    }
  }

  setOpt = (chart) => {
    return {
      title: {
        text: '分数线走势',
        textStyle:{
          color:'#ffebc8',
          fontSize:16,
          lineHeight:36
        }
      },
      grid: {
        right:10,
        borderColor: '#193D37',
        show: true
      },
      tooltip: {
        trigger:'axis',
        confine:false,
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
        data: chart.xData,
        axisLabel: {
          show: true,
          fontSize: 10,
          textStyle: {
            color: '#FFEBC8',
            fontSize: 10
          },
        },
        splitArea: {
          show: true,
          areaStyle: {color: ['#182422', '#111A19']}
        }
      },
      legend: {
        type: 'plain',
        z: 2,
        right: 5,
        icon: 'rect',
        top: 8,
        itemWidth: 20,
        itemHeight: 2,
        itemGap: 5,
        textStyle: {color: '#FFEBC8', fontSize: 12}
      },
      series: [
        {
          name:'理科',
          type:'line',
          showSymbol: false,
          data:chart.sData.math
        },
        {
          name:'文科',
          type:'line',
          showSymbol: false,
          data:chart.sData.arts
        },
      ]
    }
  };

  render() {
    return (
      <div style={{width:'50%'}}
           ref={(ref) => (this.chartContainer = ref)}>
      </div>

    )
  }
}


export default Segment;
