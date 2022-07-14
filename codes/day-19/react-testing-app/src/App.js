import './App.css';
import Hello from './Hello';
import PostCard from './PostCard';

function App() {
  return (
    <>
      <Hello />
      <br />
      <PostCard postId={1} />
    </>
  )
}

export default App;
