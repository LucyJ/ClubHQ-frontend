import gql from 'graphql-tag'

export const LOGIN=gql`
mutation LOGIN($email: String!, $password:String!){
  login(email: $email, password:$password){
    	token
    	user{
        id,
        firstName,
        lastName,
      }
    }
  }
`