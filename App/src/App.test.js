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

it('should increment the counter value when the increment button is clicked', async () => {
  await page.goto('http://localhost:3000')

  const demoButton = await page.$('#demobutton')
  const counter1 = await page.$('#counter')
  const initialCount = parseInt(counter1.innerText)
  const expectedCount = initialCount + 1

  await demoButton.click()

  const counter2 = await page.$('#counter')
  const newCount = parseInt(counter2.innerText)
  
  await page.screenshot({ path: `../screenshots/counter-test.png` })


  await expect(newCount).toBe(expectedCount)
});
