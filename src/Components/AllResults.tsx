import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import ico from "../assets/icon-google.png"
const AllResults = () => {
  type results = { title: string, url: string, description: string, id: number }
  const [data, setData] = useState<results[]>();
  const location = useLocation();
  useEffect(() => {
    async function fetchData() {
      const txtSearch = location.search.split(('='))[1]
      const response = await fetch(`http://localhost:8080/api/search?query=${txtSearch}`);
      setData(await response.json())
    }
    fetchData()
    console.log("data", data)
  }, [])

  return (
    <div className='mt-4'>
      {data?.map((data, i) => (
        <div key={i} className="mb-4 w-3/4">
          <Link to={{ pathname: data.url }} target="_blank" >
            <div className="flex">
              <img src={ico} alt="ico page"  className='w-5 mr-2' />              
              <p className="text-sm">{data.url}</p>

            </div>
            <h3 className='text-blue-800 font-semibold text-xl hover:underline'>{data.title}</h3>
          </Link>
          {data.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae accusantium iusto, dolor voluptate, molestias mollitia tempore maxime sit officiis assumenda omnis explicabo magni asperiores dolores tempora esse doloribus eveniet cumque.

        </div>
      ))}
    </div>
  )
}

export default AllResults