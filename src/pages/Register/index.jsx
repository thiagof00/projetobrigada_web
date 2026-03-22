import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import connectApi from "../../api/api";
import styles from "./style.module.css";

function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { perfil: "CIVIL" }
  });

  const onSubmit = async (data) => {
    const { nome, cpf, email, telefone, endereco, perfil } = data;
    setLoading(true);
    try {
      await connectApi.post("/usuarios", { nome, cpf, email, telefone, endereco, perfil });
      window.alert("Cadastrado!");
      navigate("/home");
    } catch (err) {
      window.alert("Erro no cadastro, tente novamente");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className={styles.loadingAndError}><p>Carregando...</p></div>;
  if (error)   return <div className={styles.loadingAndError}><p>Erro ao carregar</p></div>;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className={styles.field}>
            <label>Nome completo</label>
            <input type="text" {...register("nome", { required: true })} />
            {errors.nome && <span className={styles.errorMsg}>Campo obrigatório</span>}
          </div>

          <div className={styles.field}>
            <label>Endereço</label>
            <input type="text" {...register("endereco")} />
          </div>

          <div className={styles.field}>
            <label>Email</label>
            <input type="email" {...register("email")} />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>CPF</label>
              <input type="text" {...register("cpf")} />
            </div>
            <div className={styles.field}>
              <label>Telefone</label>
              <input type="text" {...register("telefone")} />
            </div>
          </div>

          <div className={styles.perfilWrapper}>
            <label>Perfil</label>
            <select className={styles.perfilSelect} {...register("perfil", { required: true })}>
              <option value="CIVIL">Civil</option>
              <option value="BRIGADA">Brigadista</option>
              <option value="INTERNO">Interno</option>
            </select>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            Salvar
          </button>

        </form>
      </div>
    </div>
  );
}

export default Register;