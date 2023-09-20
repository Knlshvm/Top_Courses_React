import React, { useEffect } from 'react';
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl,filterData } from './data';
import Spinner from './components/Spinner';
import {toast} from "react-toastify"

function App() {

  const[courses, setCourses] = useState(null);
  const[loading, setLoading] = useState(true);
  const[category, setCategory] = useState(filterData[0].title);

  async function FetchData(){

    setLoading(true);
    try{
        let response = await fetch(apiUrl);
        let output = await response.json();
        setCourses (output.data);
    }
    catch{
        toast.error("Network error please check");
    }
    setLoading(false);
  }

  useEffect( () => {
    FetchData();
  },[])
 
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div className=''>
          <div>
              <Filter
              
              filterData = {filterData}
              category={category}
              setCategory={setCategory}
              />
          </div>
          <div className='w-11/12 max-w-[1200px] mx-auto
          flex justify-center flex-wrap items-center min-h-[50vh]'>
            {
              
              loading ? (<Spinner /> ):( <Cards  courses = {courses} category={category}/>)
            }
          </div>
      </div>
    
    </div>
  )
}

export default App
