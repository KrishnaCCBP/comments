import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props
  const {
    name,
    comment,
    id,
    postTime,
    isLiked,
    initialClassName,
  } = commentDetails

  const letterText = name.slice(0, 1)
  const timeText = formatDistanceToNow(postTime)

  const onClickLikeButton = () => {
    toggleIsLiked(id)
  }

  const onClickDeleteButton = () => {
    deleteComment(id)
  }

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likedClassName = isLiked ? 'liked-text' : ' '

  return (
    <li className="comment-container">
      <div className="text-letter-container">
        <div className={initialClassName}>
          <p className="initial">{letterText}</p>
        </div>
        <div className="text-container">
          <div className="name-time-container">
            <h1 className="name">{name}</h1>
            <p className="time-stamp">{timeText}</p>
          </div>
          <div className="comment-container">
            <p className="comment">{comment}</p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button type="button" className="button" onClick={onClickLikeButton}>
          <img src={likeImgUrl} alt="like" />
          <span className={`${likedClassName}`}>Like</span>
        </button>
        <button
          type="button"
          className="button"
          onClick={onClickDeleteButton}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
      <hr className="h-line" />
    </li>
  )
}

export default CommentItem
