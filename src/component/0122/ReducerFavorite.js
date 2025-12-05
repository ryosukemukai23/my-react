import {useReducer} from "react";
import "./ReducerFavorite.css";

function FavoriteList() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "setCurrentItem":
          return {
            ...state,
            currentItem: {...state.currentItem, text: action.inputVal},
          };

        case "addFavorite":
          if (state.currentItem.text === "") {
            return state; // 空文字なら追加しない
          }
          return {
            ...state,
            favorites: [...state.favorites, state.currentItem],
            currentItem: {id: state.currentItem.id + 1, text: ""},
          };

        case "removeFavorite":
          return {
            ...state,
            favorites: state.favorites.filter((item) => item.id !== action.id),
          };

        default:
          return state;
      }
    },
    {
      currentItem: {id: 1, text: ""},
      favorites: [],
    }
  );

  return (
    <div className="favorite-list">
      <h2>お気に入りリスト</h2>
      <input
        type="text"
        value={state.currentItem.text}
        onChange={(e) => dispatch({type: "setCurrentItem", inputVal: e.target.value})}
      />
      <button onClick={() => dispatch({type: "addFavorite"})}>追加</button>

      <ul>
        {state.favorites.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => dispatch({type: "removeFavorite", id: item.id})}>削除</button>
          </li>
        ))}
      </ul>
      <p>お気に入りの数: {state.favorites.length}</p>
    </div>
  );
}

export default FavoriteList;
