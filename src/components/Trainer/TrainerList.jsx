import Card from "./TrainerCard.jsx";
function TrainerList() {
  return (
    <div className="trainer-list p-8 bg-white text-black">
       <h1 className="text-2xl font-bold mb-6 text-center">
        Our Trainers
      </h1>
        <Card />
    </div>
  );
}
export default TrainerList;