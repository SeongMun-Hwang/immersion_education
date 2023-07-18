import {useRef, useState} from "react";
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

function App() {
  const [data,setData]=useState([]);
  const dataId=useRef(1);

  const onCreate=(author,content,emotion)=>{
    const created_date=new Date().getTime();
    const newItem={
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    }
    dataId.current+=1;
    setData([newItem, ...data]);
  };

  const onDelete=(targetId)=>{
    console.log(`${targetId}번째 일기가 삭제되었습니다.`);
    const newDiaryList=data.filter((it)=>it.id!==targetId);
    setData(newDiaryList);
  }

  const onEdit=(targetId,newContent)=>{
    setData(
      data.map((it)=>it.id===targetId?{...it, content:newContent}: it)
    );
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <DiaryList onEdit={onEdit} onDelete={onDelete} diaryList={data}></DiaryList>
    </div>
  );
}

export default App;
