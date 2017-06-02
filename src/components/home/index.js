import React, { Component } from 'react'
import { Link } from 'react-router'
import { 
  is,
  fromJS
} from 'immutable'

import Container from './container'
import Banner from './banner'
import Divider from './divider'
import Cover from './cover'
import Footer from './footer'

export default class Index extends Component {

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.props.fetchHomeFeed()
  }

  shouldComponentUpdate (nextProps) {
    return !is(fromJS(nextProps), fromJS(this.props))
  }

  render () {
    const feeds = this.props.homeFeed
    return (
      <Container>
        <Banner /> 
        <Divider />
        {
          !feeds.isEmpty() &&
          feeds.map(item => (
            <Link to={ `/detail/${ item.get('id') }` }>
              <Cover 
              cover={ item.get('coverForFeed') } 
              title={ item.get('title') }
              category={ item.get('category') }
              time={ item.get('duration') } />
            </Link>
          ))
        }
        <Footer />
      </Container>
    )
  }

}
