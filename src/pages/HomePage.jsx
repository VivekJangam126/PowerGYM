import Intro from '../components/Home/Intro.jsx';
import Why from '../components/Home/WhyChoose.jsx';
import Program from '../components/Home/Programs.jsx';
import Test from '../components/Home/TestiMonials.jsx';
import Class from '../components/Home/ClassTime.jsx';
function HomePage(){
    return(
        <>
        <div >
        <Intro />
        <Why />
        <Program />
         <Class />
        <Test />
       
        </div>
        </>
    )
}

export default HomePage;