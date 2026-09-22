const Filter = ({ value, onChange }) => {
  return (
    <div className="filter">
      <label>Search:</label>
      <input value={value} onChange={onChange} />
    </div>
  )
}
export default Filter