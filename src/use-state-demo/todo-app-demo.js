import React from "react";
import ReactDOM from "react-dom";

// 임시 key 만들 함수
function generateId () {
    return '_' + Math.random().toString(36).substr(2, 9);
}
function TodoItem({toggleTodo, removeTodo, text, id, completed}){
    return (
        <>
            <span onClick={()=>toggleTodo(id)}>{completed?<del>{text}</del>:text}</span>
            <button onClick={()=>removeTodo(id)}>X</button>
        </>
    )
}
function TodoApp () {
    // 할 일 목록을 저장할 상태 추가 (useState 함수 import 안했으면 React.useState 접근 가능)
    const [todos, setTodos] = React.useState([])
    // 제어 컴포넌트로 만들기 위해서 input 값을 저장할 상태 추가
    const [input, setInput] = React.useState('')

    const handleSubmit = () => {
        setTodos(todos => todos.concat({
            text: input,
            completed: false,
            id: generateId()
        }))
        setInput('')
    }

    // 이전 상태에 기반하여 갱신 작업을 해야 하므로 useState로 전달받은 세터 함수로 함수를 전달함
    const toggleTodo = id => setTodos(todos => {
        return todos.map(t => {
            if(t.id === id) {
                return { ...t, completed: !t.completed }
            } else {
                return t
            }
        })
    })

    const removeTodo = id => setTodos(todos => todos.filter((t) => t.id !== id))

    return (
        <div>
            <input type='text' value={input} placeholder='할 일 입력'
                   onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>

            <ul>
                {todos.map(({ text, id, completed }) => (
                    <li key={id}>
                        <span onClick={() => toggleTodo(id)}>
                            {completed ? <del>{text}</del> : text}
                        </span>
                        <button onClick={() => removeTodo(id)}>X</button>

                    </li>
                ))}
            </ul>
        </div>
    )
}

ReactDOM.render(<TodoApp />, document.getElementById("root"))