import DeleteIcon from "@mui/icons-material/Delete";
import * as Forms from "@mui/material";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {useState} from "react";
import "./TodoMuiPeriod.css";

let maxId = 0;

export default function TodoMuiPeriod() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [deadline, setDeadline] = useState(null);

  const handleChangeText = (e) => setTask(e.target.value);

  const handleAddTask = () => {
    if (task !== "") {
      setTasks([...tasks, {id: ++maxId, title: task, deadline}]);
      setTask("");
      setDeadline(null);
    }
  };

  const handleDeleteTask = (e) => {
    setTasks(tasks.filter((item) => item.id !== Number(e.currentTarget.dataset.id)));
  };

  return (
    <div className="wrapper">
      <h1>TODOリスト</h1>

      {/* タスク入力 */}
      <Forms.TextField
        label="タスク"
        value={task}
        onChange={handleChangeText}
        variant="outlined"
        style={{marginRight: "10px"}}
      />

      {/* 期限入力 */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="期限"
          value={deadline}
          onChange={(newValue) => setDeadline(newValue)}
          renderInput={(params) => <Forms.TextField {...params} />}
        />
      </LocalizationProvider>

      {/* 追加ボタン */}
      <Forms.Button variant="contained" style={{marginLeft: "10px", marginTop: "10px"}} onClick={handleAddTask}>
        追加
      </Forms.Button>

      {/* TODOリスト表示 */}
      <Forms.List style={{width: 400, margin: "20px auto 0", background: "#f5f5f5"}}>
        {tasks.map((task) => (
          <Forms.ListItem key={task.id} divider>
            <Forms.ListItemText primary={task.title} />

            {/* 右端表示：期限 + 削除ボタン */}
            <Forms.ListItemSecondaryAction>
              {task.deadline && (
                <span className="date" style={{marginRight: "10px"}}>
                  期限: {task.deadline.format("YYYY-MM-DD")}
                </span>
              )}

              <Forms.IconButton edge="end" aria-label="delete" data-id={task.id} onClick={handleDeleteTask}>
                <DeleteIcon />
              </Forms.IconButton>
            </Forms.ListItemSecondaryAction>
          </Forms.ListItem>
        ))}
      </Forms.List>
    </div>
  );
}
