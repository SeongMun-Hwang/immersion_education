import React, { useEffect, useState } from "react";

const CounterA=React.memo(({count})=>{
    useEffect(()=>{
        console.log(`counterA update by ${count}`)
    })
    return <div>{count}</div>
})
const CounterB=({obj})=>{
    useEffect(()=>{
        console.log(`counterB update by ${obj.count}`)
    })
    return <div>{obj.count}</div>
}

const areEqual=(prevProps,nextProps)=>{
    if(prevProps.obj.count===nextProps.obj.count){
        return true;
    }
    return false;
}

const MemoizedCounterB = React.memo(CounterB,areEqual);

const OptimizeTest=()=>{
    const [count,setCount]=useState(1);
    const [obj,setObj]=useState({
        count: 1,
    })
    return <div  style={{padding:50}}>
        <div>
        <h2>counter A</h2>
        <CounterA count={count}></CounterA>
        <button onClick={()=>setCount(count)}>A button</button>
        </div>     
        <div>
        <h2>counter B</h2>
        <MemoizedCounterB obj={obj}></MemoizedCounterB>
        <button onClick={()=>setObj({count: obj.count})}>B button</button>
        </div>
    </div>
}
export default OptimizeTest;