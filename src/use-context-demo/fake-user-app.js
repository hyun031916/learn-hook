import React, { useState, useContext, createContext } from "react"
import ReactDOM from "react-dom"

const LoginUserContext = createContext(null)

function LoginButton(props) {
    // 비구조화 할당시, loginUser 정보가 필요하지 않으면 생략 가능 (세터 함수만 받기)
    const { setLoginUser } = useContext(LoginUserContext)
    const [ fetching, setFetching ] = useState(false)

    const handleLogin = () => {
        setFetching(true)
        fetch('https://randomuser.me/api/', { headers: { 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .then(data => {
                const login = data.results[0].login

                setLoginUser({
                    picture: data.results[0].picture.large,
                    username: login.username,
                    email: data.results[0].email,
                    cell: data.results[0].cell,
                });
            })
    }

    return (
        fetching ?
            <button disabled>...</button> :
            <button onClick={handleLogin}>Login</button>
    )
}

function LogoutButton(props) {
    const {setLoginUser} = useContext(LoginUserContext)

    const handleLogout = () => {
        setLoginUser(null)
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

function UserInfo(props) {
    const { loginUser } = useContext(LoginUserContext)

    return (
        <div>
            <img src={loginUser.picture} style={{ borderRadius: '50%' }}/>
            <p>username: {loginUser.username}</p>
            <p>email: {loginUser.email}</p>
            <p>cell: {loginUser.cell}</p>
        </div>
    )
}

function App() {
    const [ loginUser, setLoginUser ] = useState(null)

    return (
        <LoginUserContext.Provider value={ { loginUser, setLoginUser } }>
            {
                loginUser === null ?
                    <div>
                        <h2>"방문자"님 환영합니다.</h2>
                        <LoginButton />
                    </div>
                    :
                    <div>
                        <h2>"{loginUser.username}"님 환영합니다.</h2>
                        <UserInfo />
                        <LogoutButton />
                    </div>
            }
        </LoginUserContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));