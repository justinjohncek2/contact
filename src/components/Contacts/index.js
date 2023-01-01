import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
function Contacts() {
  const [contacts, setContacts] = useState([
    { full_name: "Justin", phone_number: "1234" },
    { full_name: "Jaison", phone_number: "567" },
    { full_name: "John", phone_number: "890" },
    { full_name: "Maria", phone_number: "222" }
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <div id="box">
        <List contacts={contacts} />      
        <Form addContacts={setContacts} contacts={contacts} />
      </div>
    </div>
  );
}

export default Contacts;
