import React from 'react'
import { shallow, mount } from 'enzyme'
import BookGrid from '../components/book-grid'
import { books, onChangeBookshelf } from './utils'

describe('<BookGrid />', () => {
  it('should renders correctly', () => {
    expect(
      shallow(<BookGrid books={books} onChangeBookshelf={onChangeBookshelf} />)
    )
  })})
