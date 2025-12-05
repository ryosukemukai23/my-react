import {Link, useLoaderData} from "react-router-dom";

export default function UserDetailPage() {
  const user = useLoaderData();

  return (
    <div>
      <h1>ユーザー詳細</h1>
      <p>id: {user.id}</p>
      <p>name: {user.name}</p>
      <p>email: {user.email}</p>
      <Link to={`/users/${user.id}/edit`}>編集</Link>
    </div>
  );
}
