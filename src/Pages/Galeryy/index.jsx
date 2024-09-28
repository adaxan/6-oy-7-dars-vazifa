import { useEffect, useState } from "react"
import { ClockLoader } from "react-spinners";

export default function Galeryy() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/photos", {
      method: "GET"
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
      })
      .then(data => {
        setPhotos(data);
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
      {loading && <ClockLoader color="#36D7B7" className="items-center" />}
      {
        photos.length > 0 && photos.map(function (value, index) {
          return (
              <div key={index} className="border w-56 p-2 shadow-md">
                <img className="w-56 h-56" src={value.url} alt="" />
                <h2 className="text-center text-purple-600 text-2xl pb-2">{value.title}</h2>
              </div> 
          );
        })
      }
    </div>
  )
}
