import type { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header/Header"
import HpBanner from "../components/HpBanner/HpBanner"
import Row from "../components/Row/Row"

import requests from "../utils/requests"
import { Movie } from "../types"

interface HomeProps {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}: HomeProps) => {
  return (
    <div className="relative h-screen bg-gradient-to-b lg: h-[140vh]">
      <Head>
        <title>Netflix clone</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <HpBanner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List */}
          {/* {list.length > 0 && <Row title="My List" movies={list} />} */}

          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>

      {/* Modal */}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all(
    requests.map((request) =>
      fetch(Object.values(request)[0]).then((res) =>
        res.json().catch((error) => console.log(error))
      )
    )
  )

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  }
}
