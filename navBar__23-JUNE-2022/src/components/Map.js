function Map()
 {
    const Fruits = [
        {id: 1 , name: "Apple",  color: "Yellow"},
        {id: 2 , name: "Strawberry", color: "Red"},
        {id: 3 , name: "Kiwi", color: "Green"}
      ]; 
      let mapping = Fruits.map(fruit =>
      <table id={fruit.id}>
        <tr>{fruit.name}/{fruit.color}</tr>
      </table>); 

    return (

      <div>
        {
       {mapping}
      }
      </div> 

    );
  };
  export default Map;



