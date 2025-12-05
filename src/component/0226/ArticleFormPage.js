import {Form, useActionData} from "react-router-dom";

export default function ArticleFormPage() {
  const data = useActionData();
  const errors = data?.errors; // ←ここで配列を取り出す

  return (
    <Form method="POST" noValidate>
      <ul>
        {errors?.map((msg) => (
          <li key={msg}>{msg}</li>
        ))}
      </ul>
      <div>
        <label htmlFor="title">タイトル:</label>
        <input type="text" id="title" name="title" size="20" />
      </div>
      <div>
        <label htmlFor="author">著者:</label>
        <input type="text" id="author" name="author" size="20" />
      </div>
      <div>
        <label htmlFor="content">内容:</label>
        <textarea name="content" id="content" cols="30" rows="10"></textarea>
      </div>
      <button type="submit">登録</button>
    </Form>
  );
}
