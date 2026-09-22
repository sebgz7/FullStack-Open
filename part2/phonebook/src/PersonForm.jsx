const PersonForm = ({ newName, newNumber, onNameChange, onNumberChange, onSubmit }) => {
  return (
    <form className="person-form" onSubmit={onSubmit}>
      <div className="field">
        <label>Name</label>
        <input value={newName} onChange={onNameChange} />
      </div>
      <div className="field">
        <label>Number</label>
        <input value={newNumber} onChange={onNumberChange} />
      </div>
      <button className="btn-primary" type="submit">Add contact</button>
    </form>
  )
}
export default PersonForm