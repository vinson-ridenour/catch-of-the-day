import React from 'react'
import PropTypes from 'prop-types' // used to check type

// implicit return, better performance with stateless fxn components
const Header = props => (
  <header className='top'>
    <h1>
      Catch
      <span className='ofThe'>
        <span className='of'>Of</span>
        <span className='the'>The</span>
      </span>
      Day
    </h1>
    <h3 className='tagline'>
      <span>{props.tagline}</span>
    </h3>
  </header>
)

// every prop and its type in an object
Header.propTypes = {
  tagline: PropTypes.string.isRequired
}

// class Header extends React.Component {
//   render() {
//     return (
//       <header className='top'>
//         <h1>
//           Catch
//           <span className='ofThe'>
//             <span className='of'>Of</span>
//             <span className='the'>The</span>
//           </span>
//           Day
//         </h1>
//         <h3 className='tagline'>
//           {/* 'this' references whatever was passed into Header component instance (like cool={true} as prop in App.js) */}
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     )
//   }
// }

export default Header
