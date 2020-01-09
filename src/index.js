// // let's go!
// alert('hi!')
import React from 'react'
import { render } from 'react-dom'
import Router from './components/Router'
import './css/style.css' // react will load in css into a style tag and auto-reload any changes

render(<Router />, document.querySelector('#main'))
