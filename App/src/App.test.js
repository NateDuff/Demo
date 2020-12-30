import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})

it('renders without crashing', () => {
  const component = shallow(<App />)

  //const div = document.createElement('div');

  //const component = shallow(<App />, div)

  //component.unmountComponentAtNode(div);
});
