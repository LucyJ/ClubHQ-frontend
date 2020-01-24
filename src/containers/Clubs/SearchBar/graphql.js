import gql from 'graphql-tag'

export const SEARCH = gql`
query Search ($searchText: String!) {
  search(input: $searchText) {
    __typename
    ... on Club {
      id
      name
    }
    ... on Tag {
      id
      text
    }
  }
}
`
