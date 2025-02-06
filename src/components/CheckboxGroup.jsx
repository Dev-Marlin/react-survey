function CheckboxGroup({formData, setFormData, handleSubmit, handleChange}) {
  return (
    <ul>
      <li>
        <label><input name="spend-time" type="checkbox" value="swimming" checked={formData.spendTimeWithDuck.includes("swimming")} onChange={handleChange}/>Swimming</label>
      </li>

      <li>
        <label><input name="spend-time" type="checkbox" value="bathing" checked={formData.spendTimeWithDuck.includes("bathing")} onChange={handleChange}/>Bathing</label>
      </li>

      <li>
        <label><input name="spend-time" type="checkbox" value="chatting" checked={formData.spendTimeWithDuck.includes("chatting")} onChange={handleChange}/>Chatting</label>
      </li>

      <li>
        <label><input name="spend-time" type="checkbox" value="noTime" checked={formData.spendTimeWithDuck.includes("noTime")} onChange={handleChange}/>I dont like to spend time with it</label>
      </li>
    </ul>    
  )
}

export default CheckboxGroup