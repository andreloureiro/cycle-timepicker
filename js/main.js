import {run} from '@cycle/xstream-run';
import {makeDOMDriver} from '@cycle/dom';
import {createHistory} from 'history';
import {makeRouterDriver} from 'cyclic-router';
import TimePicker from './TimePicker';

const drivers = {
  DOM: makeDOMDriver('#root'),
  router: makeRouterDriver(createHistory(), {capture: true})
};

run(TimePicker, drivers);
