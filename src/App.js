import Home1 from "./pages/Home1";
import Navbar from "./components/Navbar";
import Input from "./pages/Input";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ApolloProvider } from "@apollo/client";
import { Api } from "./api/Constant";


function App() {
  return (
    <ApolloProvider client={Api}>
      <Router>
      <Routes>
        <Route path="/" element={<Home1 />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/input" element={<Input />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
    </ApolloProvider>
    
  );
}

export default App;
