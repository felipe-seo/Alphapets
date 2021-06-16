import Routes from "./routes";
import "./App.css";
import AppProvider from "./providers";
function App() {
  return (
    <AppProvider>
      <div className="App">
        <Routes />
      </div>
    </AppProvider>
  );
}

export default App;
