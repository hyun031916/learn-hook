// useState 함수 불러오기
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Counter(props) {
    // 함수형 컴포넌트에서 상태를 저장하기 위해서 useState 훅 사용
    // count : 상태값
    // setCount : count 값을 조절하기 위한 세터 함수
    const [count, setCount] = useState(0)
    console.log('from Counter\ncount : ', count)

    // render 함수 내부에서 상태값(count) 활용
    return (
        <div>
            <p>You clicked {count} times</p>
            {/*
                세터 함수를 이용하여 상태값 조절 가능
                (상태값이 변경되면 Counter 함수가 재실행되어 변경된 count 값을 이용하여 re-render 함)
            */}
            <button onClick={() => setCount(count + 1)}>Click me</button>
            {/*
                0으로 변경 후 한 번 더 누르면 다시 0으로 변경하기 위해서 함수가 호출됨 (2번 호출되는 것은 정상 작동 시나리오)
                단, 그 이후부터는 Counter 함수를 호출하지 않음

                https://stackoverflow.com/questions/62324139/why-is-my-react-component-rendering-twice-on-initial-load
                https://andreasheissenberger.medium.com/react-components-render-twice-any-way-to-fix-this-91cf23961625
            */}
            <button onClick={() => setCount(0)}>Set 0</button>
        </div>
    );
}

ReactDOM.render(<Counter />, document.getElementById("root"))