const Persons = ({ persons, filter, onDelete }) => {
  const personsFiltered = filter
    ? persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  return (
    <ul className="person-list">
      {personsFiltered.map(p =>
        <li className="person-row" key={p.id}>
          <div className="person-info">
            <span className="person-name">{p.name}</span>
            <span className="person-number">{p.number}</span>
          </div>
          <button className="btn-delete" onClick={() => onDelete(p.id, p.name)}>Delete</button>
        </li>
      )}
    </ul>
  )
}
export default Persons