import React, { useState, useRef, useEffect } from "react";

const ImageCard = ({ url, alt }) => {
  const [span, setSpan] = useState(0);

  const refimg = useRef();
  useEffect(() => {
    refimg.current.addEventListener("load", () => {
      let height = refimg.current.height;

      setSpan(Math.ceil(height / 10 + 1));
    });
  });

  return (
    <div style={{ gridRowEnd: `span ${span}` }}>
      <img ref={refimg} src={url} alt={alt} />
    </div>
  );
};
export default ImageCard;
