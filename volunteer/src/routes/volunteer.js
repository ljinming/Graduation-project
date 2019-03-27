import React from 'react';
import Bundle from 'react-router-bundle';

export default props => (
  <Bundle load={() => import('@containers/volunteer/index')}>
    {(COM) => <COM {...props} title='志愿助手' prefixCls='volunteer' />}
  </Bundle>
)
