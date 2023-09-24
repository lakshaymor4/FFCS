import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
const Singnup = () => {
  const [sho, setSho] = useState(0);
  const [show3, setShow3] = useState(0);
  const [show2, setShow2] = useState(0);
  const [sho2, setSho2] = useState(0);
  const [msssg, setMssg] = useState("");
  const [show, setShow] = useState(0);
  const [msg, setMsg] = useState("");

  // const [namee, setName] = useState("");
  // const [regno, setregno] = useState("");
  // const [emaill, setemaill] = useState("");
  // const [password, setpassword] = useState("");
  // const [onetime, setOnetime] = useState(0);

  const ggh = () => {
    if (
      document.querySelector("#emaill").value !=
      document.querySelector("#email").value
    ) {
      document.querySelector(".hill").style.display = "block";
    } else {
      document.querySelector(".hill").style.display = "none";
    }
  };

  const [pas, setPas] = useState("");
  const ng = () => {
    if (
      document.querySelector("#cnfp").value !=
      document.querySelector("#pass").value
    ) {
      document.querySelector(".hifp").style.display = "block";
    } else {
      document.querySelector(".hifp").style.display = "none";
    }
  };

  const handle = (e) => {
    e.preventDefault();
    const arr = {
      namee: document.querySelector("#namee").value,
      regno: document.querySelector("#regno").value,
      email: document.querySelector("#email").value,
      emaill: document.querySelector("#emaill").value,

      pass: document.querySelector("#pass").value,
      cnfp: document.querySelector("#cnfp").value,
    };
    console.log(arr);

    for (const [keys, value] of Object.entries(arr)) {
      console.log(keys, value.length);
      if (value.length == 0) {
        document.getElementById(keys).focus();
        break;
      }
    }

    if (
      document.querySelector("#namee").value != "" &&
      document.querySelector("#regno").value != "" &&
      document.querySelector("#email").value != "" &&
      document.querySelector("#pass").value != "" &&
      document.querySelector("#pass").value.length >= 8
    ) {
      console.log("inn");
      if (
        document.querySelector("#email").value ==
          document.querySelector("#emaill").value &&
        document.querySelector("#pass").value ==
          document.querySelector("#cnfp").value
      ) {
        console.log("in");
        setShow(1);
        const conffig = {
          method: "post",
          url: "http://localhost:3000/otp",
          data: {
            namee: document.querySelector("#namee").value,
            regno: document.querySelector("#regno").value,
            emaill: document.querySelector("#email").value,

            password: document.querySelector("#pass").value,
          },
        };
        axios(conffig)
          .then((result) => setMssg(result.data.mssg))
          .catch((error) => setMssg(error.data.mssg));
      }
    }
  };

  const hand = (e) => {
    e.preventDefault();
    // setOnetime(document.querySelector("#otpp").value);
    const config = {
      method: "post",
      url: "http://localhost:3000/validate",
      data: {
        namee: document.querySelector("#namee").value,
        regno: document.querySelector("#regno").value,
        emaill: document.querySelector("#email").value,
        pass: document.querySelector("#pass").value,
        otpp: document.querySelector("#otpp").value,
      },
    };
    axios(config)
      .then((result) => setMssg(result.data.mssg))
      .catch((error) => setMssg(error.data.mssg));
    if (msssg == "Success") {
      setSho(1);
    } else {
      setSho(0);
    }
  };
  const hfr = () => {
    if (document.querySelector("#email").value.match(/(@.+)$/)) {
      setShow2(1);
      document.querySelector(".ema").style.display = "none";
    } else {
      setShow(0);
      document.querySelector(".ema").style.display = "block";
    }
  };
  const hfg = () => {
    if (document.querySelector("#pass").value.length >= 8) {
      setShow3(1);
      document.querySelector(".pas").style.display = "none";
    } else {
      setShow3(0);
      document.querySelector(".pas").style.display = "block";
    }
  };
  return (
    <div className="top">
      <form action="">
        <span className="fc">
          <input type="text" id="namee" name="namee" placeholder="Name" />

          <input type="text" id="regno" name="regno" placeholder="Reg No." />
        </span>

        <div className="email">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={hfr}
            />
            <p className="hide ema"> Please Enter your Email correctly</p>
          </div>
          <div>
            <input
              type="email"
              id="emaill"
              placeholder="Confirm Email"
              onChange={ggh}
            />
            <p className="hide hill">Not matching with Email</p>
          </div>
        </div>
        <div className="pass">
          <div>
            <input
              type="password"
              id="pass"
              name="pass"
              placeholder="Password"
              onChange={hfg}
            />
            <p className="hide pas">Please Enter password Correctly</p>
          </div>

          <div>
            <input
              type="password"
              id="cnfp"
              placeholder="Confirm Password"
              onChange={ng}
            />
            <p className="hifp hide">Not matching with Password</p>
          </div>
        </div>

        <button type="submit" onClick={handle}>
          Submit
        </button>
        {!show ? null : (
          <div className="otp">
            <input type="number" id="otpp" name="otpp" />

            <p>
              Please Enter the otp sent to
              {document.querySelector("#email").value}
            </p>
            <div>
              <button type="submit" id="sub2" onClick={hand}>
                Submit
              </button>
            </div>
          </div>
        )}

        <div className="ott">{msssg}</div>
        {!sho ? console.log("nhi hua") : <a href="/login">Click me</a>}
      </form>
    </div>
  );
};
export default Singnup;
