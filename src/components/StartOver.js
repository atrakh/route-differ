import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@blueprintjs/core'

const StartOver = ({
  onRestartClick,
  onUpdateSelectedRoute,
  onUpdateSelectedActivity
}) => (
  <Button
    className="pt-minimal pt-intent-warning pt-icon-repeat"
    text="Start over"
    onClick={() => {
      onRestartClick(onUpdateSelectedRoute, onUpdateSelectedActivity)
    }}
  />
)

StartOver.propTypes = {
  onRestartClick: PropTypes.func.isRequired,
  onUpdateSelectedRoute: PropTypes.func.isRequired,
  onUpdateSelectedActivity: PropTypes.func.isRequired
}

export default StartOver
