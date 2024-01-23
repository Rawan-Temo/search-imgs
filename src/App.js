import React, { useState } from "react";
import axios from "axios";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
function App() {
  const [images, setImage] = useState([]);

  const SerachSubmit = async (text) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: text },
      headers: {
        Authorization: "Client-ID ZNmylukhFPcM9qJDrcjk3gRHtydyUO1txlZhseKN1h8",
      },
    });
    console.log(response.data);
    setImage(response.data.results);
  };
  return (
    <>
      <div className="ui container  " style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={SerachSubmit} />
        <h2>تم العثور : {images.length} صور</h2>
        <ImageList images={images} />
      </div>
    </>
  );
}

export default App;
