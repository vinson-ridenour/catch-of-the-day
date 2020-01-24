import React from 'react'

class EditFishForm extends React.Component {
  handleChange = e => {
    // currentTarget is the thing that event got fired on
    console.log(e.currentTarget.value)
    // how to update - show state of current fish, then update whatever fields you want
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value // updates whatever field you're in, but doesn't change state yet
    }
    console.log(updatedFish)
    // sends update upstream
    this.props.updateFish(this.props.index, updatedFish)
  }
  render() {
    return (
      <div className='fish-edit'>
        <input
          type='text'
          name='name'
          onChange={this.handleChange}
          value={this.props.fish.name}
        ></input>
        <input
          type='text'
          name='price'
          onChange={this.handleChange}
          value={this.props.fish.price}
        ></input>
        <select
          type='text'
          name='status'
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <textarea
          name='desc'
          onChange={this.handleChange}
          value={this.props.fish.desc}
        ></textarea>
        <input
          type='text'
          name='image'
          onChange={this.handleChange}
          value={this.props.fish.image}
        ></input>
      </div>
    )
  }
}

export default EditFishForm
