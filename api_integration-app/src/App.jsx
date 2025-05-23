import React from "react";
// import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./component/Header/Header";
import Section from "./component/Section/Section.jsx";
import Footer from "./component/Footer/Footer.jsx";
// import "./component/js/bootstrap.js";
import YouTubeApi from "./component/YouTubeApi/YouTubeApi.jsx";
import { Route, Routes } from "react-router";
import Iphone from "./Pages/Iphone/Iphone.jsx";
import Mac from "./Pages/Mac/Mac";
import Sheard from "./Pages/Sheard/Sheard.jsx";
import John from "./Pages/John.jsx";
import SheardVideo from "./Pages/Sheard/SheardVideo.jsx";
import Four04 from "./Pages/Four04/Four04.jsx";
import Singlepage from "./Pages/Iphone/Singlepage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sheard />}>
          <Route path="/" element={<Section />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/Mac" element={<Mac />} />
          <Route path="/iphone/:productID" element={ <Singlepage/>} />
          <Route path="/" element={<SheardVideo />}>
            <Route path="/John" element={<John />} />
          </Route>
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
