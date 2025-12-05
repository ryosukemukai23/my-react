import {Form,UseActionData} from "react-router-dom";

export default function ArticleFormPage() {
return(
  <Form method="POST" noValidate>
    <div>
      <div>
        <label htmlFor="title">タイトル:</label>
      </div>
      <div>
        <input type="text" id="title" name="title" size="20" />
      </div>
    </div>
    <div>
      <div>
        <label htmlFor="author">著者:</label>
      </div>
      <div>
        <input type="text" id="author" name="author" size="20" />
      </div>
    </div>
    <div>
      <div>
        <label htmlFor="content">内容:</label>
      </div>
      <div>
        <textarea name="content" id="content" cols="30" rows="10"></textarea>
      </div>
    </div>
    <div>
      <button type="submit">登録</button>
    </div>
  </Form>
)
}