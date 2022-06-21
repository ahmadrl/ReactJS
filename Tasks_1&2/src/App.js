import  Header from './components/Header';
import  Paragraph from './components/Paragraph';
import  List from './components/List';
import  Title from './components/Title';
import CardBody from './components/CardBody';
function App() {
  return (
    <div style={{border:'3px solid'}} className="container">
      
      {/* task1 */}
      <Header/>
      <Paragraph/>
      <List/>

      {/* task2 */}
      <Title/>
     <CardBody name = 'ahmad'/>
     <CardBody name = 'ali'/>
     <CardBody name = 'salem'/>
     <CardBody name = 'alkhalaf'/>

    </div>
    

     
  );
}


export default App;
