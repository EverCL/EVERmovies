import Logo from "../../assets/Logo.Webp"

import { Containerh, Menu, Li, Cont } from "./styles"

 import { Link, useLocation } from "react-router-dom"

function Head() {
   const { pathname } = useLocation()
  return (

  <Containerh>
   
  <Cont> 
  <h1>EVERMOVIES</h1>
    <img src={Logo} alt="EVERMOVIES"/>
  </Cont>
  <Menu>
    <Li isactive={pathname === '/'}>
      <Link to="/">Home</Link>
    </Li>
    <Li isactive={pathname.includes('filmes')}>
      <Link to="/filmes">Filmes</Link>
    </Li>
    <Li isactive={pathname.includes('series')}>
      <Link to="/series">Séries</Link>
    </Li>
  </Menu>
  </Containerh>

  )
}

export default Head

//89T7J8ch.hs.E9X

// chave da Api: 07adab6d1e56df8db73b4ba98b75c4e2