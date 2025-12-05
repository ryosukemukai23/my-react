import {useEffect, useRef} from "react";
import MytextBox from "./MyTextBox";

export default function HookRefForward() {
  const text = useRef(null);
  useEffect(() => {
    text.current?.focus();
  }, []);
  return <MytextBox label="名前" ref={text} />;
}
