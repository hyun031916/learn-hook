import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom"

function UseEffectDemo(props) {
    const [state, setState] = useState("")

    // 의존 배열이 전달되지 않았으므로 매 render 시점 이후 전달할 콜백 함수가 실행됨
    useEffect(() => {
        console.log("useEffect")
    })

    console.log("render")
    return (
        <div>
            <input type="text" value={state}
                   onChange={(e) => {
                       setState(e.target.value)
                   }} />
        </div>
    )
}

function Counter() {
    const [count, setCount] = useState(0);

    // DOM 조작은 effect 콜백 함수에서 수행
    useEffect(() => {
        // 매 render 이후 제목 내용 바꾸기
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

ReactDOM.render((
    <div>
        <UseEffectDemo />
        <Counter />
    </div>
), document.getElementById("root"))