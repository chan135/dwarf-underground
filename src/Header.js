import React, { Component } from 'react'
import './Header.css'
import TopHeader from './TopHeader'
import BotHeader from './BotHeader'

class Header extends Component {
  render() {
    return (
      <div className="expanded row header">
        <TopHeader />
        <BotHeader />
      </div>
    )
  }
}

export default Header