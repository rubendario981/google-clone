import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import ico from "../assets/icon-google.png"
const AllResults = () => {
  type resultsInterface = { title: string, url: string, description: string, id: number }
  const descFake = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas, repellat totam expedita voluptates ab similique eum aperiam ipsum autem earum unde aspernatur voluptate iste, incidunt porro vero, laudantium commodi!!"
  const simulateResults = [
    { title: "Google Fake answer", url: "www.google.com", description: "This SPA is just the mockup the search engine of google, coming soon the project will be completed " + descFake, id: 1},
    { title: "Bing search engine", url: "www.bing.com", description: descFake, id: 2},
    { title: "BBC London new media", url: "www.bbc.com", description: descFake, id: 3},
    { title: "CNN - Time warner company", url: "www.cnn.com", description: descFake, id: 4},
    { title: "All news of France and world", url: "www.france24.com", description: descFake, id: 5},
    { title: "Fox news - A Fox company news", url: "www.foxnews.com", description: descFake, id: 6},
    { title: "Newspaper of financial news", url: "www.financialtimes.com", description: descFake, id: 7},
    { title: "ESPN - The world wide leader on sports", url: "www.espn.com", description: descFake, id: 8},
  ]
  const [results, setResults] = useState<resultsInterface[]>(simulateResults);
  const location = useLocation();
  
  const API_KEY = import.meta.env.VITE_API_KEY;
  const txtSearch = location.search.split(('='))[1]

  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch(`https://api.cognitive.microsoft.com/bing/v7.0/search?q=${txtSearch}&count=10&offset=0&mkt=es-us&safesearch=Moderate&apikey=${API_KEY}`);
        const data = await response.json()
        
        data.code === 200 && setResults(await response.json())

      } catch(e: any){
        console.log("error", e)
      }
    }
    fetchData()    
  }, [])

  return (
    <div className='mt-4'>
      {results?.map((data, i) => (
        <div key={i} className="mb-4 w-3/4">
          <Link to={data.url} target="_blank" >
            <div className="flex">
              <img src={ico} alt="ico page" className='w-5 mr-2' />
              <p className="text-sm">{data.url}</p>
            </div>
            <h3 className='text-blue-800 font-semibold text-xl hover:underline'>{data.title}</h3>
          </Link>
          {data.description}
        </div>
      ))}
    </div>
  )
}

export default AllResults