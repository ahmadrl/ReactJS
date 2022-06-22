function Map()
 {
    const Fruits = [
        {id: 1 , name: "Apple",  color: "Yellow"},
        {id: 2 , name: "Strawberry", color: "Red"},
        {id: 3 , name: "Kiwi", color: "Green"}
      ]; 
      
    return (
    //     <div>
    //     {
    //     Fruits.map((data) => (
    //       <div>{data}</div>
    //     ))
    //     }
    //   </div>

      <div>
        {
        Fruits.map((s) => (
        <div>{s}</div>
      ))
      }
      </div>
    );
  };
  export default Map;
