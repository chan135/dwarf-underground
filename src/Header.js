import React, { Component } from 'react'
import './Header.css'
import TopHeader from './TopHeader'
import BotHeader from './BotHeader'

const links = ['home', 'about', 'log in']

class Header extends Component {
  render() {
    return (
      <div className="expanded row header">
        <TopHeader links={links}/>
        <BotHeader />
      </div>
    )
  }
}

export default Header