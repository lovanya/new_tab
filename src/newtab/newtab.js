import Vue from 'vue';
import App from './App';
import 'animate.css';

global.browser = require('webextension-polyfill');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
