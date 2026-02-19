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

  console.log(watch("cpf")) // watch input value by passing the name of it


  return (
    <>
    <h1>Cadastrar</h1>
    <Link to="/home">Voltar</Link>

    <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text" {...register("nome", {required: true})} />
    {errors.nome && <span>O campo é obrigatório</span>}

    <input type="text" {...register("cpf")} />
    {errors.cpf && <span>O campo é obrigatório</span>}
    <input type="submit" />
    </form>
    </>
  )
}

export default Register
