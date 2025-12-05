import React, {useState} from "react";

export default function EventMouse({beforeSrc, afterSrc, alt}) {
  const [current, setCurrent] = useState(beforeSrc);

  const handleEnter = () => setCurrent(afterSrc);
  const handleLeave = () => setCurrent(beforeSrc);

  return (
    <img onMouseEnter={handleEnter} onMouseLeave={handleLeave} src={current} alt={alt} style={{cursor: "pointer"}} />
  );
}
