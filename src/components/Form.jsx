
import RadiobuttonGroup from './RadiobuttonGroup'
import CheckboxGroup from './CheckboxGroup'

function Form({formData, setFormData, handleSubmit, handleChange}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>

        <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <RadiobuttonGroup formData = {formData} handleSubmit={handleSubmit} handleChange={handleChange}></RadiobuttonGroup>
        </div>

        <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <CheckboxGroup formData = {formData} handleSubmit={handleSubmit} handleChange={handleChange}></CheckboxGroup>
        </div>

        <label>What else have you got to say about your rubber duck?
            <textarea
                name="review"
                cols="30"
                rows="10"
                value={formData.review}
                onChange={handleChange}
            ></textarea>
        </label>

        <label>Put your name here (if you feel like it):
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />
        </label>

        <label>Leave us your email pretty please??
            <input
                type="email"
                name="email"
                value={formData.email} 
                onChange={handleChange}/>
        </label>

        <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  )
}

export default Form