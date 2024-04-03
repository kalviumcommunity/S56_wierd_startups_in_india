import React, { useState, useEffect } from 'react';
import './landingPage.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Navbar = () => {document.cookie.split(";")[0].split("=")[1] 
  const [startupData, setStartupData] = useState([]);
  const [login,setLogin]=useState(false)
  const [UserData,setUserData]=useState([])
  const [value,setvalue]=useState("all")


  const fetchData = async () => {
    try {
      const response = await fetch('https://s56-wierd-startups-in-india.onrender.com/getstartup');
      const data = await response.json();
      setStartupData(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    axios.get("https://s56-wierd-startups-in-india.onrender.com/getUserName")
       .then((res)=>{
        console.log(res)
        setUserData(res.data)
      })
    fetchData();
  }, []);

  function HandleDelete(id){
    console.log(id,"This is id")
     axios.delete(`https://s56-wierd-startups-in-india.onrender.com/delete/${id}`)  
     .then(()=>{
      fetchData()
     })
     .catch((err)=>{
      console.log(err)
     })
  }



   useEffect(()=>{
  try {
 function checkLogin (){
  console.log( "cookie")
  let filtered = document.cookie.split(";").map((el,i)=>{
    let a = el.split("=")
    // console.log(a , a[0] , a[1].length)
    if (a[1].length != 0){
      // console.log(a[0])  
      return a[0]
    }
  })
  console.log(filtered)
 setLogin(filtered.includes('username'))
 }
  checkLogin()
  } catch (error) {
    console.log(error)
  }
   },[])



    const DeleteCookie=()=>{
      document.cookie="username=; expires=Mon,07 April 2004 00:00:00 UTC;path=/;"
      document.cookie="token=;expires=Mon,01 April 2005 00:00:00 UTC;path=/;"
      setLogin(false)
    }

    function onFilterValueChanged(e){
      console.log(e.target.value)
      setvalue(e.target.value)
    }
  
    let filterData = value =="all"?startupData:startupData.filter((el,i)=>{
      if(el.createdby==value){
        return el
      }
    })
    


  return (
    <div className='main'>
      <div className='top'>
        <div className='title'><strong>Weird Startups</strong></div> 
        <div className='home'>
          <ul>
            <li>Home</li>
            <li>About</li>
          <Link to={"/form"} ><li>Form</li></Link>  
          </ul>
          </div> 
          <select name="isAvailable" onChange={onFilterValueChanged}>
            <option value="all" >All</option>
           {UserData.map((el,i)=>{
            return <option value={el.name}> {el.name} </option>
           })}
          </select>
      
        {login ? <button  onClick={DeleteCookie} >Logout</button> : <Link to={"/Login"} > <button>login</button>  </Link> } 

      
      </div>

      <div>
        <h1>"Where Imagination Takes Flight: Weird Startups,  <br /> Bridging the Gap Between the Strange and the Successful!"</h1>
      </div>

      <div>
        {filterData.map((element) => (
          <div className='card' key={element._id}>
            <h1>Company: {element.company}</h1>
            <h2>Founder: {element.founder}</h2>
            <h3>Product: {element.product}</h3>
            <p>Description: {element.description}</p>
            <p>Valuation: {element.valuation}</p>
            <p>Status: {element.status}</p>
            <Link to={`/Update/${element._id}`} ><button>Update</button></Link> 
            <button  onClick={()=>{HandleDelete(element._id)}} >Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
