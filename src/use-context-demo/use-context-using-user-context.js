import React, { useState, useEffect, useRef, useContext } from "react";
import ReactDOM from "react-dom";
// 사용할 Context 불러오기
import UserContext from "./contexts/UserContext";

const UserConsumeComponent = (props) => {
    // 간단히 useContext에 Context 객체를 전달하는 것만으로 값 접근 가능
    const user = useContext(UserContext)

    return (
        <div>
            <h1>UserConsumeComponent</h1>
            <p>id : { user.id }</p>
            <p>name : { user.name }</p>
        </div>
    )
}

const UserIdPrinter = (props) => {
    const user = useContext(UserContext)

    return (
        <div>
            <h1>User ID Printer</h1>
            <p>id : { user.id }</p>
        </div>
    )
}

const Nested = (props) => <>{props.children}</>
function App() {
    const globalUser = {
        name: "John",
        id: "john123"
    }

    // Provider로 감싸주는 것은 클래스 컴포넌트와 다르지 않음
    return (
        <UserContext.Provider value={globalUser}>
            <Nested>
                <Nested>
                    <UserConsumeComponent />
                    <Nested>
                        <UserIdPrinter />
                    </Nested>
                </Nested>
            </Nested>
        </UserContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));