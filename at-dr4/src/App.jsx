import { Routes, Route } from "react-router";
import NotFound from "./NotFound";
import Header from "./Header";
import InProgress from './InProgress';
import Etapa1 from "./Etapa-1/Etapa1";
import Etapa2 from "./Etapa-2/Etapa2";
import Etapa3 from "./Etapa-3/Etapa3";

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<InProgress />} />
            <Route path="/etapa1" element={<Etapa1 />} />
            <Route path="/etapa2" element={<Etapa2 />} />
            <Route path="/etapa3" element={<Etapa3 />} />
            <Route path="*" element={<NotFound />} />
         </Routes>


      </>
   );
}

export default App
