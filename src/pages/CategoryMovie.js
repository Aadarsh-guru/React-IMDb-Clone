import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, styled } from '@mui/system';
import { useLocation } from 'react-router-dom';
import { categoryMovies } from '../services/api';
import Header from '../components/Header'
import { POPULAR_API_URL, UPCOMING_API_URL, TOPRATED_API_URL, moviesType } from '../constants/constants';
import { Divider, Typography } from '@mui/material';
import MoviesList from '../components/MoviesList';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const StyledBanner = styled('img')({
    width: '100%',
    height: 450
})

const Component = styled(Box)`
    width: 80%;
    margin: 20px auto 0 auto;
`

const Container = styled(Box)`
    background: #F5F5F5;
    padding : 10px;

`


const CategoryMovie = () => {

    const [movies, setMovies] = useState([])

    const { search } = useLocation()

    useEffect(() => {

        const getData = async () => {

            if (search.includes('popular')) {
                let response = await categoryMovies(POPULAR_API_URL)
                setMovies(response.results)
            }
            else if (search.includes('toprated')) {
                let response = await categoryMovies(TOPRATED_API_URL)
                setMovies(response.results)
            }
            else if (search.includes('upcoming')) {
                let response = await categoryMovies(UPCOMING_API_URL)
                setMovies(response.results)
            }
        }
        getData()
    }, [search])

    return (
        <>
            <Header />
            <Component>
                <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    slidesToSlide={1}
                >
                    {
                        movies.map(movie => (
                            <StyledBanner src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="banner" />
                        ))
                    }
                </Carousel>
                <Container>
                    <Typography variant='h6'>IMDb Charts</Typography>
                    <Typography variant='h4'>IMDb {moviesType[search.split('=')[1]]} Movies</Typography>
                    <Typography style={{fontSize: 12, margin: 5}}>IMDb Top {movies.length} rated by regular IMDb voters.</Typography>
                    <Divider />
                    <MoviesList movies={movies} />
                </Container>
            </Component>
        </>
    )
}

export default CategoryMovie