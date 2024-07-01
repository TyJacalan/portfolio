import React from "react";

const fileTypes = [
  ".rb",
  ".html.erb",
  ".yaml",
  ".js",
  ".css",
  ".html",
  ".js",
  ".jsx",
];

const DailyTechnologies = () => {
  return (
    <ul className="flex flex-row flex-wrap gap-2">
      {fileTypes.map((type, index) => (
        <li
          key={index}
          className="px-2 py-1 rounded-md bg-secondary text-accent text-sm"
        >
          {type}
        </li>
      ))}
    </ul>
  );
};

export default DailyTechnologies;
