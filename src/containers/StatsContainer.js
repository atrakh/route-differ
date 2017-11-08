import React from 'react'
import { connect } from 'react-redux'

import Stats from '../components/Stats'

function mapStateToProps(state) {
  return {
    route: state.selectedRoute,
    activity: state.selectedActivity
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Stats)
