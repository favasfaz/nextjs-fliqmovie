import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import config from '../utilities/config'
import axios from 'axios'
import Results from '../components/Results'

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Nav />
        <Results results={results} />
      </div>
      
    </div>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre

const response = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=4cbdcbf22b240e76b3a63439183955b6&language=en-US')


return {
  props :{
    results: response.data.results
  }
}

}