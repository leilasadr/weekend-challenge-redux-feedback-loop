import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CommentsForm (props) {
  const [commentsInput, setCommentsInput] = useState('');
  const history = useHistory();
  
  const createComments = (event) => {
    event.preventDefault();
    console.log('Support:', commentsInput);

    axios({
      method: "POST",
      url: "/api/feedback",
      data: {
        coments: commentsInput
      }
    }).then ((response) => {
        console.log("POST", response.data);
        setCommentsInput("");
    }).catch ((error) => {
        console.log("POST wasn't successful:", error);
    })
  }
  return (
    <form onSubmit={createComments}>
      <h1>Any comments you want to leave?</h1>
      <input
       placeholder="Comments"
       type="text"
       value={commentsInput}
       onChange={(event) => {setCommentsInput(event.target.value)}}
      />
      <button onClick={() => { history.push("/review")}}>Next</button>
    </form>
    )
};

export default CommentsForm;