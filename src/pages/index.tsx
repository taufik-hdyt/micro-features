import Home from "@/containers/Home/Home";
import { NextPage } from "next";
import NextHead from 'next/head';



const HomePage: NextPage = ():JSX.Element => {

  return (
    <>
     <NextHead>
        <meta charSet="UTF-8" />
        <title>Micro Services</title>
        <meta name="description" content= 'micro services' />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
    </NextHead>
    <Home/>
    </>
  )
}

export default HomePage
