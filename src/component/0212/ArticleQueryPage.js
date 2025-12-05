import {useSearchParams} from "react-router-dom";

export default function ArticleQueryPage() {
  const [params] = useSearchParams({id: "3"});
  return(
    <div>
      <h2>Articleページです。</h2>
      <p>id: {params.get("id")}</p>
    </div>
  )
}
