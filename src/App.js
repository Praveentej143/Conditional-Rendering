import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome />
      </div>
    )
  }
}

export default App

// 1. USING AN IF...ELSE STATEMENT

//   renderAuthButton = () => {
//     const {isLoggedIn} = this.state
//     if (isLoggedIn === true) {
//       return <button>Logout</button>
//     }
//     return <button>Login</button>
//   }

//   {this.renderAuthButton()}

// 2.  USING ELEMENT VARAIABLES

// const {isLoggedIn} = this.state
//     let authButton
//     if (isLoggedIn === true) {
//       authButton = <button>Logout</button>
//     } else {
//       authButton = <button>Login</button>
//     }

// {authButton}

//  3. USING TERNARY OPERATOR

// {isLoggedIn ? <button>Logout</button> : <button>Login</button>}

// 4.  USING && OPERATOR

// {isLoggedIn && <button>Logout</button>}
// {!isLoggedIn && <button>Login</button>}
