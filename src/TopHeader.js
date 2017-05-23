import React, { Component } from 'react'
import './TopHeader.css'


class TopHeader extends Component{
    render() {
      const links = this.props.links.map((link, i) => <a href="#" key={i}>{link}</a>)
        return(
            <div className="clearfix">
          <div className="float-left logo">
            <img src="http://www.iconninja.com/files/409/4/1006/axe-icon.svg" alt="axe" />
          </div>
          <div className="float-right nav-links">
            {links}
          </div>
        </div>
        )
    }
}

export default TopHeader