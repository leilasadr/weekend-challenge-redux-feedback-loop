import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function UnderstandingForm (props) {
  const [understandingInput, setUnderstandingInput] = useState('');
  const history = useHistory();
  
  const createUnderstanding = (event) => {
    event.preventDefault();
    console.log('Understanding:', understandingInput);

    // axios({
    //   method: "POST",
    //   url: "/api/feedback",
    //   data: {
    //     understanding: understandingInput
    //   }
    // }).then ((response) => {
    //     console.log("POST", response.data);
    //     setUnderstandingInput("");
    // }).catch ((error) => {
    //     console.log("POST wasn't successful:", error);
    // })
  }
  return (
    <form onSubmit={createUnderstanding}>
      <h1>How well are you understanding the content?</h1>
      <input
       placeholder="Understanding?"
       type="number"
       value={understandingInput}
       onChange={(event) => {setUnderstandingInput(event.target.value)}}
      />
      <button onClick={() => { history.push("/support")}}>Next</button>
    </form>
    )
};

export default UnderstandingForm;