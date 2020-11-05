import React from 'react';
import { connect } from 'react-redux'

import { removeFeature } from '../actions'

import { mapStateToProps } from '../reducers'

const AddedFeature = props => {

  const handleRemove = e => {
    const feature = props.feature
    props.dispatch(removeFeature(feature))
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemove}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(mapStateToProps)(AddedFeature);
