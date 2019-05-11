import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <hr />
      <div>
        Contact Name:<input type="text" name="contactname" />
        Phone: <input type="text" name="contactphone" />
        <button type="button">Add Contact</button>
      </div>
      <hr />
      <div>
        <p>Emergency Contact: Alfredo Alonso (847) 123 1234</p>
      </div>
      <hr />
      <div>
        <h3>Contacts</h3>

        <div>
          <h4>_____ A _____</h4>
          <div>
          <p> <strong>Alfredo Alonso</strong> (847) 123 1234 </p>
          <p> <strong>Arturo Mendoza</strong> (310) 321 8859 </p>
          </div>
        </div>

        <div>
          <h4>_____ B _____</h4>
          <div>
          <p> <strong>Benito Juarez</strong> (449) 345 9898 </p>
          </div>
        </div>

        <div>
          <h4>_____ F _____</h4>
          <div>
          <p> <strong>Frida Kahlo</strong> (555) 553 5351 </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
