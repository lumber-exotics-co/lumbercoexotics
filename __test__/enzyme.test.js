import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import{ MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import App from '../components/App'
import Home from '../components/home';
import ProductDisplay from '../components/productDisplay';
import Cart from '../components/containers/cart';
import { exportAllDeclaration } from '@babel/types';

configure({adapter : new Adapter()});

// describe('<App />', () => {
//     const wrapper = shallow(
//         <MemoryRouter initialEntries={['/']} initialIndex={0}> 
//             < App />
//         </MemoryRouter>
//     );
//     it('renders homepage', () => {
//         expect (
//             wrapper.contains(<div>Home</div>)
//         ).toBe(true);
//     })
// });

const sum = (x, y) => x + y;
describe('First React component test with Enzyme', () => {
    it('sum', () => {
        expect(sum(1,2)).toEqual(3); 
    })
});



// describe('Home', () => {
//     let wrapper;
    
//     beforeAll(() => {
//       wrapper = shallow(<Home />);
//     });

//     // wrapper = shallow(<Home />);

//     it('Renders a <h1> tag with the label in bold', () => {
//       expect(wrapper.type()).toEqual('h1');
//       expect(wrapper.text()).toEqual('Buy a keyboard wrist rest that perfectly compliments your style');
//       // console.log(wrapper.text());
//       expect(wrapper.find('strong').text()).toMatch('Buy a keyboard wrist rest that perfectly compliments your style');
//     });
//   });
