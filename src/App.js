import React, {useState, useCallback} from 'react';
import NewsList from './components/NewsList';
import Categoryes from './components/Categories'

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(
    category => {
      setCategory(category);
    },
    [],
  );

  return (
    <>
      <Categoryes category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
  );
}

export default App;
