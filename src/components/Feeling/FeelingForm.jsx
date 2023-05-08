import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function FeelingForm (props) {
  const [feelingInput, setFeelingInput] = useState('');
  const history = useHistory();

  const createFeeling = (event) => {
    event.preventDefault();
    console.log('Feeling:', feelingInput);

    axios({
      method: "POST",
      url: "/api/feedback",
      data: {
        feeling: feelingInput
      }
    }).then ((response) => {
        console.log("POST", response.data);
        setFeelingInput("");
    }).catch ((error) => {
        console.log("POST wasn't successful:", error);
        console.log(error.response);
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
      <button onClick={() => { history.push("/understanding")}}>Next</button>
    </form>
    )
};

export default FeelingForm;