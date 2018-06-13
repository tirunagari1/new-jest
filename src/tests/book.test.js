import React from 'react'
import { shallow, mount } from 'enzyme'
import Book from '../components/book'
import { book, onChangeBookshelf } from './utils'

describe('<Book />', () => {
  it('should renders correctly', () => {
    expect(shallow(<Book book={book} onChangeBookshelf={onChangeBookshelf} />))
  })


  it('should contains all correct classes', () => {
    const wrapper = shallow(
      <Book book={book} onChangeBookshelf={onChangeBookshelf} />
    )
    expect(wrapper.find('.book').length).toBe(1)
    expect(wrapper.find('.book-top').length).toBe(1)
    expect(wrapper.find('.book-title').length).toBe(1)
    expect(wrapper.find('.book-authors').length).toBe(3)
  })

})
