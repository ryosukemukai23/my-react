import {Link} from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>ToDoアプリへようこそ！</h1>
      <p>下のリンクからToDoリストにアクセスしてください。</p>
      <Link to="/todos">ToDo一覧を見る</Link>
    </div>
  );
};

export default HomePage;
