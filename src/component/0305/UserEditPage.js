import {Form, Link, useLoaderData} from "react-router-dom";

export default function UserEditPage() {
  // loaderから受け取った1人分のユーザーデータ
  const user = useLoaderData();

  return (
    <div style={{padding: "20px"}}>
      <h1>ユーザー編集</h1>

      {/* action に自動で POST され、userEditAction が実行される */}
      <Form
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "400px",
        }}
      >
        <label>
          名前：
          <input type="text" name="name" defaultValue={user.name} required />
        </label>
        <label>
          メールアドレス：
          <input type="email" name="email" defaultValue={user.email} required />
        </label>

        <button type="submit">更新</button>
      </Form>

      <p style={{marginTop: "20px"}}>
        <Link to={`/users/${user.id}`}>← 詳細に戻る</Link>
      </p>
    </div>
  );
}
