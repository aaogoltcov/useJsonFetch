import './App.css';
import Response from "./components/Response";

const urlSuccess = "http://localhost:7070/data";
const urlMistake = "http://localhost:7070/error";
const urlLoading = "http://localhost:7070/loading";

function App() {
  return (
      <>
        <Response url={urlSuccess} interval={3000} initialData={{}} />
        <Response url={urlMistake} interval={4000} initialData={{}} />
        <Response url={urlLoading} interval={5000} initialData={{}} />
      </>
  );
}

export default App;
