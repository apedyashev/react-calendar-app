// libs
import React, {PropTypes} from 'react';
// components
import DateTimeSelector from 'components/Base/Form/DateTimeSelector';

export default function FormGroupDateTimeSelector({input, meta: {touched, error, warning}}) {
  return (<div>
    <DateTimeSelector
      {...input}
    />
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>);
}
FormGroupDateTimeSelector.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};