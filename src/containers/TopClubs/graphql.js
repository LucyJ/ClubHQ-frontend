import gql from 'graphql-tag'

export const ALLCLUBS = gql`
query ALLCLUBS{
    allClubs{
      name
      email
      website
      size
      competitiveness
    }
  }
`