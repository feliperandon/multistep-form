import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thanks.css";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiHeartEyesFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Almost there...</h2>
      <p>
        Your opinion is very important to us. You will receive a 10% discount
        cupom for your next purchase.
      </p>
      <p>To finish your review, click on Submit button down below.</p>
      <h3>Here is your review: {data.name}</h3>
      <p className="review-data">
        <span>Satisfiaction:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comment:</span>
        {data.comment}
      </p>
    </div>
  );
};

export default Thanks;
