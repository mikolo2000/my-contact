import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import ContactCard from "./components/contactCard";
import Header from "./components/header";
import ContactDetails from "./components/contactDetails";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [activeUser, setActiveUser] = useState(null);
  
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://dummyjson.com/users?limit=20&select=id,firstName,lastName,gender,email,phone,age");
        const data = await res.json();
        setUsers(data.users);
      } catch (error) {
        setError(error.message);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Header/>
      <section className="d-inline-flex p-5 container justify-content-start position-relative p-5 m-5">
        <div  className="p-5 m-5 justify-content-start position-relative">
          {error && <p>{error}</p>}
          {error ? "":<div>
            {users.map((user) => {
              return (
                <ContactCard
                  className={activeUser===user ? 'active card': "card"}
                  key={user.id}
                  name={user.firstName + " " + user.lastName}
                  // number={user.phone}
                  email={user.email}
                  onClick={() => { 
                    const activeId = user.id;
                    setActiveUser(
                      users.find((user) => {
                        return activeId === user.id;
                      })
                    );
                  }}
                />
              );
            })}
          </div>}
        </div>
        {!activeUser  ?    <div className="position-fixed top-50 start-50"><h1>Select User</h1></div> : <ContactDetails
            firstName={activeUser.firstName}
            lastName={activeUser.lastName}
            email={activeUser.email}
            age={activeUser.age}
            gender={activeUser.gender}
            phone={activeUser.phone}
          />
        }
      </section>
    </>
  );
}


export default App;
