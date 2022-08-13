import React from 'react'
import './PostSide.css'
import PostHeader from './PostHeader/PostHeader'
import Post from './Posts/Post'

const PostSide = () => {
  return (
    <div className='PostSide'>
      <PostHeader />
    <Post />
    </div>
  )
}

export default PostSide