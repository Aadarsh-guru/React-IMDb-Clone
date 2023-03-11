import { Box, styled } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Slides from '../components/Slides'
import Upnext from '../components/Upnext'
import { NOWPLAYING_API_URL } from '../constants/constants'
import { categoryMovies } from '../services/api'

const Wrapper = styled(Box)`
    display: flex;
    padding 20px 0;
    margin-top: 20px;
`

const Component = styled(Box)`
    padding: 0 115px;
`

const Home = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getData = async () => {
      let response = await categoryMovies(NOWPLAYING_API_URL)
      setMovies(response.results)
    }
    getData()
  }, [])

  return (
    <>
      <Header />
      <Component>
        <Wrapper>
          <Banner movies={movies} />
          <Upnext movies={movies} />
        </Wrapper>
        <Slides  movies={movies}/>
        <Slides  movies={movies}/>
        <Slides  movies={movies}/>
        <Slides  movies={movies}/>
        <Slides  movies={movies}/>
        <Slides  movies={movies}/>
      </Component>
    </>
  )
}

export default Home