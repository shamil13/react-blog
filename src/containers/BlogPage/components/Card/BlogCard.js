import React from 'react';
import './BlogCard.css'
import heartIcon from '../../../../assets/images/heart.svg'
import deleteCon from '../../../../assets/images/trash.svg'

export const BlogCard = ({
  title,
  desciption,
  likeCount,
  likeAPost,
  deletePost
}) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{desciption}</p>
      <div>
        <button
          onClick={likeAPost}
          className="likeBtn"
        >
          <img src={heartIcon} alt="Heart" />
        </button>
        <span className="likeCount">{likeCount}</span>
      </div>
      <button onClick={deletePost} className='delete'>
      <img src={deleteCon} alt="delete"/>
      </button>
      
    </div>
  )
}