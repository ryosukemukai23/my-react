import {useLocation} from "react-router-dom";

export default function ArticleStatePage() {
  const {state: id = "4"} = useLocation();

  return (
    <div>
      <h2>Articleページです。</h2>
      <p>id: {id}</p>
    </div>
  );
}
