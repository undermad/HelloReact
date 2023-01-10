import logo from './logo.svg';
import './App.css';
import TodoTable from "./components/TodoTable";

function App() {
    const todos = [
        {rowNumber: 1, rowDescription: `Be Awesome`, rowAssigned: `User One`},
        {rowNumber: 2, rowDescription: `Be Great Person`, rowAssigned: `User Two`},
        {rowNumber: 3, rowDescription: `Love Your self`, rowAssigned: `User Three`},
        {rowNumber: 4, rowDescription: `Do something amazing`, rowAssigned: `User Three`}

    ];


    return (
        <div className={`mt-5 container`}>
            <div className={`card`}>
                <div className={`card-header`}>
                    Your Todo's
                </div>
                <div className={`card-body`}>
                    <TodoTable todos={todos}/>
                </div>
            </div>
        </div>
    );
}

export default App;
