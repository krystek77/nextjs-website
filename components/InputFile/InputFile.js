import React from 'react';
import styles from './InputFile.module.css';
import { classesNames } from '../../lib';

const InputFile = React.forwardRef((props, ref) => {
  const classesString = classesNames(props.classes, 'inputFile')(styles);
  return (
    <input
      className={classesString}
      type="file"
      ref={ref}
      multiple={props.multiple}
    />
  );
});
InputFile.displayName = 'InputFile';
InputFile.defaultProps = {
  classes: '',
  multiple: false,
};

export default InputFile;
