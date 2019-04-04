export const  MainColumns=[
    {
      dataIndex: '1', title: '理科', align: 'center', children: [
        {dataIndex: 'score', title: '分数', width: 10},
        {dataIndex: 'number', title: '考生人数', width: 10,},
      ]
    },
    {
      dataIndex: '2', title: '文科', align: 'center', children: [
        {dataIndex: 'score', title: '分数', width: 10},
        {dataIndex: 'number', title: '考生人数', width: 10,},
      ]
    },
];
export const SegmentColumn=[
  {dataIndex: 'admission', title: '', width: 60},
  {dataIndex: 'math', title: '理科', width: 40},
  {dataIndex: 'arts', title: '文科', width: 40,},
];