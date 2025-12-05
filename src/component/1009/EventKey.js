export default function EventKey() {
  const handleKey = (e) => {
    // MacでもWindowsでも使えるように metaKey または ctrlKey を考慮
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault(); // デフォルト動作を無効化（重要）
      alert("名前は２０文字以上で入力してください");
    }
  };

  return (
    <form action="">
      <label>
        名前:
        <input type="text" size="20" onKeyDown={handleKey} />
      </label>
    </form>
  );
}
