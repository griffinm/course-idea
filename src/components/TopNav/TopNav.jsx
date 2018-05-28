import React from 'react'
import classNames from 'classnames'

class TopNav extends React.Component {
  render() {
    return (
      <nav className="row">
        <div className="nav-wrapper">
          <div className={classNames('col', 's12')}>
            <a href="/" className="brand-logo">
              Course Builder
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default TopNav
