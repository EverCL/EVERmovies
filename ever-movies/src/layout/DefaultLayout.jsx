import { Outlet } from "react-router-dom";
import Head from "../components/Header/Head";

import React from 'react'

const DefaultLayout = () => {
  return (
    <div>
        <Head/>
        <Outlet/>
    </div>
  )
}

export default DefaultLayout
