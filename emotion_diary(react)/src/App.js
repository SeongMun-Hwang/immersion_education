import React, {useEffect, useRef, useState} from "react";
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// https://jsonplaceholder.typicode.com/comments

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

  //api practice
  const getData=async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/comments"
    ).then((res)=>res.json());

    const initData=res.slice(0,20).map((it)=>{
      return{
        author : it.email,
        content: it.body,
        emotion : Math.floor(Math.random()*5)+1, //floor=소수점 버림
        created_date : new Date().getTime(),
        id : dataId.current++
      }
    })
    setData(initData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}></DiaryEditor>
      <DiaryList onEdit={onEdit} onDelete={onDelete} diaryList={data}></DiaryList>
    </div>
  );
}

export default App;
