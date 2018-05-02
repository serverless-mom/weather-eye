import {
  expect
}
from 'chai';
import * as actions from '../../src/actions/index';

describe('actions', () => {
  it('get weather should be available with the correct type', () => {
    expect(actions.getWeather()).to.include({
      type: 'GET_WEATHER'
    });
  });
});
