import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./Searchbar.css";
export const Searchbar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    try {
      console.log("I'm inside");
      const response = await fetch("http://192.168.29.9:5000/search-results", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ input: value })
      });

      const json = await response.json();
      console.log(json['message']);
      const results = json.message.filter((item) => {
        return (
          value &&
          item &&
          item.name &&
          item.name.toLowerCase().includes(value)
        );
      });

      setResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="main-container">
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
    </div>
  );
};



