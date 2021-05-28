import React, { useState } from "react"
import ReactDOM from "react-dom"

function App() {
    const [obj, setObj] = useState({
        count : 0,
        text: "Hello"
    })

    return (
        <div>
            <span>count : {obj.count}</span><br />
            <span>text : {obj.text}</span><br />
            <button onClick={() => {
                /*
                setObj(prev => {
                    // 이 경우 반환한 객체 값을 병합 없이 그대로 상태로 사용하므로, 기존의 text 값이 사라지게 됨! (콘솔창 확인)
                    console.log(prev)
                    return { count: prev.count + 1 }
                })
                */

                /*
                setObj(prev => {
                    // 이전의 값을 그대로 사용하도록 객체 반환
                    return { count: prev.count + 1, text: prev.text }
                })
                */

                setObj(prev => {
                    // 전개 연산자 이용해서 더 간단하게 (기존 객체 내용 + 새로운 내용)을 가진 객체 반환 가능
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
                    return { ...prev, count: prev.count + 1 }
                    // 단, 전개 연산자 적용 순서에 주의!
                    // return { count: prev.count + 1, ...prev }
                })
            }}>+1</button>
            <button onClick={() => {
                // Q) "Hello" 문자열에 계속 'o'를 붙이도록 이벤트 핸들러 정의하기
                /*setObj(prev => {
                    // 전개 연산자 이용해서 더 간단하게 (기존 객체 내용 + 새로운 내용)을 가진 객체 반환 가능
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
                    return { ...prev, text: prev.text+'o' }
                    // 단, 전개 연산자 적용 순서에 주의!
                    // return { count: prev.count + 1, ...prev }
                })*/
                setObj(state => ({...state, text:state.text+"o"}))
            }}>add 'o'</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));