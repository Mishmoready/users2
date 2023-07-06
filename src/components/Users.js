import styles from "./Users.module.css";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/students")
      .then((response) => response.json())
      .then((response) => setUsers(response));
  }, []);

  return (
    <div className={styles.container}>
      {users.map(function (user) {
        return (
          <div className={styles.card}>
            <img src={user.profile_pic} alt="student" />
            <p>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
}
