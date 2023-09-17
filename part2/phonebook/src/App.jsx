import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const personsToShow = persons.filter((person) => person.name.toUpperCase().includes(filter.toUpperCase()));

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already on the Phonebook`);
      return;
    }

    if (newNumber === "") {
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    setPersons(persons.concat(newPerson));
    console.log(persons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      filter numbers with: <input value={filter} onChange={handleFilterChange} />
      <h2>Add a new number</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </div>
  );
};

export default App;
