import styles from './Description.module.css';
import { classesNames } from '../../lib';

function Description({ content, classes }) {
  const classesString = classesNames(classes, 'description')(styles);
  return <p className={classesString}>{content}</p>;
}

Description.defaultProps = {
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt facere cupiditate non velit aliquam deleniti? Illum voluptate a vel obcaecati impedit voluptatibus repellendus mollitia, velit blanditiis architecto, cumque eum?',
};

export default Description;
