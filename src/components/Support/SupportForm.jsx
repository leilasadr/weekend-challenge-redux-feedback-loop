import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function SupportForm (props) {
  const [supportInput, setSupportInput] = useState('');
  const history = useHistory();
  
  const createSupport = (event) => {
    event.preventDefault();
    console.log('Support:', supportInput);

    axios({
      method: "POST",
      url: "/api/feedback",
      data: {
        support: supportInput
      }
    }).then ((response) => {
        console.log("POST", response.data);
        setSupportInput("");
        props.fetchFeedback();
    }).catch ((error) => {
        console.log("POST wasn't successful:", error);
    })
  }
  return (
    <form onSubmit={createSupport}>
      <h1>How well are you being supported?</h1>
      <input
       placeholder="Support?"
       type="number"
       value={supportInput}
       onChange={(event) => {setSupportInput(event.target.value)}}
      />
      <button onClick={() => { history.push("/comments")}}>Next</button>
    </form>
    )
};

export default SupportForm;