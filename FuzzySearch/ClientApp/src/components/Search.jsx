import { React, useState } from "react";

const Search = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  const HandleClick = () => {
    handleSearch(value);
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-6">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Seach Fuzzy Names..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="col-1">
          <button
            onClick={HandleClick}
            type="button"
            className="btn btn-info btn-lg"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
