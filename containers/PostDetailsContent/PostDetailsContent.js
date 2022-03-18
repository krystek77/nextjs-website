import styles from './PostDetailsContent.module.css';

function PostDetailsContent({ content }) {
  return (
    <main className={styles.postDetailsContent}>
      <div
        className={styles.postDetailsContent__container}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </main>
  );
}
export default PostDetailsContent;
