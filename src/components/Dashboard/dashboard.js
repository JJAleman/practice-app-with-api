import React, { useState, useEffect } from "react";
import { getUser, removeUserSession, setUserSession, getToken } from "../../utils/common.js";
import Axios from "axios";

function Dashboard(props) {
  const user = getUser();
  const token = getToken();
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    Axios.get("https://bw-pt-co-make5.herokuapp.com/api/issues/").then(res => {
    setUserSession(token);
    setIssues(res);
    });
  });

  const fetchIssues = e => {
    e.preventDefault();
    setIssues([]);
  };

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <div>
      Welcome {user.email}!<br />
      <br />
      Here is a list of issues!!!!
      <div className="jokes">
        <button onClick={fetchIssues}>Get Issues</button>
        {issues.map(issue => (
          <p>{issue}</p>
        ))}
      </div>
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;
