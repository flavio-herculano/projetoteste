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
      <h1>Pessoas</h1>
      {usuario.map(persona => (
        <div key={persona._id}>
          <a>
            <h3>{persona.name}</h3>
            <h1>o sobrenome é: {persona.sobrenome}</h1>
          </a>
        </div>
      ))}
    </> 
    )
  }