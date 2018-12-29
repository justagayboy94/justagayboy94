import React from 'react'
import styled from "styled-components"

import { SEO } from '../components/SEO/SEO'

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AboutPage = () => (
  <Container>
    <SEO title="About" />
    <h1>About</h1>
  </Container>
)

export default AboutPage
