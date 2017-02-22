import React from 'react';
import {shallow} from 'enzyme';
import Hello from '../packs/hello_react';

test('Greets user by name', () => {
  const hi = shallow(
    <Hello name="Michael" />
  );

  expect(hi.text()).toEqual('Hello Michael!');
});
