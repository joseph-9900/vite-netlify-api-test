import './App.css'

function App() {
    const value = 1 + parseInt(import.meta.env.VITE_TEST_NUMBER);

    return (
        <div className="App">
            <h1>Test App</h1>
            {/* VITE_TEST_NUMBER = 123 */}
            {value}
        </div>
    )
}

export default App
