import React from 'react'
import { useParams, useHistory, Redirect } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { GETCLUB } from './graphql'
import ShowComments from './ShowComments'
import {
  LargeContainer, SmallContainer, SmallerContainer, Title, TitleContainer,
  SummaryContainer, SummaryHead, Summary,
} from './styles'

const SpecificClub = () => {
  // const info = { title: 'Club' }
  const { id } = useParams()
  const history = useHistory()
  const {loading, data, error} = useQuery(GETCLUB, 
    { variables: { clubId: id }, partialRefetch: true })
  if (error) {
    return <Redirect to="/Browse"/>
  }
  if (loading) return 'Loading!'


  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    }}
    >
      <LargeContainer>
        <TitleContainer>
          <Title>{ data.name }</Title>
        </TitleContainer>
      </LargeContainer>
      <LargeContainer>
        <SummaryContainer>
          <SummaryHead>Summary:</SummaryHead>
          <Summary>{data.summary}</Summary>
        </SummaryContainer>
        <SmallContainer>
          <SmallerContainer>
              Rating:
          </SmallerContainer>
          <SmallerContainer>
              Tags:
          </SmallerContainer>
        </SmallContainer>
      </LargeContainer>
      <ShowComments />
    </div>
  )
}

export default SpecificClub
