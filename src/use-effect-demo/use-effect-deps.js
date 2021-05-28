import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom"

function UseEffectDepsDemo(props) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        console.log("의존 배열이 없으므로 render 이후 항상 실행")
    })

    //componentDidMount와 같은 동작을 한다.
    useEffect(() => {
        console.log("전달한 의존 배열이 빈 배열이므로 첫 render 이후 한 번만 실행")
    }, [])

    useEffect(() => {
        console.log("name 값이 변경된 경우 실행")
    }, [name])

    useEffect(() => {
        console.log("password 값이 변경된 경우 실행")
    }, [password])

    // 전달값의 타입이 배열이므로 여러 값을 전달 가능하며, 이 경우 전달한 값들 중 "하나라도 변경될 경우 콜백 함수가 실행"됨
    useEffect(() => {
        console.log("name, password 값이 변경된 경우 실행")
    }, [name, password])

    console.log("render")
    return (
        <div>
            <label>이름</label>
            <input type="text" value={name} onChange={(e) => {
                setName(e.target.value)
            }} />
            <br />
            <label>패스워드</label>
            <input type="password" value={password} onChange={(e) => {
                setPassword(e.target.value)
            }} />
        </div>
    )
}

ReactDOM.render(<UseEffectDepsDemo />, document.getElementById("root"))