import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

/*
    요구 사항
    1. 10초 동안 얼마나 클릭을 많이 했는지를 알려주는 컴포넌트 작성
    2. 시간이 0이 되면 버튼을 보이지 않도록 제거해야 함
*/

// 1. 10초 동안 얼마나 클릭을 많이 했는지를 알려주는 컴포넌트 작성
function CounterGame () {
    // 클릭 횟수 저장 state
    const [count, setCount] = useState(0)
    // 남은 시간 저장 state
    const [timeLeft, setTimeLeft] = useState(10)
    // setInterval 함수의 반환값인 타이머 id를 저장할 ref
    const id = useRef(null)

    // 타이머 취소 함수
    const clear = () => window.clearInterval(id.current)

    useEffect(() => {
        // 마운트 시에 타이머 걸고 1초마다 타이머 내부에서 time 변경 작업 진행하도록 하기
        id.current = setInterval(()=>setTimeLeft(timeLeft => timeLeft-1), 1000);
        // 적절한 반환값을 생각해보고 반환해주도록 하기
        // (힌트 : 언마운트 시점에 해줘야 할 작업은?)
        // return () => clearInterval(id.current);
        return clear
    },[])
    useEffect(() => {
        // timeLeft의 값을 확인하여 0이면 타이머 취소 작업 진행
        if(timeLeft ===0 ){
            clear()
        }
    }, [timeLeft])

    return (
        <div className="App">
            <h1>{count}</h1>
            <h2>Time left: {timeLeft} seconds</h2>
            {/* 2. 시간이 0이 되면 버튼을 보이지 않도록 제거해야 함 */}
            {
                (timeLeft === 0 ? null :
                    <button onClick={() => setCount((c) => c + 1)}>+</button>)
            }
        </div>
    );
}

ReactDOM.render(<CounterGame />, document.getElementById("root"))