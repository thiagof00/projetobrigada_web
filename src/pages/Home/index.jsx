import { useEffect, useState } from "react";
import connectApi from "../../api/api";
import styles from "./style.module.css";

const TIPOS = ["Civis", "Brigadistas", "Internos"];

const TIPO_MAP = {
  Civis: "CIVIL",
  Brigadistas: "BRIGADA",
  Internos: "INTERNO",
};

function Home() {
  const [data, setData] = useState([]);
  const [selectedType, setSelectedType] = useState("Civis");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await connectApi.get("/usuarios");
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const usuariosFiltrados = data.filter(
    (u) => u.perfil === TIPO_MAP[selectedType]
  );

  if (loading) return <div className={styles.loadingAndError}><p>Carregando...</p></div>;
  if (error)   return <div className={styles.loadingAndError}><p>Erro: {error}</p></div>;

  return (
    <main className={styles.mainHome}>

    <div className={styles.tabs}>
      {TIPOS.map((tipo) => (
        <button
          key={tipo}
          className={`${styles.tab} ${selectedType === tipo ? styles.activeTab : ""}`}
          onClick={() => setSelectedType(tipo)}
        >
          {tipo}
        </button>
      ))}
    </div>
    <div className={styles.tableWrapper}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Endereço</th>
          <th>Telefone</th>
        </tr>
      </thead>
      <tbody>
        {usuariosFiltrados.map((u) => (
          <tr key={u.id}>
            <td>{u.nome}</td>
            <td>{u.cpf}</td>
            <td>{u.endereco}</td>
            <td>{u.telefone}</td>
          </tr>
        ))}
      </tbody>
    </table>

  </div>

    </main>
  );
}

export default Home;