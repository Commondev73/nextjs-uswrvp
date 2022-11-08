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
    // fix sever block
    const baseUrl = [
      "https://cloudflare-ipfs.com",
      "https://benjaminkor2.infura-ipfs.io",
    ];
    return `${sample(baseUrl)}/${url.replace("ipfs://", "ipfs/")}`;
    // return null;
  };

  // const setColorAttributes = (atr) => {
  //   let color = "";
  //   switch (atr) {
  //     case "Legendary":
  //       color = styles.attributeLegendary;
  //       break;
  //     case "Background":
  //       color = styles.attributeBackground;
  //       break;
  //     case "Body":
  //       color = styles.attributeBody;
  //       break;
  //     case "Mouth":
  //       color = styles.attributeMouth;
  //       break;
  //     case "Face":
  //       color = styles.attributeFace;
  //       break;
  //     case "Hand":
  //       color = styles.attributeHand;
  //       break;
  //     case "Trait Count":
  //       color = styles.attributeTraitCount;
  //       break;
  //     case "Head":
  //       color = styles.attributeHead;
  //       break;
  //     default:
  //       color = null;
  //       break;
  //   }
  //   return color;
  // };

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
                    {data.image && <img src={getImage(data.image)} />}
                    <span>#{data.id}</span>
                  </th>
                  <th className={styles.tokensRank}>
                    <span>{data.rank}</span>
                  </th>
                  <th className={styles.tokensBuyNow}>
                    <img src={imageBuyNow} />
                  </th>
                  <th className={styles.tokensLinks}>
                    <a href={data.links.opensea}>
                      <OpenseaIcon />
                    </a>
                    <a href={data.links.looksrare}>
                      <LooksRareIcon />
                    </a>
                    <a href={data.links.x2y2}>
                      <X2Y2Icon />
                    </a>
                    <a href={data.links.etherscan}>
                      <EtherScanIcon />
                    </a>
                  </th>
                  <th className={styles.tokensAttributes}>
                    <div key={i} className={styles.tokensAttributeLists}>
                      {!isEmpty(data.attributes) &&
                        data.attributes.map((atr, i) => (
                          <span>
                            {atr.trait_type}:{atr.value}
                          </span>
                        ))}
                    </div>
                  </th>
                </tr>
              ))}
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Tokens;
