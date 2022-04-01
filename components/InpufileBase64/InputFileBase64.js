import styles from './InputFileBase64.module.css';
import { classesNames } from '../../lib';
import FileBase64 from 'react-file-base64';

function InputFileBase64({ multiple, classes, action, children }) {
  const classesString = classesNames(classes, 'inputFile')(styles);
  return (
    <div className={classesString}>
      <FileBase64 multiple={multiple} onDone={action} />
      {children}
    </div>
  );
}
InputFileBase64.defaultProps = {
  classes: '',
  multiple: false,
  action: () => {},
  children: undefined,
};
export default InputFileBase64;
