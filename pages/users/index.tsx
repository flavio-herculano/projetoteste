export async function getStaticProps(){
  const data = await fetch('http://localhost:3000/api/users')
  const usuario = await data.json()
  return {
    props: { usuario }
  }
}

  export default function Usuario({ usuario }){
  return (
    <>
      {usuario.map(persona => (
        <div key={persona._id}>
            <h1>{persona.name}</h1>
            <p>{persona.sobrenome}</p>
        </div>
      ))}
    </> 
    )
  }