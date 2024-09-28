import { useEffect, useState } from "react"
import { PacmanLoader } from "react-spinners";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("https://strapi-store-server.onrender.com/api/products", {
      method: "GET"
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
      })
      .then(data => {
        setProduct(data.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return (
    <div className=" base-container flex flex-wrap gap-6 justify-center">
      {loading && <PacmanLoader color="#36D7B7" className="items-center" />}
      {
        product.length > 0 && product.map(function (value, index) {
          return (
              <div key={index} className="border w-56 p-2 shadow-md">
                <img className="w-56 h-56" src={value.attributes.image} alt="" />
                <h2 className="text-center text-purple-600 text-2xl font-bold pb-2">{value.attributes.title}</h2>
                <h3 className="text-center ">{value.attributes.price}</h3>
              </div> 
          );
        })
      }
    </div>
  )
}
