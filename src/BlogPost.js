import React from 'react'
import { useParams } from 'react-router-dom'

import { blogdata } from './blogdata';

const BlogPost = () => {
const { slug } = useParams();

const blogpost = blogdata.find(post => post.slug === slug);

  return (
    <>
        <h2>{ blogpost.title }</h2>
        <p>{ blogpost.content }</p>
        <i>{ blogpost.author }</i>
    </>
  )
}

export default BlogPost