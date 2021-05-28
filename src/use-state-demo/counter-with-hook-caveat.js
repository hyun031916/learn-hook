// useState 함수 불러오기
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Counter(props) {
    const [count, setCount] = useState(0);
    console.log('(from Counter) count : ', count)

    const brokenAdd5 = () => {
        for (let i = 0; i < 5; i++) {
            // 성능상의 이유로 세터 함수로 인한 변경 사항을 큐에 쌓고 한꺼번에 처리하므로, 매 setCount 호출시마다 Counter 함수 호출이 이루어지지는 않음
            // https://dev.to/adamklein/we-don-t-know-how-react-state-hook-works-1lp8
            console.log('(from brokenAdd5) count : ', count)
            setCount(count + 1)
        }
    }

    const normalAdd5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prev => {
                console.log('(from normalAdd5) prev : ', prev)
                return prev + 1
            })
        }
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={brokenAdd5}>Broken Add 5</button>
            <button onClick={normalAdd5}>Normal Add 5</button>
        </div>
    );
}

ReactDOM.render(<Counter />, document.getElementById("root"))