import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LayOut from "./components/LayOut";
import Missing from "./Missing";
import ProductDetails from "./ProductDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<LayOut />}>
           <Route index element={<Home />}/>
           <Route path="details/:id" element={<ProductDetails />}/>
       </Route>
       <Route path="*" element={<Missing />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
