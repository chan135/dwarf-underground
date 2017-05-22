import React, { Component } from 'react'
import './Body.css'
import BodyAuthor from './BodyAuthor'
import Social from './Social'
import BodyInfo from './BodyInfo'

class Body extends Component {
    render() {
        return(
            <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            <BodyAuthor />
            <BodyInfo />
            <Social />
          </div>
        )
    }
}

export default Body