import React, { useState, useEffect } from "react";
import { getUser, removeUserSession } from "../../utils/common.js";
import Axios from "axios";

function Dashboard(props) {
  const user = getUser();
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3300/api/jokes").then(res => {
      setJokes(res);
    });
  });

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <div>
      Welcome {user.name}!<br />
      <br />
      Here are your dad jokes!!!!
      <div className="jokes">
          {jokes.map()}
      </div>
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;
