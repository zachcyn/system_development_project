import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/getMalePayers')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }, []);
    console.log(books)
    return <div>{books[0]}</div>;

}

export default App;
