function SortChars(){
    // const num = [3, 8, 11, 7, 5];
    const chars = ['Z' ,'A' ,'Q' ,'B', 'C', 'Y' ,'S',' W'  ];


      return (

        <div>   
                 
             <li>{chars.sort()}</li> 
                  
                   
        </div>

        // <div>   
        //          {
        //           num.map((n) => <li>{num.sort()}</li> )
        //           }
        //            {
        //           num.map((n) => <li>{num}</li> )
        //           }
        // </div>
                
            // {/* <h1>{num.join(',')}</h1>       */}       
      );
    }
    export default SortChars;