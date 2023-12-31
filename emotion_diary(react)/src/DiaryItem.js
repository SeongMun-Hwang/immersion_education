import React, { useCallback, useContext, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";
const DiaryItem=({id, author, content, emotion, created_date})=>{
    const {onEdit,onDelete}=useContext(DiaryDispatchContext);
    const handleDelete=()=>{
        if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)){
            onDelete(id);
        }
    }
    const handleQuitEdit=()=>{
        setIsEdit(false);
        setLocalContent(content);
    }

    const editInput =useRef(); //textarea 받기위함
    const handleEdit=()=>{
        if(localContent.length < 5){
            editInput.current.focus();
            return;
        }
        if(window.confirm("정말 일기를 수정하시겠습니까?")){
            onEdit(id,localContent);
            toggleIsEdit();
        }
    }

    const [isEdit,setIsEdit]=useState(false);
    const toggleIsEdit=()=>setIsEdit(!isEdit);
    const [localContent,setLocalContent]=useState(content);

    return (<div className="DiaryItem">
       <div className="info">
         <span>작성자 : {author} | 감정점수 ㅣ {emotion} </span>
         <br></br>
         <span className="date">{new Date(created_date).toLocaleDateString()}</span>
       </div>
       <div className="content">
        {isEdit?
        (<><textarea ref={editInput} value={localContent} onChange={(e)=>{
            setLocalContent(e.target.value)
        }}></textarea></>):
        (<>{content}</>)}
       </div>
       {isEdit?
       (<><button onClick={handleQuitEdit}>수정 취소</button>
       <button onClick={handleEdit}>수정하기</button></>)
       :
       (<><button onClick={handleDelete}>삭제하기</button>
       <button onClick={toggleIsEdit}>수정하기</button></>)}
       
    </div>
    );
};

export default React.memo(DiaryItem);