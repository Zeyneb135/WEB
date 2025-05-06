import React from 'react'
import Layout from '../../components/layout/Layout'
import FirstSection from '../../components/firstSection/FirstSection'
import SecondSection from '../../components/secondSection/SecondSection'
import ThirdSection from '../../components/thirdSection/thirdSection'

const Home = () => {
  return (
    <Layout>
       <FirstSection/> 
       <SecondSection/>
       <ThirdSection/>
    </Layout>
  )
}

export default Home