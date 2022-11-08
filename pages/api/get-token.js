import { promises as fs } from "fs";
import path from "path";

export default async (req, res) => {
  /**
   * your implementation goes here
   */
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(
    jsonDirectory + "/collection-payload.json",
    "utf8",
  );
  res.status(200).json(fileContents);
};
