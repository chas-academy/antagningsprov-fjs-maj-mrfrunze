function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age

  // skapa en fuktion som tar in en array som argument
  // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
  //  över 30 år som skrivs ut i konsolen

  // anropa funktionen och skicka med arrayen som argument
    
  const people = [
    { name: "Anna", age: 25 },
    { name: "Björn", age: 32 },
    { name: "Cecilia", age: 45 },
    { name: "David", age: 28 },
    { name: "Eva", age: 34 },
    
  ];

  function handlePeopleOver30(arr) {
    for (const person of arr) {
      if (person.age > 30) {
        console.log(person.name);
      }
    }
  }

    handlePeopleOver30(people);
}

module.exports = { uppg8 };
