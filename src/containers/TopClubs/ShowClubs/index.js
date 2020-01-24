import React from 'react'
import { ResultCard, ClubText, StyledLink } from './styles'

const ShowClubs = ({ clubArray }) => clubArray.map(({ id, name, avgRating }) => (
  <StyledLink to={`/Clubs/${id}`} key={id}>
    <ResultCard>
      <ClubText>{name} {avgRating}</ClubText>
    </ResultCard>
  </StyledLink>
))

export default ShowClubs
