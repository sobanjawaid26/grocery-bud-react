import { useState, useEffect } from 'react';
import './App.css';
import List from './List';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list){
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [{"id":"1710652276472","title":"Eggs"}]; //[{"id":"1710652276472","title":"Eggs"}]
  }
}

function App() {

  const [list, setList] = useState(getLocalStorage());

  useEffect(() => {
    console.log('useEffect', list)
    localStorage.setItem('list', JSON.stringify(list));
  });

  const removeItem = () => {
    console.log('remove Item');
  }

  const editItem = () => {
    console.log('edit Item');
  }

  return (
    <section className='section-center'>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem}/>
        </div>
      )
      }
    </section>
  );
}

export default App;
