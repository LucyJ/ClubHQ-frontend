import {
  useQuery,
} from '@apollo/react-hooks'
import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'
import { ALLCLUBS } from './graphql'
import ShowClubs from './ShowClubs'
import { ClubContainer } from './styles'

const Clubs = () => {
  const { loading, error, data } = useQuery(ALLCLUBS)

  if (loading) return 'Loading!'
  if (error) return 'error!'

  const clubArray = () => {
    console.log(data.allClubs)
    const arr = []

    data.allClubs.map(el => arr.push(el))

    arr.sort((a, b) => {
      if (a.avgRating < b.avgRating) {
        return 1
      }

      return -1
    })

    const arr2 = []
    for (let i = 0; i < 10; ++i) {
      arr2.push(arr[i])
    }

    return arr2
  }


  return (
    <ClubContainer>
      <ShowClubs clubArray={clubArray()} />
    </ClubContainer>

  )
}

export default Clubs
