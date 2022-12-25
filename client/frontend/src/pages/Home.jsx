import React, { useState } from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  const [sendbtn, setsendbtn] = useState(false);
  const [deletebtn, setdeletebtn] = useState(false);

  const getData = async () => {
    const res = await fetch("https://randomuser.me/api/?results=50");
    const results = await res.json();
    setData(() => results.results);
  };

  const sendData = async () => {
    if (sendbtn === true) {
      return alert("already some data fetch is going on");
    }

    getData();
    let newdata = [...data];

    newdata.forEach((ele) => {
      ele["id1"] = ele["id"];
      delete ele["id"];
    });

    sendToServer(newdata);
  };

  const sendToServer = async (newdata) => {
    try {
      setsendbtn(() => true);
      await fetch("https://cointab-3e3x.onrender.com/sendData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newdata),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setsendbtn(() => false);
      }, [1000]);
    }
  };

  const deleteData = async () => {
    if (deletebtn === true) {
      return alert("already some data delete is going on");
    }
    try {
      setdeletebtn(() => true);

      await fetch("https://cointab-3e3x.onrender.com/sendData", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setdeletebtn(() => false);
      }, 1000);
    }
  };
  return (
    <div className="App">
      <div className="btnwrapper">
        <button className="button-50" onClick={sendData}>
          Get Data
        </button>
        <button className=" button-50 button-51" onClick={deleteData}>
          Delete Data
        </button>
        <Link to="/UserDetails">
          <button className=" button-50 button-52">User Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
