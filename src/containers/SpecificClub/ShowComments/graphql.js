import gql from 'graphql-tag'

export const ADDEVAL = gql`
mutation addEvaluation($input: AddEvaluationInput!){
    addEvaluation(input: $input){
        id
        hoursOfMeeting,
        hoursOfWork,
        rating,
        comments
        }
      }
    `

export const GETEVAL = gql`
query getEvaluationsOfClub($clubId: ID!){
    getEvaluationsOfClub(clubId: $clubId){
        id
        hoursOfMeeting,
        hoursOfWork,
        rating,
        comments
        }
      }
    `
