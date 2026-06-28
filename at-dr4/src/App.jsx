import { Routes, Route } from "react-router";
import NotFound from "./NotFound";
import Header from "./Header";
import Etapa1 from "./Etapa-1/Etapa1";
import InProgress from './InProgress';
import Etapa2 from "./Etapa-2/Etapa2";

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<InProgress />} />
            <Route path="/etapa1" element={<Etapa1 />} />
            <Route path="/etapa2" element={<Etapa2 />} />
            <Route path="*" element={<NotFound />} />
         </Routes>


      </>
   );
}

export default App
