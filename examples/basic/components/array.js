import React from 'react';
import Hello from './class.js';

const array = [
  <Hello name="Array1" />,
  <Hello name="Array2" />,
  <Hello name="Array3" />,
  [
    <Hello name="Sub array1" />,
    <Hello name="Sub array2" />,
    <Hello name="Sub array" />
  ]
];

export default array;
