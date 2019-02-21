// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { Router } from 'react-router-dom';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<Router><App /></Router>, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import LoginContainer from '../login';
import Login from '../login';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import initialState from '../initialState';
import { Provider } from 'react-redux';


const mockStore = configureStore();
const store = mockStore(initialState);

it('render the APP component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App')).toBeTruthy();
});

it('renders the App component with header and main"', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('header')).toBeTruthy();
  expect(wrapper.find('main')).toBeTruthy();
});

test('should show login component if not authenticted', () => {
  const wrapper = mount(<MemoryRouter><Provider store={store}><App /></Provider></MemoryRouter>);

});