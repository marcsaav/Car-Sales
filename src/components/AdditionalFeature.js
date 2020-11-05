import React from 'react';
import { connect } from 'react-redux'
import { addFeature } from '../actions'

import { mapStateToProps } from '../reducers'

const AdditionalFeature = props => {

  const handleAdd = e => {
    const feature = props.feature
    // console.log(feature)
    props.dispatch(addFeature(feature))
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAdd}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(mapStateToProps)(AdditionalFeature);
