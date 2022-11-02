
import './App.css';
import links from './data/links';
import Card
  from './components/Card';
function App() {
  const cards = links.map(item => {
    return (
      <Card
        {...item}
      />
    )
  })
  return (
    <div className="App outer-div">
      <video width="750" height="500" autoPlay >
        <source src="https://raw.githubusercontent.com/yashkc2025/linktree/main/assets/vid.mp4" type="video/mp4" />
      </video>
      <div className='middle-div'>
        {cards}
      </div>

    </div>
  );
}

export default App;
