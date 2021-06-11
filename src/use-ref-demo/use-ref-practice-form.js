import React, { useState, useEffect, useRef } from "react"
import ReactDOM from "react-dom"

/*
    요구 사항
    1. 모든 input 요소에 ref 연결해주기
    2. 버튼 누르면 해당되는 input 요소에 focus() 메소드 호출해서 입력 가능 상태로 만들어주기
    3. Submit 버튼을 누르면 콘솔에 모든 input 요소의 값을 출력하도록 하기
    4. Reset 버튼을 누르면 모든 input 요소의 값을 ''로 초기화하기
*/

function Form() {
    const nameInputRef = useRef()
    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const handleSubmit = e => {
        e.preventDefault()  //원래 진행되는 이벤트를 막음
        console.log(nameInputRef.current.value,emailInputRef.current.value,passwordInputRef.current.value)
        // 3. Submit 버튼을 누르면 콘솔에 모든 input 요소의 값을 출력하도록 하기
    }

    const handleReset = () => {
        // 4. Reset 버튼을 누르면 모든 input 요소의 값을 ''로 초기화하기
        nameInputRef.current.value = ''
        emailInputRef.current.value = ''
        passwordInputRef.current.value = ''

        // nameInputRef
    }

    // 1. 모든 input 요소에 ref 연결해주기
    return (
        <>
            <label>
                Name:
                <input type="text" placeholder="name" ref={nameInputRef} />
            </label>
            <label>
                Email:
                <input type="text" placeholder="email" ref={emailInputRef}/>
            </label>
            <label>
                Password:
                <input type="password" placeholder="password" ref={passwordInputRef}/>
            </label>

            <hr />

            {/* 2. 버튼 누르면 해당되는 input 요소에 focus() 메소드 호출해서 입력 가능 상태로 만들어주기 */}
            <button onClick={()=>{
                nameInputRef.current.focus()
            }}>
                Focus Name Input
            </button>
            <button onClick={()=>{
                emailInputRef.current.focus()
            }}>
                Focus Email Input
            </button>
            <button onClick={()=>{
                passwordInputRef.current.focus()
            }}>
                Focus Password Input
            </button>

            <hr />

            <button type="submit" onClick={handleSubmit}>Submit</button>
            <button onClick={()=>{
                handleReset()
            }}>Reset</button>
        </>
    )
}

ReactDOM.render(<Form />, document.getElementById("root"));