import Hero from "../components/Trainer/Hero";
import TrainerList from "../components/Trainer/TrainerList.jsx";
import ClientReview from "../components/Trainer/ClientReview.jsx";
import JobForm  from "../components/Trainer/JobForm.jsx";
function Trainer() {
  return (
    <div className="trainer">
      <Hero />
     <TrainerList />
     <ClientReview/>
      <JobForm/>
    </div>
  );
}
export default Trainer;