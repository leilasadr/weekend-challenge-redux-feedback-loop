import { useState } from "react";
import axios from "axios";

function FeelingForm (props) {
  const [feelingInput, setFeelingInput] = useState('');

  const createFeeling = (event) => {
    event.preventDefault();
    console.log('Feeling:', feelingInput);

    axios({
      method: "POST",
      url: "/api/feedback",
      data: {feeling}
    }).then ((response) => {
        console.log("POST", response.data);
    }).catch ((error) => {
        console.log("POST wasn't successful:", error);
    })
  }
  return (
    <form onSubmit={createFeeling}>
      <h1>How are you feeling today?</h1>
      <input
       placeholder="Feeling?"
       type="number"
       value={feelingInput}
       onChange={(event) => {setFeelingInput(event.target.value)}}
      />
      <button>Next</button>
    </form>
    )
};

export default FeelingForm;