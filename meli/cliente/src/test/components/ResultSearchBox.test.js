import React from 'react';
import { ResultSearchBox } from '../../components/ResultSearchBox';
import { mount } from "enzyme";       
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';


describe('Test in ResultSearchBox component', () => {
  
    test('should match with snaphot', () => {

    const wrapper = mount(      
        <MemoryRouter >
          <ResultSearchBox />
        </MemoryRouter>                   
    );
    expect( wrapper ).toMatchSnapshot();    
  });
    
})
