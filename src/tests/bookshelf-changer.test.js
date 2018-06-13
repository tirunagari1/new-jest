import React from 'react'
import { shallow, mount } from 'enzyme'
import BookshelfChanger from '../components/bookshelf-changer'

describe('<BookshelfChanger />', () => {
  const changeBookshelf = jest.fn()

  it('shallow renders correctly', () => {
    expect(shallow(<BookshelfChanger onChangeBookshelf={changeBookshelf} />))
  })

  it('mount correctly', () => {
    expect(mount(<BookshelfChanger onChangeBookshelf={changeBookshelf} />))
  })
})
