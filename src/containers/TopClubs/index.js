import React from 'react'
import ShowClubs from './ShowClubs'
import { ClubContainer } from './styles'

const Clubs = () => {
  const clubArray = [{ title: 'Clubname', id: 'unique' }, { title: 'club2', id: 'unique2' }]

  return (
    <ClubContainer>
      <ShowClubs clubArray={clubArray} />
    </ClubContainer>

  )
}

export default Clubs
