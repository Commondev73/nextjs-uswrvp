import { useState, useEffect } from "react";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

const Tokens = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // query data from your API here
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Tokens Table!</h1>
        <hr />

        {/* your table implementation goes here */}
      </div>
    </Layout>
  );
};

export default Tokens;
