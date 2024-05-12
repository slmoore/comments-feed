import { useEffect, useState } from 'react';
import './App.css';
import { Comment } from './models/comments';

function App() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch(`/api/getComments`)
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  console.log('comments', comments);

  return (
    <div className="App">
      <h1>Comments</h1>
      <ul>
        {comments.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
