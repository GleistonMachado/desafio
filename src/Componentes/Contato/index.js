import React from 'react';
import styles from './Contato.module.css';
import foto from '../../img/contato.jpg';
import Head from '../Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Gleiston | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>gleiston@gmail.com</li>
          <li>9999-8888</li>
          <li>Rua sem nome, 123</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
