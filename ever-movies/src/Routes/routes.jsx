// import { Route, Routes } from "react-router-dom";

// import Home from "../containers/Home/Home";
// import Movies from "../containers/movies/Movies";
// import Series from "../containers/Series/Series";

// import React from 'react'
// import DefaultLayout from "../layout/DefaultLayout";
// import PhotoLay from "../layout/PhotoLay";
// import Layoutph from "../layout/Layoutph";
// import Layoutphdet from "../layout/Layaoutphdet"
// import Detail from "../containers/Detail";

// const ApRoute = () => {
//   return (
//     <Routes>
//         <Route element={<DefaultLayout/>}>
//         <Route path="/" element={<Home />} />
//         </Route>

//         <Route element={<PhotoLay/>}>
//         <Route path="/filmes" element={<Movies />} />
//         </Route>

//         <Route element={<Layoutph/>}>
//         <Route path="/series" element={<Series />} />
//         </Route>
//         <Route element={<Layoutphdet/>}>
//         <Route path="/detalhe/:id" element={<Detail />} />
//         </Route>
//     </Routes>
//   )
// }

// export default ApRoute

// REVISÃO GERAL


import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Home from "../containers/Home/Home";
import Movies from "../containers/movies/Movies";
import Series from "../containers/Series/Series";
import Detail from "../containers/Detail";
const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout/>}>
      <Route path="/" element ={<Home/>}/>
      <Route path="/filmes" element ={<Movies/>}/>
      <Route path="/series" element ={<Series/>}/>
      <Route path="/detalhe/:id" element ={<Detail/>}/>
      </Route>
    </Routes>
  )
}
export default Router