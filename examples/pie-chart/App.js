import React from 'react';
import ReactDOM from 'react-dom';

import PieChart from 'rc-d3/pie-chart';

const pieData = [
  {
    label: '<5',
    value: 2704659,
    color: '#1f77b4'
  },
  {
    label: '5-13',
    value: 4499890,
    color: '#ff7f0e'
  },
  {
    label: '14-17',
    value: 2159981,
    color: '#2ca02c'
  },
  {
    label: '18-24',
    value: 3853788,
    color: '#d62728'
  },
  {
    label: '25-44',
    value: 14106543,
    color: '#9467bd'
  },
  {
    label: '45-64',
    value: 8819342,
    color: '#8c564b'
  },
  {
    label: '>65',
    value: 612463,
    color: '#e377c2'
  }
];

const settings = {
  innerRadius: 100,
  outerRadius: 240,
  labelRadius: 180,
  padding: 10,
  hasLabels: true
};

const styles = {
  '.arc path': {
    stroke: 'rgba(0, 0, 0, 1)',
    strokeWidth: 2
  },
  '.arc text': {
    fontSize: '12px',
    fill: 'white'
  }
};

ReactDOM.render(<PieChart data={pieData} settings={settings} styles={styles} />, document.getElementById('root'));
