import React, { useEffect, useState } from "react";
import "./userDetails.css";

const UserDetails = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [count, setCount] = useState();

  const getData = () => {
    fetch(`https://cointab-3e3x.onrender.com/page?page=${page}`)
      .then((res) => res.json())
      .then((res) => setData(() => res));
  };
  useEffect(() => {
    getData();
  }, [page]);
  useEffect(() => {
    fetch("https://cointab-3e3x.onrender.com/count")
      .then((res) => res.json())
      .then((res) => setCount(res.count));
  }, []);
  const handleback = () => {
    setPage((page) => page - 1);
  };

  const handlenext = () => {
    setPage((page) => page + 1);
  };

  const handleFilter = (e) => {
    let value = e.target.value;
      if (value == "all") {
          getData();
    }
    let newData = [...data].filter((ele) => {
      return ele.gender == value;
    });
    setData(() => newData);
  };

  const handleage = async (e) => {
    let value = e.target.value;
    console.log(value);
    if (value === "above") {
      let newData = [...data].filter((ele) => {
        return ele.dob.age > 45;
      });
      setData(() => newData);
    } else if (value === "below") {
      
      let newData = [...data].filter((ele) => {
        return ele.dob.age < 45;
      });
      setData(() => newData);
    } else {
      getData();
    }
  };
  return (
    <div className="wrapper">
      <div className="filter">
        {/* <h2>filter</h2> */}
        <select
          name="gender"
          className="button-50 button-53"
          onChange={(e) => handleFilter(e)}
          id=""
        >
          <option value="all">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select
          name="age"
          className="button-50 button-53"
          onChange={(e) => handleage(e)}
          id=""
        >
          <option value="">Age</option>
          <option value="above">Above 22</option>
          <option value="below">Below 22</option>
        </select>
      </div>

      <table class="rwd-table">
        <tbody>
          <tr>
            <th>User Name</th>
            <th>Profile Pic</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Age</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Phone</th>
          </tr>

          {data.map((ele) => (
            <tr key={ele._id}>
              <td data-th="Supplier Name">
                <img src={ele.picture.medium} alt="" />
              </td>
              <td data-th="Supplier Code">
                <pre>
                  {ele.name.title}. {ele.name.first} {ele.name.last}{" "}
                </pre>
              </td>

              <td data-th="Invoice Number">{ele.gender}</td>
              <td data-th="Invoice Date">{ele.email}</td>
              <td data-th="Due Date">{ele.dob.age}</td>
              <td data-th="Net Amount">{ele.location.city}</td>
              <td data-th="Net Amount">{ele.location.state}</td>
              <td data-th="Net Amount">{ele.location.country}</td>
              <td data-th="Net Amount">{ele.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className="button-50" onClick={handleback}>
          Back -
        </button>
        <button
          className="button-50 button-52"
          disabled={page == count / 10}
          onClick={handlenext}
        >
          Next +
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
