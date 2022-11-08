import { useState, useEffect } from "react";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

const Tokens = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // query data from your API here
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/get-token");
      const data = await response.json();
      setData(data);
    } catch (error) {}
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Tokens Table!</h1>
        <hr />
        {JSON.stringify(data, null, 4)}
        {/* your table implementation goes here */}
      </div>
    </Layout>
  );
};

export default Tokens;
