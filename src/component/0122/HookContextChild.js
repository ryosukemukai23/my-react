import {useContext} from "react";
import {MyAppContext} from "./HookContext";

export function HookContextChild() {
  const {title, lang} = useContext(MyAppContext);

  return (
    <div id="c_child_grand">
      {title} ({lang})
    </div>
  );
}
