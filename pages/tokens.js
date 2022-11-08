import { useState, useEffect } from "react";
import { isEmpty, sample, sortBy } from "lodash";
import { EtherScanIcon, LooksRareIcon, OpenseaIcon, X2Y2Icon } from "../svgs";
import Layout from "../components/layout";
import styles from "../styles/Tokens.module.scss";

const Tokens = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // query data from your API here
    if (isEmpty(data)) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/get-token");
      const data = await response.json();
      if (!isEmpty(data)) {
        const sortDataByRank = sortBy(data.data, ["rank"]);
        setData(sortDataByRank);
      }
    } catch (_) {}
  };
  const imageBuyNow =
    "https://media.discordapp.net/attachments/903497492878999602/1006808141389910046/buynow-button.png";

  const getImage = (url) => {
    // const baseUrl = ["https://cloudflare-ipfs.com"];
    // return `${sample(baseUrl)}/${url.replace("ipfs://", "ipfs/")}`;
    return null;
  };

  return (
    <Layout>
      <div className={styles.tokensContainer}>
        <h1>Tokens Table!</h1>
        <hr />
        {/* your table implementation goes here */}
        <div className={styles.tokensTable}>
          <table>
            <tr>
              <th>ID</th>
              <th>Rank(N)</th>
              <th>Buy</th>
              <th>Link</th>
              <th>Traits</th>
            </tr>
            {!isEmpty(data) &&
              data.map((data, i) => (
                <tr key={i}>
                  <th className={styles.tokensId}>
                    {data.image && (
                      <div>
                        <img src={getImage(data.image)} />
                      </div>
                    )}
                    <span>{data.id}</span>
                  </th>
                  <th className={styles.tokensRank}>
                    <span>{data.rank}</span>
                  </th>
                  <th className={styles.tokensBuyNow}>
                    <img src={imageBuyNow} />
                  </th>
                  <th className={styles.tokensLinks}>
                    <div>
                      <EtherScanIcon />
                    </div>
                  </th>
                  <th>Traits</th>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Tokens;
