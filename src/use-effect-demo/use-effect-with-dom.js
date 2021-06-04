import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom"
import Toggler from "./Toggler"

function UseEffectWithDOM(props) {
    const [pos, setPos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const onMouseMove = e => {
            setPos({ x: e.offsetX, y: e.offsetY })
        }
        console.log('add mousemove listener')
        // 이벤트 리스너 등록 (여러번 등록할 필요가 없으므로 빈 배열이 전달된 useEffect 콜백 함수를 이용)
        window.addEventListener('mousemove', onMouseMove)

        return () => {
            console.log('remove mousemove listener')
            // 이벤트 리스너 해제 (여러번 해제할 필요가 없음, 빈 배열이 전달된 콜백 함수는 unmount 시점에 단 한 번만 실행)
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return <div>{pos.x},{pos.y}</div>
}

ReactDOM.render(<Toggler><UseEffectWithDOM /></Toggler>, document.getElementById("root"))