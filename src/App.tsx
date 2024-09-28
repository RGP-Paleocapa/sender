import './App.css';

function App() {
  console.log('Base URL in App:', import.meta.env.VITE_BASE_URL); // Check the value in the App
  return (
    <>
      <p>Test done: {import.meta.env.VITE_BASE_URL}</p>
    </>
  );
}

export default App;
