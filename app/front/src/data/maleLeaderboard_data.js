import React, {useState, useEffect} from 'react'
import axios from 'axios';

function GetMalePlayers() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      axios
        .get('http://localhost:3001/getMalePlayers')
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.log('Error from ShowBookList');
        });
    }, []);
}

export default GetMalePlayers()