export async function getStaticProps() {
  const data = await fetch('http://localhost:3000/api/users')
  const usuario = await data.json()
  // console.log(usuario);
  return {
    props: { usuario }
  }
}

export default function Usuario({ usuario }) {
  return (
    <>
      <h1>olá mundo</h1>
      <ul>{usuario.map((user) => (
        <li key={user._id}> {user._id}</li>
      ))}</ul>
      <ul>{usuario.map((user) => (
        <li key={user._id}> {user.name}</li>
      ) )}</ul>
      <ul>{usuario.map((user) => (
        <li key={user._id}> {user.sobrenome}</li>
      ))}</ul>
      
       
    </>
  )
}