 import React from 'react'
// import useFetch from '../hooks/useFetch'
 import { Link } from 'react-router-dom'
 import { useQuery, gql } from '@apollo/client'
 
 const REVIEW = gql`
 query GetReviews {
    reviews {
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

 export default function HomePage() {
   // const {loading, error, data} = useFetch('http://localhost:1337/api/reviews')
   const {loading, error, data} = useQuery(REVIEW) 
   if(loading) return <p>Loading...</p>
    if(error) return <p>Error ;/</p>
    console.log(data)

    //CRUD
    
   return (
    <div>
      {data.reviews.data.map((review) => (
        <div key={review.attributes.id} className="review-card">
          <div className="rating">{review.attributes.rating}</div>
          <h2>{review.attributes.title}</h2>

          <small>Movie list</small>
          <p>
            {review.attributes.body[0].children[0].text.substring(0, 200)} ...
          </p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
   )
 }
 