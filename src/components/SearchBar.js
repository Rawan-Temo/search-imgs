import React, { useState } from "react";
function SearchBar({ onSubmit }) {
  const [text, setText] = useState("");

  const Events = (e) => {
    setText(e.target.value);

    console.log(text);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    // do something with text here
    onSubmit(text);
  };

  return (
    <>
      <div className="ui segment">
        <form className=" ui form" onSubmit={formSubmit}>
          <div className="field">
            <label style={{ fontSize: "2em", margin: "10px" }}>SearchBar  </label>
            <input
              type="search"
              placeholder="search"
              onChange={Events}
              value={text}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
// ZNmylukhFPcM9qJDrcjk3gRHtydyUO1txlZhseKN1h8
