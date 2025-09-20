
import HeroSection from './HeroSection';
import ProductCard from './ProductCard';
import StudentTable from './StudentTable';
import TestingCSS from './TestingCSS';


function App() {


  return (
    <>

    <div className="text-center">
      <h1 className="text-4xl font-bold">This is my heading</h1>
      <p className="text-lg font-medium">This is used for testing purpose of react components</p>
      <StudentTable/>
      <ProductCard/> 
      <HeroSection/>
      <TestingCSS/>
    </div>
    </>
  )
}

export default App
