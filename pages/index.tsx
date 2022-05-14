
import clientPromise from './lib/mongodb'

export default function Home({ isConnected }) {
  return (
    <>
        {isConnected ? (
          <h2 className="subtitle">Você está conectado ao MongoDB!</h2>
        ) : (
          <h2 className="subtitle">
            Você não está conectado ao MongoDB!
          </h2>
        )}
    
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    await clientPromise
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}