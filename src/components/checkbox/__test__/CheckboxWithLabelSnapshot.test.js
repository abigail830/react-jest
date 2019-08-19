// Link.react.test.js
import React from 'react';
import CheckboxWithLabel from '../CheckboxWithLabel';

//react-test-render could help to bypass the warning if component name in big char
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});