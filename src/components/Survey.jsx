import { useState } from "react";
import Form from './Form.jsx'
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answerList, setAnswerList] = useState([]);
  const [formData, setFormData] = useState({
    rating: null,
    spendTimeWithDuck: [],
    review: "",
    username: "",
    email: ""
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "checkbox" && event.target.checked) {
      setFormData({ ...formData, spendTimeWithDuck: [...formData.spendTimeWithDuck, value] });
    }
    else if (type === "checkbox" && !event.target.checked) {
      setFormData({ ...formData, spendTimeWithDuck: [...formData.spendTimeWithDuck].filter(x => x !== value) });
    }
    else if(type === 'radio')
    {
      setFormData({ ...formData, rating: value });
    } 
    else {
      setFormData({ ...formData, [event.target.name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAnswerList([...answerList, {id: answerList.length+1, form: formData}]);
    setFormData({
      rating: null,
      spendTimeWithDuck: [],
      review: "",
      username: "",
      email: ""
    });
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answerList={answerList}></AnswersList>
      </section>

      <section className="survey__form">
        <Form formData = {formData} setFormData={setFormData} handleSubmit={handleSubmit} handleChange={handleChange}></Form>
      </section>
    </main>
  );
}

export default Survey;
