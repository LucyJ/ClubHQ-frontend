import React from 'react'
import {
  Comment, CommentContainer, CommentInput, CommentButton,
} from './styles'

const ShowComments = () => (
  <>
    <CommentContainer>
      <Comment style={{ fontWeight: 'bold' }}> Comments: </Comment>
    </CommentContainer>
    <CommentContainer>
      <CommentInput />
      <CommentButton>Comment</CommentButton>
    </CommentContainer>
  </>
)

export default ShowComments
