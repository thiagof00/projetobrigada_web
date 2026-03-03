import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
function Register() {

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm()

  const onSubmit = (data) => console.log(data)



  return (
    <>
    <h1>Cadastrar</h1>
    <Link to="/home">Voltar</Link>

    <main>

    <form onSubmit={handleSubmit(onSubmit)}>
    
    <label htmlFor="nome">Nome completo</label>
    <input type="text" {...register("nome", {required: true})} name="nome" />
    {errors.nome && <span>O campo é obrigatório</span>}

    <label htmlFor="endereco">Endereço</label>
    <input type="text" {...register("endereco")} name="endereco"/>
    {errors.endereco && <span>O campo é obrigatório</span>}

    <label htmlFor="email">Email</label>
    <input type="text" {...register("email")} name="email"/>
    {errors.email && <span>O campo é obrigatório</span>}

    <label htmlFor="cpf">CPF</label>
    <input type="text" {...register("cpf")} name="cpf"/>
    {errors.cpf && <span>O campo é obrigatório</span>}

    <label htmlFor="telefone">Telefone</label>
    <input type="text" {...register("telefone")} name="telefone"/>
    {errors.endereco && <span>O campo é obrigatório</span>}

    <label htmlFor="perfil">Perfil</label>
    <select name="perfil" id="perfil" {...register("perfil" , {required: true, value:"CIVIL"})}>
      <option value="CIVIL">Civil</option>
      <option value="BRIGADA">Brigadista</option>
      <option value="INTERNO">Interno</option>
    </select>




    
    <input type="submit" />


    </form>

    </main>
    </>
  )
}

export default Register
