import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DarkNavbar from "./components/Navbar";
import ListCustomers from "./components/ListCustomers";

function App() {
  return (
    <div>
      <DarkNavbar />
      <ListCustomers />
      <Footer />
    </div>
  );
}

export default App;
