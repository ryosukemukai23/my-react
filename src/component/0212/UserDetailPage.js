import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const UserDetailPage = () => {
  const {id} = useParams(); // URLパラメータから id を取得
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p>読み込み中...</p>;
  }

  if (error) {
    return <p style={{color: "red"}}>エラー: {error}</p>;
  }

  if (!user) {
    return <p>ユーザーが見つかりません。</p>;
  }

  return (
    <div>
      <h1>{user.name} の詳細</h1>
      <ul>
        <li>ユーザー名: {user.username}</li>
        <li>メール: {user.email}</li>
        <li>電話番号: {user.phone}</li>
        <li>ウェブサイト: {user.website}</li>
        <li>会社: {user.company?.name}</li>
        <li>
          住所: {user.address?.city}, {user.address?.street}
        </li>
      </ul>
    </div>
  );
};

export default UserDetailPage;
