import React, { Component } from 'react'

export default class Count extends Component {
  constructor (props) {
    super(props)
    this.state = {
      localCount: props.localCount
    }
  }

  localIncrement(count) {
    this.setState({ localCount: count + 1 })
  }

  localDecrement(count) {
    this.setState({ localCount: count - 1 })
  }

  render () {
    let { count, increment, decrement } = this.props
    return (
      <div>
        <div>
          <h1>我是全局状态</h1>
            <button class="btn btn-success btn-lg" onClick={() => increment(count)}>+</button>
            <button class="btn btn-danger btn-lg" onClick={() => decrement(count)}>-</button>
            <p>{count}</p>
        </div>
        <div>
          <h1>我是局部状态</h1>
            <button class="btn btn-success btn-lg" onClick={() => this.localIncrement(this.state.localCount)}>+</button>
            <button class="btn btn-danger btn-lg" onClick={() => this.localDecrement(this.state.localCount)}>-</button>
            <p>{this.state.localCount}</p>
        </div>
      </div>
    )
  }
}

Count.PropTypes = { localCount: React.PropTypes.number }
Count.defaultProps = { localCount: 0 }
