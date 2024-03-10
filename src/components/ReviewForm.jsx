import { useState } from "react"
import Button from "./layout/Button"
import Rating from "./Rating"
import { useNavigate } from "react-router-dom"

const spanStyle = {
  display: 'block',
  fontStyle: 'italic',
  marginTop: '10px'
}

function ReviewForm({ handleAdd }) {
  const navigate = useNavigate(); // navigation function

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [msg, setMsg] = useState('')
  const [rating, setRating] = useState(7)

  const textHandler = (e) => {
    const newText = e.target.value;
    setText(newText);

    if (newText.trim().length <= 20) {
      setMsg('Your review must be above 20 characters');
      setBtnDisabled(true);
    } else {
      setMsg('');
      setBtnDisabled(false);
    }
  }

  const formSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 20) {
      const newReview = {
        text,
        rating
      }
      handleAdd(newReview);
      setText('');
    }
  }

  // Function to navigate to the review list page
  const goToReviewListPage = () => {
    navigate("/AllReviews"); // Navigates to the "/listreview" route
  }

  return (
    <>
      <div className="container">
        <div className="card">
          <form onSubmit={formSubmit}>
            <h3>Kindly drop a Review for our service you just experienced.</h3>
            <Rating ratingState={(rating) => setRating(rating)} />
            <br /><br />
            <div className="input-group">
              <input type="text" value={text} placeholder="write your review here" onChange={textHandler} />
              <Button type='submit' variant='secondary' disabled={btnDisabled}>
                Submit
              </Button>
            </div>
            {msg && (<span className="message" style={spanStyle}>{msg}</span>)}
          </form>
        </div>
      </div>

      {/* Use onClick to navigate */}
      <div className="allreviewsBTN">
        <Button type='button' variant='secondary'  onClick={goToReviewListPage}>
          All Reviews
        </Button>
      </div>
    </>
  )
}

export default ReviewForm
