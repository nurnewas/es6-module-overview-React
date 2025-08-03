import "./Watch.css";
const Watch = ({ watch }) => {
  return (
    <div>
      <h1 className="watch">Watch</h1>
      <h3>The watch Name: {watch.name}</h3>
      <p>Price : {watch.price}</p>
    </div>
  );
};

export default Watch;
