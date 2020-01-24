import React, { useReducer } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { ADDEVAL, GETEVAL } from './graphql'
import {
  Comment, CommentContainer, CommentInput, CommentButton, CommentBubble, BubbleDiv,
  CommentContainerColumn,
} from './styles'

const formReducer = (prevState, payload) => ({ ...prevState, ...payload })

const ShowComments = ({ id }) => {
  const [form, setForm] = useReducer(formReducer,
    {
      hoursOfMeeting: '',
      hoursOfWork: '',
      rating: '',
      comments: '',
    })

  const { loading, error, data: evalData } = useQuery(GETEVAL,
    {
      variables: { clubId: id },
      // Make sure to change so that it knows what state - what the club id is!
    })

  const [createEvaluation] = useMutation(ADDEVAL, {
    variables: {
      input: {
        clubId: id,
        ...form,
      },
    },
    onCompleted: () => window.location.reload(),
    update: (client, { data: { addEvaluation } }) => {
      try {
        const data = client.readQuery({ query: GETEVAL })

        data.getEvaluationsOfClub = [...data.getEvaluationsOfClub, addEvaluation]

        client.writeQuery({ query: GETEVAL, data })
      } catch (err) {
        console.log('HERE!')
      }
    },
  })

  if (loading) {
    return 'loading'
  }
  if (error) {
    return 'error'
  }
  console.log(evalData)
  return (

    <>

      <CommentContainer>
        <Comment style={{ fontWeight: 'bold' }}> Comments: </Comment>
      </CommentContainer>
      {evalData.getEvaluationsOfClub.map(
        ({
          rating, hoursOfMeeting, hoursOfWork, comments,
        }) => (
          <CommentContainerColumn key={id}>
            <div>
              <Comment>
                {`${comments}`}
              </Comment>
            </div>

            <BubbleDiv>
              <CommentBubble>
                {`Rating: ${rating}`}

              </CommentBubble>
              <CommentBubble>
                {`Meeting Hours: ${hoursOfMeeting}`}

              </CommentBubble>
              <CommentBubble>
                {`Working Hours: ${hoursOfWork}`}

              </CommentBubble>
            </BubbleDiv>
          </CommentContainerColumn>
        ),
      )}

      <CommentContainer>
        <CommentInput placeholder="Hours of Meeting" value={form.hoursOfMeeting} onChange={e => setForm({ hoursOfMeeting: Number(e.target.value) })} />
        <CommentInput placeholder="Hours of Work" value={form.hoursOfWork} onChange={e => setForm({ hoursOfWork: Number(e.target.value) })} />
        <CommentInput placeholder="Rating" value={form.rating} onChange={e => setForm({ rating: Number(e.target.value) })} />
        <CommentInput placeholder="Comments" value={form.comments} onChange={e => setForm({ comments: e.target.value })} />
        <CommentButton onClick={createEvaluation}>Comment</CommentButton>
      </CommentContainer>

    </>
  )
}

export default ShowComments
