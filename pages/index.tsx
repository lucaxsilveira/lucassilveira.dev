import Layout from '../components/Layout'

const Home = (): JSX.Element => {
  return (
    <Layout>
      <div className="container h-screen">
        <div className="flex flex-col justify-center h-full">
          <p className="mb-0 text-primary mono">Oi, me chamo</p>
          <h1 className="dark:text-white text-3xl sm:text-4xl ">
            Lucas da Silveira
          </h1>
          <h3 className="subtitle text-gray-400">
            Programador full-stack, apaixonado por front-end.
          </h3>
        </div>
      </div>
    </Layout>
  )
}

export default Home
