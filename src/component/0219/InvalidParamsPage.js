import {useRouteError} from "react-router-dom";

export default function InvalidParamsPage() {
  const error = useRouteError();
  return <p style={{color: "red"}}>{error.message}</p>;
}
