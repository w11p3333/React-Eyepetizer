import React, { Component } from 'react'
import { Link } from 'react-router'
import { 
  is,
  fromJS
} from 'immutable'
import moment from 'moment'

import Modal from '@/components/common/modal'
import Container from './container'
import Banner from './banner'
import Divider from './divider'
import Cover from './cover'
import Footer from './footer'

export default class Index extends Component {

  constructor (props) {
    super(props)
    const today = moment().format('MMM. D')
    this.state = {
      today: `- ${today} -`
    }
  }

  componentWillMount () {
    this.props.fetchHomeFeed()
  }

  shouldComponentUpdate (nextProps, nextState) {
    return !is(fromJS(nextProps), fromJS(this.props)) || !is(fromJS(this.state), fromJS(nextState))
  }

  render () {
    const { homeFeed } = this.props
    return (
      <Container>
        <Banner { ...this.props } /> 
        <Divider text={ this.state.today } />
        {
          !homeFeed.isEmpty() &&
          homeFeed.map(item => (
            <Link to={ `/detail/${ item.get('id') }` }>
              <Cover 
                cover={ item.get('coverForFeed') } 
                title={ item.get('title') }
                category={ item.get('category') }
                time={ item.get('duration') } />
            </Link>
          ))
        }
        <Footer { ...this.props } />
        <Modal { ...this.props } />
      </Container>
    )
  }

}
