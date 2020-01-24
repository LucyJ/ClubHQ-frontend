import gql from 'graphql-tag'

export const GETCLUB = gql`
query getClub($clubId:ID!){
    getClub(clubId: $clubId){
          id
          name
          email
          website
          summary
          avgRating
          competitiveness
          size
        }
      }
    `
