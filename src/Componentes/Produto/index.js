import React from 'react';
import { useParams } from 'react-router';
import Head from '../Head';
import styles from './Produto.module.css';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (e) {
        setError('Algo está errado :(');
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (produto === null) return null;
  if (error) return <p>{error}</p>;

  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head
        title={`Gleiston | ${produto.nome}`}
        description={`Gleiston | Esse é o produto ${produto.nome}`}
      />

      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
      </div>

      <div className={styles.produtoFoto}>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>

      <div>
        <h3>Descrição:</h3>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
