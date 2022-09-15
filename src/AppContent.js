import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-Config";
import { collection, getDocs } from "firebase/firestore";
function App() {
  const [user, setUser] = useState([]);
  const usersCollection = collection(db, "GAs");
  useEffect(() => {
    const getuser = async () => {
      const data = await getDocs(usersCollection);
      console.log(data);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getuser();
  }, []);
  return (
    <>
      {user.map((elem) => {
        return (
          <div>
            <h1>{elem.name}</h1>
            <h1>{elem.age} <br /> {elem.hobby}</h1>
          </div>
        );
      })}
    </>
  );
}

export default App;
