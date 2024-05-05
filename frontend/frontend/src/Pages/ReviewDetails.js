import React from 'react'
import { useParams } from 'react-router-dom'
//import useFetch from '../hooks/useFetch'
import { useQuery, gql } from '@apollo/client'

const REVIEWS = gql`
query GetReviews($id: ID!) {
    review(id: $id) {
      data {
        id,
        attributes { 
          title,
          rating,
          body
        }
      }
    }
  }
`

export default function ReviewDetails() {
    const { id } = useParams()
    const {loading, error, data} = useQuery(REVIEWS, {
        variables: {id: id}
    })
 //   const { loading, error, data } = useFetch('http://localhost:1337/api/reviews/' + id)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error ;/</p>
    console.log(data.review.data)

    return (
        <div className="review-card">
            <div className='rating'>{data.review.data.attributes.rating}</div>
            <h2>{data.review.data.attributes.title}</h2>
            <small>console list</small>
            {data.review.data.attributes.body.map((item, index) => (
                item.children.map((child, i) => (
                    <p key={i}>{child.text}</p>
                ))
            ))}
        </div>
    )
}
