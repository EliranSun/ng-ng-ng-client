import React from 'react';
import classnames from 'classnames';

import styles from './Popup.module.scss';

const Header = ({ title, isCloseable, onClose, type }) => {
  return (
    <div className={ classnames(styles.header, styles[type])}>
      <div className={styles['header-title']}>{ title }</div>
      { isCloseable && <button className={ styles.close } onClick={ onClose}>X</button> }
    </div>
  );
};

const Footer = ({ children }) => {
  return (
    <div className={ styles.footer }>
      { children }
    </div>
  );
};

const Popup = ({ title, isCloseable, content, type, onClose }) => {
  return (
    <div className={ styles.popup }>
      <Header title={ title } isCloseable={ isCloseable } type={ type } onClose={ onClose }/>
      <div className={styles.content}>{ content }</div>
      <Footer/>
    </div>
  );
};

export default Popup;
