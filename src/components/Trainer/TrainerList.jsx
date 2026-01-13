import Card from "./TrainerCard.jsx";
function TrainerList() {
  return (
    <div className="trainer-list p-8 bg-gray-100 text-black">
       <h1 className="text-3xl font-bold text-center">
        Our Trainers
      </h1>
        <Card />
    </div>
  );
}
export default TrainerList;