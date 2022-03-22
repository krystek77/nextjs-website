import AdminLayout from '../../../components/Layout/AdminLayout';
import React from 'react';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import Title from '../../../components/Title/Title';
import Description from '../../../components/Description/Description';
import Modal from '../../../components/Modal/Modal';
import styles from './index.module.css';
import { server } from '../../../config';

const ADD_POST_URL = `${server}/api/posts/add`;
const FOOTER_OF_MARKDOWN = `Źródło: [Primus]()

<http://www.pralma.pl>
<biuro@pralma.pl`;
function PostForm() {
  const [formData, setFormData] = React.useState({
    fileName: '',
    data: { title: '', info: '', date: '', image: '', tags: '' },
    content: FOOTER_OF_MARKDOWN,
  });
  const [message, setMessage] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  const handlePostForm = async (e) => {
    e.preventDefault();
    const response = await fetch(ADD_POST_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    setMessage(result.message);
    setIsOpen(true);
    clearFormInputs();
  };
  const clearFormInputs = () =>
    setFormData({
      fileName: '',
      data: { title: '', info: '', date: '', image: '', tags: '' },
      content: FOOTER_OF_MARKDOWN,
    });

  React.useEffect(() => {
    const timer = setTimeout(function () {
      setIsOpen(false);
      setMessage('');
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [message]);
  return (
    <React.Fragment>
      <Modal isOpen={isOpen} toggleModal={() => setIsOpen(!isOpen)}>
        <Title content="Komunikat" variant="h4" />
        <Description classes="description_18">{message}</Description>
      </Modal>
      <div className={styles.postFormSection}>
        <form
          className={styles.postFormSection__form}
          onSubmit={handlePostForm}
        >
          <div className={styles.postFormSection__metaData}>
            <Title
              content="Meta dane wiadomości"
              variant="h2"
              classes="title_display_h5 "
            />
            <Input
              handleInput={(e) =>
                setFormData({ ...formData, fileName: e.target.value })
              }
              classes="input_mb_1"
              type="type"
              fieldName="fileName"
              value={formData.fileName}
              placeholder="Nazwa pliku np.: pralnicowirówki fx kontra rx"
            />
            <Input
              handleInput={(e) =>
                setFormData({
                  ...formData,
                  data: { ...formData.data, title: e.target.value },
                })
              }
              classes="input_mb_2"
              type="type"
              fieldName="title"
              value={formData.data.title}
              placeholder="Tytuł"
            />
            <textarea
              onChange={(e) =>
                setFormData({
                  ...formData,
                  data: { ...formData.data, info: e.target.value },
                })
              }
              className={styles.postFormSection__textarea}
              value={formData.data.info}
              name="info"
              rows="10"
              placeholder="Krótki opis"
            />
            <Input
              handleInput={(e) =>
                setFormData({
                  ...formData,
                  data: { ...formData.data, date: e.target.value },
                })
              }
              classes="input_mb_2"
              type="date"
              fieldName="date"
              value={formData.data.date}
            />
            <Input
              handleInput={(e) =>
                setFormData({
                  ...formData,
                  data: { ...formData.data, image: e.target.value },
                })
              }
              classes="input_mb_2"
              type="text"
              fieldName="image"
              value={formData.data.image}
              placeholder="adres obrazka tytulowego np.: http://example.com/picture.webp"
            />
            <Input
              handleInput={(e) =>
                setFormData({
                  ...formData,
                  data: { ...formData.data, tags: e.target.value },
                })
              }
              classes="input_mb_2"
              type="type"
              fieldName="tags"
              value={formData.data.tags}
              placeholder="tags np.: technologie,pralma,primus ..."
            />
          </div>
          <div className={styles.postFormSection__content}>
            <Title
              content="Szczegóły wiadomości"
              variant="h2"
              classes="title_display_h5 "
            />
            <textarea
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              className={styles.postFormSection__textarea}
              value={formData.content}
              name="content"
              placeholder="zawartość wiadomości wpisana w formacie markdown"
            />
          </div>
          <Button
            label="dodaj"
            type="submit"
            classes="button_center button_span_2"
          />
        </form>
      </div>
    </React.Fragment>
  );
}
PostForm.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default PostForm;
