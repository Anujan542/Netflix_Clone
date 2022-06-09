import Head from 'next/head'
import Banner from '../Components/Banner'
import Header from '../Components/Header'

const Home = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main>
        {/* banner */}
        <Banner />
        <section>
          {/* row */}
          {/* row */}
          {/* row */}
          {/* row */}
          {/* row */}
          {/* row */}
          {/* row */}
        </section>
      </main>
      {/* modal */}
    </div>
  )
}

export default Home
