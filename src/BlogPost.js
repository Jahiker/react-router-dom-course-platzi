import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { blogdata } from './blogdata';

const BlogPost = () => {
const { slug } = useParams();
const blogpost = blogdata.find(post => post.slug === slug);

const navigate = useNavigate();

const returnToBlog = () => {
  navigate('/blog')
}

const returnBack = () => {
  navigate(-1)
}

  return (
    <>
        <h2>{ blogpost.title }</h2>
        <button onClick={returnToBlog}>Volver al Bolg</button>
        <button onClick={returnBack}>Black</button>
        <p>{ blogpost.content }</p>
        <i>{ blogpost.author }</i>
    </>
  )
}

export { BlogPost }