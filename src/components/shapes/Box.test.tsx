import React from 'react'
import Box from './Box'
import { shallow } from 'enzyme'

describe('<Box />', () => {
  it('renders default', () => {
    const wrapper = shallow(<Box />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders full', () => {
    const wrapper = shallow(<Box full />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders center', () => {
    const wrapper = shallow(<Box center />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders default full center', () => {
    const wrapper = shallow(<Box full center />)
    expect(wrapper).toMatchSnapshot()
  })
})
