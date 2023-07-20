import { useContext } from "react";
import DiaryItem from "./DiaryItem";
import { DiaryStateContext, DiaryDispatchContext } from "./App";

const DiaryList=()=>{
    //context 사용
    const diaryList=useContext(DiaryStateContext);
    const {onEdit,onDelete}=useContext(DiaryDispatchContext);
    return <div className="DiaryList">
        <h2>일기 목록</h2>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
        <div>
            {diaryList.map((it)=>(
            <DiaryItem key={it.id} {...it} onDelete={onDelete} onEdit={onEdit}></DiaryItem>
            ))}
        </div>
    </div>
}

DiaryList.defaultProps={
    diaryList: [],
};

export default DiaryList;