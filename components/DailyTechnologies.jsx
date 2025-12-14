import React from "react";
import Chip from "./Chip";

const fileTypes = [
  ".rb",
  ".html.erb",
  ".kotlin",
  ".yaml",
  ".js",
  ".css",
  ".html",
  ".js",
  ".jsx",
  ".sql"
];

const DailyTechnologies = () => {
  return (
    <ul className="flex flex-row flex-wrap gap-2 font-bitcount">
      {fileTypes.map((type, index) => (
        <li key={index}>
          <Chip>{type}</Chip>
        </li>
      ))}
    </ul>
  );
};

export default DailyTechnologies;
