import React from 'react';
import { mount } from "enzyme";       
import { MemoryRouter } from 'react-router-dom';
import { DetailsProduct } from '../../components/DetailsProduct';


describe('Test in ResultSearchBox component', () => {
  
    test('should match with snaphot', () => {

    const wrapper = mount(      
        <MemoryRouter >
          <DetailsProduct />
        </MemoryRouter>                   
    );
    expect( wrapper ).toMatchSnapshot();    
  });
    
})
