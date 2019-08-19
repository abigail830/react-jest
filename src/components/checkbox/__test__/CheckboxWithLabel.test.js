import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import CheckboxWithLabel from '../CheckboxWithLabel';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test('CheckboxWithLabel should change the text after click', () => {
  //given
  const {queryByLabelText, getByLabelText} = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  );
  expect(queryByLabelText(/off/i)).toBeTruthy();

  //when
  fireEvent.click(getByLabelText(/off/i));

  //then
  expect(queryByLabelText(/on/i)).toBeTruthy();
});