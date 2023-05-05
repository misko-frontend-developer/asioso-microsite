import { Route, Routes } from "react-router";
import { ListNews } from "./pages/ListNews";
import { SingleNews } from "./pages/SingleNews";
function App() {
  return (
    <Routes>
      <Route path='/' element={<ListNews />} />
      <Route path='/:id' element={<SingleNews />} />
    </Routes>
  );
}

export default App;
