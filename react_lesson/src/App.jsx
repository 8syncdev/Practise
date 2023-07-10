import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Form from "./components/Form";
import './App.css';



function App() {
  // fragment: <> </>
  // Công thức để gọi: <Tên_hàm />
  
  return (
    <>
      <div className="header">
        <Header />

        <div className="inner-wrap py-5">
          <div className="container">
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6">

                <Form />
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Home />
      <Footer />
    </>
  );
}

export default App;
