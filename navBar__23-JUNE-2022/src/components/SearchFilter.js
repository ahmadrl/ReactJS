import { useState } from "react";

function SearchFilter(){
    const arr = ['Ahmad', 'Developer', 'Programmer', 'Engineer', 'Coder'];

        const [search,searchHandler] = useState('');
        const ChangeHandler = (event)=>{
            let filteredArr = arr.filter(e => e.includes(event.target.value));
            searchHandler(filteredArr);
        }
        return(
            <div>
            <form>
                <input type="text" onChange={ChangeHandler}/>
                <h5>{search}</h5>
            </form>
            </div>
        );
    }
    

export default SearchFilter;