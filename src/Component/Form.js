import React from "react";
import { useState } from "react";
import { db } from "./LabFirebase";
import { addDoc, collection} from "firebase/firestore";
import "../Styles/Form.css";
function Form() {


  const [colection, setColection] = useState("ComptitiveCoding");
  const [language,setLanguage]=useState("")
  const [id,setId]=useState("")
  const [quetNo,setQuetNo]=useState("")
  const [code, setCode] = useState("");
  const usersCollection = collection(db,colection);

  const UpdateData= async ()=>{
    await addDoc(usersCollection,{Lab:colection,Language:language,Id:id,QuetNo:quetNo,Code:code});
    alert("Add has been added");
  }

  return (
    <>
      <h1 className="heading">Lab Partner Admin</h1>
      <div className="inputarea">
        <div className="inputs ">
          <label htmlFor="">LAB : </label>
          <select name="" id="ColectionList" onClick={(event) =>setColection(event.target.value)}>
            <option value="ComptitiveCoding">ComptitiveCoding</option>
            <option value="DAA">DAA</option>
            <option value="DS Lab">DS Lab</option>
            <option value="Java Lab">Java Lab</option>
          </select>
        </div>
        <div className="inputs ">
          <label htmlFor="">Language : </label>
          <input required type="text" align="center" onChange={(event)=>setLanguage(event.target.value)}/>
        </div>
        <div className="inputs ">
          <label htmlFor="">Id : </label>
          <input required type="text" onChange={(event)=>setId(event.target.value)}/>
        </div>
        <div className="inputs ">
          <label htmlFor="">Quet.No : </label>
          <input required type="text" onChange={(event)=>setQuetNo(event.target.value)}/>
        </div>
      </div>
      {/* <hr /> */}
      <div className="codearea">
        <label className="codeforyou">Code&#128071;</label>
        <textarea required name="" id="" cols="100" rows="20" onChange={(event)=>setCode(event.target.value)}></textarea><br />
        <button onClick={UpdateData}>Add Data</button>
      </div>
    </>
  );
}

export default Form;
