import { useState } from "react";
import { PacmanLoader } from "react-spinners";

export default function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useState(function () {
    setLoading(true)
    fetch("https://strapi-store-server.onrender.com/api/products", {
      method: "GET",
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
      })
      .then((data) => {
        setCards(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false)
      })
  }, []);

  return (
    <div className="flex flex-wrap gap-5 justify-center mt-10">
      {loading && <PacmanLoader color="yellow" />}
      {cards.length > 0 &&
        cards.map(function (value, index) {
          return (
            <div className="flex flex-wrap">
              <div key={index} className="border w-52 p-2 rounded-md ">
                <img
                  className="w-52 h-52"
                  src={value.attributes.image}
                  alt=""
                />
                <h3 className="text-center text-xl text-gray-600 ">
                  {value.attributes.title}
                </h3>
                <h4 className="text-center text-gray-500">{value.attributes.price}</h4>
              </div>
            </div>
          );
        })}
    </div>
  );
}