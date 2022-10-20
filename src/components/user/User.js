import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './user.css'


function User() {
    const[data,setData] = useState([])

    const apiGet = ()=>{
        fetch(' https://api.github.com/users')
  .then((response) => response.json())
  .then((data) =>setData(data));

    };
    console.log(data);

    useEffect(() => {
      apiGet();
    }, [])
    


  return (

   data.map(item =>

    // <Card style={{ width: '20rem',}}>
    //   <Card.Img variant="top" src={item.avatar_url}/>
    //   <Card.Body>
    //     <Card.Title>{item.login}</Card.Title>
    //     <a href={item.html_url} target = 'blank'><Button variant="primary">Github</Button></a>
        
    //   </Card.Body>
    // </Card>
    // )
    <div className='row'>
       <h2>{item.login}</h2>
       <div className='row__posters'>
                
        <a href={item.html_url} target='blank'><img
                className='row_poster'
                alt={item.login}
                src={item.avatar_url}/></a>        
        </div>  
          
    </div>
    )
  )
}

export default User