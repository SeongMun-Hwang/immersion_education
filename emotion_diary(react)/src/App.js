import {useRef, useState} from "react";
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList=[
  {
    id:1,
    author:"hgsm",
    content:"hi",
    emotion:"5",
    created_date:new Date().getTime(),
  },  {
    id:2,
    author:"aaa",
    content:"hi",
    emotion:"5",
    created_date:new Date().getTime(),
  },  {
    id:3,
    author:"bbb",
    content:"hi",
    emotion:"5",
    created_date:new Date().getTime(),
  },  {
    id:4,
    author:"ccc",
    content:"hi",
    emotion:"5",
    created_date:new Date().getTime(),
  },  {
    id:5,
    author:"ddd",
    content:"hi",
    emotion:"5",
    created_date:new Date().getTime(),
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEditor></DiaryEditor>
      <DiaryList diaryList={dummyList}></DiaryList>
    </div>
  );
}

export default App;
