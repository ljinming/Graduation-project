/* eslint-disable */
import 'echarts/src/chart/line';
import 'echarts/src/chart/bar';
import 'echarts/src/chart/pie';
import 'echarts/src/component/grid';
import 'echarts/src/component/tooltip';
import 'echarts/src/component/legend';
import 'echarts/src/component/title';
import 'echarts/src/component/legendScroll';
import * as _export from 'echarts/src/export';

import * as _echarts from 'echarts/src/echarts';

var echarts = {};
(function() {
  for (var key in _echarts) {
    if (
      _echarts == null ||
      !Object.prototype.hasOwnProperty.call(_echarts, key) ||
      key === 'default' ||
      key === '__esModule'
    )
      return;
    echarts[key] = _echarts[key];
  }
})();

(function() {
  for (var key in _export) {
    if (
      _export == null ||
      !Object.prototype.hasOwnProperty.call(_export, key) ||
      key === 'default' ||
      key === '__esModule'
    )
      return;
    echarts[key] = _export[key];
  }
})();

export default echarts;
