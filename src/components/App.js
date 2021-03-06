import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import sampleFishes from '../sample-fishes'
import Fish from './Fish'
import base from '../base'

class App extends React.Component {
  // the state and the methods that update state need to live in the exact same component
  state = {
    fishes: {},
    order: {}
  }

  static propTypes = {
    match: PropTypes.object
  }

  componentDidMount() {
    // once App mounts (initial load included), sync with FB DB
    const { params } = this.props.match
    // first re-instate any localStorage
    const localStorageRef = localStorage.getItem(params.storeId)
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) })
    }
    console.log(localStorageRef)
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    })
  }

  // runs when anything is updated, NOT on initial load
  componentDidUpdate() {
    // console.log(this.state.order)
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    )
  }

  // if user goes back and forth between stores, can lead to "memory leak" as FB would never UNlisten for changes
  componentWillUnmount() {
    // this will UNlisten once component is unmounted
    base.removeBinding(this.ref)
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

  updateFish = (key, updatedFish) => {
    // take copy of current state
    const fishes = { ...this.state.fishes }
    // update state
    fishes[key] = updatedFish
    // set that to state
    this.setState({
      fishes: fishes
    })
  }

  deleteFish = key => {
    // snapshot of state
    const fishes = { ...this.state.fishes }
    // update state
    fishes[key] = null // for FB to update
    this.setState({ fishes })
  }

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder = key => {
    // take copy of state
    const order = { ...this.state.order }
    // either add or subtract from number in order
    // if order.fish[key] exists, increment
    order[key] = order[key] + 1 || 1
    // setState to update our state object
    this.setState({ order: order })
  }

  removeFromOrder = key => {
    // take copy of state
    const order = { ...this.state.order }
    // remove item from order
    delete order[key]
    // setState to update our state object
    this.setState({ order: order })
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
          <ul className='fishes'>
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
          storeId={this.props.match.params.storeId}
        />
      </div>
    )
  }
}

export default App
