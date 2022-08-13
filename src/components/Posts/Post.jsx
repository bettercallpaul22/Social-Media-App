import React from 'react'
import post from '../../data/postData'
import './Post.css'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import SendIcon from '@mui/icons-material/Send';

const Post = () => {
  return (
    <div >
      {post.map((post) =>
        <div className='post'>
          <img src={post.img} alt="" className='post-images' />
          <div className='icons'>
            <div className="like-container">
              {post.liked ? <><ThumbDownOffAltIcon /></> : <><ThumbUpOffAltIcon /></>}
              <span>{post.likes} likes</span>
            </div>
            <InsertCommentIcon />
            <SendIcon />
          </div>

          <div className="desc">
            <span><b>{post.name} </b></span>
            <span>{post.desc}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Post