import React, { JSX, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState, 증가, 감소, 맘대로증가 } from "./index";
import { Dispatch } from "redux";

let 박스: JSX.Element = <div>박스</div>;

function App() {
  const [user, setUser] = useState<string | number>("kim");
  const 꺼내온거 = useSelector((state: RootState) => state);
  const dispatch: Dispatch = useDispatch();

  return (
    <div className="App">
      <h4>안녕하십니까</h4>
      <Profile name="철수" age="20"></Profile>
      <div>{박스}</div>
      <button
        onClick={() => {
          dispatch(증가());
        }}
      >
        증가
      </button>
      {꺼내온거.counter.count}
      <button
        onClick={() => {
          dispatch(감소());
        }}
      >
        감소
      </button>
      <br />
    </div>
  );
}

function Profile(props: { name: string; age: string }): JSX.Element {
  return <div>{props.name}입니다.</div>;
}

export default App;
