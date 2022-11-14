import React, {useState} from "react";
import './App.css';







function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const addToArray = () => {
    setList([...list, {name,cost}]);
    setName('');
    setCost('');
  
    
  }

  const renderList = () => {
    return list.map((item, index) => {
      if(index === list.length - 1) {
        return item.name
      }
      else return item.name + ', '
      })
  }

  const handleKeypress = (e) => {
  
  if (e.keyCode === 13) {
    addToArray();
  }
};




  
  return (

    
    <div className="App">
      <div className='input-container'>

        <h1>Add Expense</h1>
        <form>
        <div className='inputs'>

        <label htmlFor="name">Name</label>
        <input name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}></input>

        </div>

        <div className='inputs'>

        <label htmlFor="cost">Cost</label>
        <input name="cost" id="cost" value={cost} onChange={(e) => setCost(e.target.value)} onKeyDown={handleKeypress}></input>

        </div>
        </form>

        <button onClick={() => addToArray()} id="btn">Add</button>
       
        

      </div>

      <div className='lists'>
      <p>
      List: [{renderList()}
      ]</p>

      <p>
        Sum: {list.reduce((a, b) => a + parseInt(b.cost), 0)}
      </p>
      </div>
    </div>
  );
}

export default App;
