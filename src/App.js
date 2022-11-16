import React, {useState} from "react";
import './App.css';
import styled, {css} from "styled-components";
import GlobalStyles from "./styles/Global.js";
import {AppContainer} from "./styles/App-container.styled";
import {Lists} from "./styles/Lists.styled";
import {InputsContainer} from "./styles/Inputs-container.styled";
import { render } from "@testing-library/react";
import {Button} from "./styles/Button.styled";
import {Card} from "./styles/Card.styled";
import { CardButton } from "./styles/Card-button.styled";
import { StatsContainer} from "./styles/Stats-container.styled";
import {StatsPtag} from "./styles/Stats-p-tag.styled";







function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const addToArray = () => {
    setList([...list, {name,cost}]);
    setName('');
    setCost('');
  
    
  }



  /*const renderList = () => {
    return list.map((item, index) => {
      if(index === list.length - 1) {
        return item.name
      }
      else return item.name + ', '
      })
    }*/

    const renderCards = () => {
      return list.map((item,index) => (
        <Card key={index}>
          <div><p><strong>Name:</strong> {item.name}</p>
          <p><strong>Cost:</strong> {item.cost}</p></div>
          <CardButton onClick={()=>removeCard(index)}>x</CardButton>
        </Card>
      ))
      
    }

    const removeCard = (index) => {
      const newList = list.filter((_,i) => i !== index);
      setList(newList);
    }



  const handleKeypress = (e) => {
  
  if (e.keyCode === 13) {
    addToArray();
  }
};




  
  return (

    
    
    <AppContainer>
    <GlobalStyles/>
      <div>

        <h1>Add Expense</h1>
        <form>

        <InputsContainer>

        <label htmlFor="name">Name</label>
        <input name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}></input>
        </InputsContainer>

        <InputsContainer>

        <label htmlFor="cost">Cost</label>
        <input name="cost" id="cost" value={cost} onChange={(e) => setCost(e.target.value)} onKeyDown={handleKeypress}></input>

        </InputsContainer>
        </form>

        <Button onClick={() => addToArray()} id="btn">Add</Button>

        <StatsContainer>
        <h1>Stats</h1>
        <StatsPtag>
        <p>Count: {list.length}</p>
        <p>Sum: {list.length > 0 ? list.reduce((a, b) => a + parseInt(b.cost), 0) : 0}</p>
        </StatsPtag>
        </StatsContainer>

       
        

      </div>

      <div>
        {renderCards()}
      </div>
      {/* <Lists>
      <p>
      List: [{renderList()}
      ]</p>

      <p>
        Sum: {list.reduce((a, b) => a + parseInt(b.cost), 0)}
      </p>
      </Lists> */}
      </AppContainer>
    
   
  );
}

export default App;
