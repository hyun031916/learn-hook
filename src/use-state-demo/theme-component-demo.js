import React, { useState } from "react"
import ReactDOM from "react-dom"
import './styles.css'

// 화살표 함수로 함수 정의 가능
const Theme = (props) => {
    const [theme, setTheme] = useState('light')

    // 상태값 변경 함수 정의
    const toDark = () => setTheme('dark')
    const toLight = () => setTheme('light')

    return (
        <div className={`theme-div ${theme}`}>
            {/* onClick 속성을 통해 미리 정의한 상태 변경 함수 전달 */}
            {theme === "light"
                ? <button onClick={toDark}>🔦</button>
                : <button onClick={toLight}>💡</button>}
        </div>
    )
}

ReactDOM.render(<Theme />, document.getElementById("root"));
