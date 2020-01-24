import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { GETCLUB } from './graphql'
import ShowComments from './ShowComments'
import {
  LargeContainer, SmallContainer, SmallerContainer, Title, TitleContainer,
  SummaryContainer, SummaryHead, Summary,
  RatingHead, Rating,
  EmailHead, Email,
  WebsiteHead, Website, SizeHead, Size,
  CompetitivenessHead, Competitiveness, BottomContainer,
} from './styles'

const SpecificClub = () => {
  const { id } = useParams()
  const { loading, data, error } = useQuery(GETCLUB,
    { variables: { clubId: id }, partialRefetch: true })
  if (error) {
    return <Redirect to="/Browse" />
  }
  if (loading) return 'Loading!'


  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    }}
    >
      <LargeContainer>
        <TitleContainer>
          <Title>{data.getClub.name}</Title>
        </TitleContainer>
      </LargeContainer>
      <LargeContainer>
        <SummaryContainer>
          <SummaryHead>Summary:</SummaryHead>
          <Summary>{data.getClub.summary}</Summary>
        </SummaryContainer>
        <SmallContainer>
          <SmallerContainer>
            <RatingHead>Rating:</RatingHead>
            <Rating>{data.getClub.avgRating}</Rating>
          </SmallerContainer>
          <SmallerContainer>
            <SizeHead>Size:</SizeHead>
            <Size>{data.getClub.size}</Size>
          </SmallerContainer>
          <SmallerContainer>
            <CompetitivenessHead>Competitiveness: </CompetitivenessHead>
            <Competitiveness>
              {data.getClub.competitiveness}
            </Competitiveness>
          </SmallerContainer>
        </SmallContainer>
      </LargeContainer>

      <LargeContainer>
        <BottomContainer>
          <EmailHead>Email:</EmailHead>
          <Email>{data.getClub.email}</Email>
        </BottomContainer>
        <BottomContainer>
          <WebsiteHead>Website:</WebsiteHead>
          <Website>{data.getClub.website}</Website>
        </BottomContainer>
      </LargeContainer>
      <ShowComments id={data.getClub.id} />
    </div>
  )
}

export default SpecificClub
