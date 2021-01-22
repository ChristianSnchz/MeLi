import React from 'react';
import { shallow } from "enzyme"
import { SearchBox } from "../../components/SearchBox";


describe('test in SearchBox Component', () => {

  test('should match with snaphot', () => {

    const wrapper = shallow( <SearchBox/>);
    expect( wrapper ).toMatchSnapshot();    
  });
    
})
