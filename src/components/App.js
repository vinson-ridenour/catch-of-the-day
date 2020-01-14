import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'

class App extends React.Component {
  // the state and the methods that update state need to live in the exact same component
  state = {
    fishes: {},
    order: {}
  }
  addFish = fish => {
    // take copy of existing state (so you don't "mutate" the state directly)
    const fishes = { ...this.state.fishes }
    // add new fish to our fishes variable, with timestamp to make unique
    fishes[`fish${Date.now()}`] = fish
    // set the new fishes object to state, if diff detected, will update new state automatically
    this.setState({
      fishes
    })
  }
  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  }
  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
          <ul className='fishes'></ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}

export default App
