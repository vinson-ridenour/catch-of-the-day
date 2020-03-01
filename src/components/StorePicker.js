import React from 'react'
import PropTypes from 'prop-types'
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  }
  userInput = React.createRef()
  // every class needs at least 1 method (render())

  goToStore = e => {
    e.preventDefault()
    console.log('going to store!')
    // get text from input - don't touch the DOM! (no querySelector/$('input'))
    const storeName = this.userInput.current.value
    // change the page to /store/whatever-they-entered
    // window.location =
    this.props.history.push(`/store/${storeName}`)
  }
  render() {
    return (
      <form className='store-selector' onSubmit={this.goToStore}>
        <h2 id='instructions'>
          Please enter a store name or use the default to begin.
        </h2>
        <input
          type='text'
          ref={this.userInput}
          required
          placeholder='Store Name'
          defaultValue={getFunName()}
        />
        <button type='submit'>Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker
