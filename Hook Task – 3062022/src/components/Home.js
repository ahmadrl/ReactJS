import { useEffect , useState } from "react";
import { Link } from "react-router-dom";

const Home = ()=>
{
    const [data , setData] = useState([]);
    useEffect (()=>{
        const fetchData = async ()=>{
            const api = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bc63f0c08d018cf26d4cf02b8efde4d7');
            const latestMovies = await api.json();
            setData(latestMovies.results);

        }
        fetchData();
    } , [])
  
    return (
        <div className="col m-5">
          <h1 className="row m-5">Netflix</h1>

            <h5 className="row m-5 p-3">Latest Movies</h5>
<div className="row m-5 p-3">
            {data.slice(8, 13).map((user)=>{
                return(
                    <div key={user.id} className="col-lg-4 mb-3 d-flex align-items-stretch">
                        <div className="card">
                            <img src={'https://image.tmdb.org/t/p/w500/'+user.backdrop_path} className="card-img-top" alt="Card Image"/>
                            <div className="card-body d-flex flex-column">
                             <h4 className="card-title ">{user.title}</h4>
                            <p className="card-text mb-4 my-2">{user.overview}</p>
                                          
                    </div>
                    </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Home;

// import React, { useEffect } from 'react';
// import { Link } from "react-router-dom";

// import axios from 'axios';

// const Home = () => {
//     const [Posts, setData] = React.useState([]);


//     useEffect(
//         () => {
//             getData();
//         }, []
//     );

//     const getData = () => {

//         axios.get('https://api.themoviedb.org/3/movie/?api_key=ab9ae6f4f09635a061ce19661cd57229').
//             then((res) => {
//                 setData(res);
//                 console.log(res);

//             }).
//             catch((error) =>
//                 console.error(error));
//     }




//     return (
        
//         <div className="App">
            
//             <ul>
//                 {
//                     Posts.slice(0, 6).map(Movie =>
//                         <div>
//                             <li>{Movie.poster_path}</li>
//                             <p
//                                 className="font-weight-semibold mb-2"
//                                 data-abc="true"
//                                 style={{ fontSize: '20px' }}
//                             >
//                                 {Movie.title}
//                             </p>
                           
//                             <li>{Movie.overview}</li>
//                             <Link to={'/SingleMovie/' + Movie.id} className="btn btn-danger ">Show Movie info</Link>

//                         </div>

//                     )}
//             </ul>

//         </div>
//     );


// }
// export default Home;

