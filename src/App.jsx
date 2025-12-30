import Nav from  './components/Layouts/NavBar.jsx';
import Header from './components/Layouts/Header.jsx';
import Footer from './components/Layouts/Footer.jsx';
import AppRoutes from './routes/AppRoutes.jsx';
function App() {

  return (
    <>
      <Header />
      <Nav />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
