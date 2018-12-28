import React from 'react'

import { Layout } from '../components/Layout/Layout'
import { SEO } from '../components/SEO/SEO'
import { TwitterGallery } from '../components/TwitterGallery/TwitterGallery'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`justagayboy94`, `slave`, `twink`, `gay`, `bdsm`]} />
    <TwitterGallery />
  </Layout>
)

export default IndexPage
