import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
  BsEmojiNeutralFill,
  BsEmojiSmileFill,
  BsEmojiHeartEyesFill,
} from "react-icons/bs";

import "./ReviewForm.css";

const ReviewForm = () => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisfied" name="review" required />
          <BsFillEmojiFrownFill />
          <p>Unsatisfied</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="neutral" name="review" required />
          <BsEmojiNeutralFill />
          <p>Neutral</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="satisfied" name="review" required />
          <BsEmojiSmileFill />
          <p>Satisfied</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="very_satisfied" name="review" required />
          <BsEmojiHeartEyesFill />
          <p>Very Satisfied</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment"> Comment:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Tell us how has your experience with the product"
          required
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
