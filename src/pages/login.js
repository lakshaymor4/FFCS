import React from "react";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [reg , Setreg] = useState("")
  const [pass,SetPass] = useState("")
  const reeg = (e)=>{
    Setreg(e.target.value)
  }
  const Passs = (e)=>{
    SetPass(e.target.value)
  }
  const han = (e) => {
    e.preventDefault();
    const con = {
      method: "post",
      url: "http://localhost:3000/login",
      data: {
        lrn: reg,
        lpsw:pass,
      },
    };
    axios(con)
      .then((resu) => console.log(resu.data.tok))
      .catch((reu) => console.log(reu));
  };

  return (
    <div className="Top">
      <form action="">
        <input type="text" placeholder="Reg NO." id="lrn" name="lrn" onChange={reeg}/>
        <input type="password" placeholder="Password" id="lpsw" name="lpsw" onChange={Passs}/>
        <button type="submit" onClick={han}>
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
