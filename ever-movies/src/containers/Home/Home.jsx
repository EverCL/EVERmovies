import { useEffect, useState} from "react"
import { Background, Info, Poster, Container, ContainerButtons} from "./styles"
import { useNavigate } from "react-router-dom"
import { getImages} from "../../utils/getImages"



 import Modal from "../../components/Modal"

import Button from "../../components/Button"
 import Slider from "../../components/slider"
 
import { getMovies, 
  getTopMovies, 
  getPopularSeries, 
  getTopSeries, 
  getTopPeople, 
} from "../../services/getData"

function Home() {

  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovie, setTopMovie] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularSeries, setPopularSeries] = useState()
  const [topPeople, setTopPeople] = useState()
  const navigate = useNavigate()

   useEffect(() => {
  
  async function getAllData() {

    Promise.all([
      getMovies(),
      getTopMovies(),
      getTopSeries(),
      getPopularSeries(),
      getTopPeople(),

    ])
    .then(([movie, topMovies, topSeries, popularSeries, topPeople ]) => {
    setMovie(movie)
    setTopMovie(topMovies)
    setTopSeries(topSeries)
    setPopularSeries(popularSeries)
    setTopPeople(topPeople)
}) 
}
 getAllData()
 
 }, [])

  return (
    <>
    { movie && (
<Background img={getImages(movie.backdrop_path)}>
  {showModal && <Modal movieId={movie.id} setShowModal={setShowModal}/>
  }
 
       <Container>
       <Info>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <ContainerButtons>
<Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista agora</Button>
<Button onClick={() => setShowModal(true)}>Assista o trailer</Button>
        </ContainerButtons>
        </Info>
    
        <Poster>
          <img alt="capa-do-filme" 
          src={getImages(movie.poster_path)} />
        </Poster>
       </Container>
        </Background>
        )}
       {topMovie &&  <Slider info={topMovie} title={"Principais Filmes"}/>}
       {topSeries &&  <Slider info={topSeries} title={"Principais Séries"}/>}
       {popularSeries &&  <Slider info={popularSeries} title={" Séries Populares "}/>}
       {topPeople &&  <Slider info={topPeople} title={"Principais artistas"}/>}
  
        </>  
  )
}

 export default Home





// REVISÃO GERAL
 
//  import Button from "../../components/Button"
//  import { useEffect, useState } from "react"
//  import { Background, Info, Poster, Container, ContainerButtons} from "./styles"
//  import { useNavigate } from "react-router-dom"
//  import { getImages} from "../../utils/getImages"
//  import Slider from "../../components/slider"
//  import Modal from "../../components/Modal"
//  import api from "../../services/api"



//  function Home() {

//      const [showModal, setShowModal] = useState(false)
//      const [movie, setMovie] = useState()
//      const [topMovies, setTopMovies] = useState()
//      const [topSeries, setTopSeries] = useState()
//      const [popularSeries, setPopularSeries] = useState()
//      const [topPeople, setTopPeople] = useState()
//      const navigate = useNavigate()

//      useEffect(() => {
  
//          async function getMovies() {
//       const {data: {results}
//   } = await api.get('/movie/popular')
   
//    setMovie(results[0])

// }

// async function getTopMovies() {
//   const { data: {results}
// } = await api.get('/movie/top_rated')

// console.log(results)
// setTopMovies(results)
// }

// async function getTopSeries() {
//   const {data: {results}
// } = await api.get('/tv/popular')

// console.log(results)
// setTopSeries(results)
// }
// async function getPopularSeries() {
//     const { data: {results}
//   } = await api.get('/tv/top_rated')
  
//   console.log(results)
//   setPopularSeries(results)
//   }

// async function getTopPeople() {
//     const {data: {results}
//   } = await api.get('/person/popular')
  
//   console.log(results)
//   setTopPeople(results)
//   }

// getMovies()
// getTopMovies()
// getTopSeries()
// getPopularSeries()
// getTopPeople()
// }, [])


// return (
//   <>
//   { movie && (
//   <Background img={getImages(movie.backdrop_path)} >
// {showModal && <Modal movieId={movie.id} setShowModal={setShowModal}/>
//    }

//     <Container>
//         <Info>
//          <h1>{movie.title}</h1>
//          <p>{movie.overview}</p>
//          <ContainerButtons>
//  <Button red onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista agora</Button>
//  <Button onClick={() => setShowModal(true)}>Assista o trailer</Button>
//          </ContainerButtons>
//          </Info> 
//          <Poster>
//          <img  alt="Capa do filme" 
//           src={getImages(movie.poster_path)}
//           />
//          </Poster>
//         </Container>
//   </Background>
//   )}
//   {topMovies && <Slider info={topMovies} title={"Principais Filmes"} />}
//   {topSeries && <Slider info={topSeries} title={"Principais Séries"} />}
//   {popularSeries && <Slider info={popularSeries} title={"Séries Populares"} />}
//   {topPeople && <Slider info={topPeople} title={"Artistas principais"} />}
// </>
// )
// }

// export default Home
