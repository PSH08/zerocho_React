import React from 'react';
import  ReactDom  from 'react-dom';
// const { hot } = require('react-hot-loader/root');

import NumberBaseball from './NumberBaseball';

// const Hot = hot(NumberBaseball);

ReactDom.createRoot(document.querySelector('#root')).render(<NumberBaseball />)