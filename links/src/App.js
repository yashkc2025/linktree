
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
      <video id="background-video" autoplay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
        <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" />
      </video>
      <div className='middle-div'>
        {cards}
      </div>
    </div>
  );
}

export default App;
