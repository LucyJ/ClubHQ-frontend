import gql from 'graphql-tag'

export const ALLCLUBS = gql`
query ALLCLUBS {
  allClubs{
    	id
    	name
    	avgRating
    	
      }
    }
`