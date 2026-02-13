
import data from "@/lib/data";

const ServerComponent = async () => {
  const res = data;

  // console.log(res);

  return (
    <>
      <h1>server data</h1>

      <ul className="grid grid-cols-3 gap-3">
        {res.map((currElement, index) => (
          <li key={index}>{currElement.body}</li>
        ))}
      </ul>
    </>
  );
};

export default ServerComponent;