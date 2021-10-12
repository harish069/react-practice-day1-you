import './App.css'
import Assignment from './components/Assignment';

function App() {
  const data = {
    image: "https://static.toiimg.com/thumb/msid-81527421,width-1200,height-900,resizemode-4/.jpg",
    text: <div>There are approximately <div className="bold" > 3.04 Billion</div> active social media world-wide</div>,
  }
  const data1 = {
    image: "https://static.toiimg.com/thumb/msid-81527421,width-1200,height-900,resizemode-4/.jpg",
    text: <div>The Total number of active mobile <br/> social media users is almost <div className="bold" >3.04 Billion</div></div>,
  }
  const data2 = {
    image: "https://static.toiimg.com/thumb/msid-81527421,width-1200,height-900,resizemode-4/.jpg",
    text: <div><div className="bold">90%</div>of social-media users try to reach <br/> out to brands or retailers</div>,
  }
  const data3 = {
    image: "https://static.toiimg.com/thumb/msid-81527421,width-1200,height-900,resizemode-4/.jpg",
    text: <div>In the United States <div className="bold">77%</div>of people own at least one social media profile</div>,
  }
  const data4 = {
    image: "https://static.toiimg.com/thumb/msid-81527421,width-1200,height-900,resizemode-4/.jpg",
    text: <div> <div className="bold">135 minutes</div> are spent on social media everyday by global internet users</div>,
  }
  const data5 = {
    image: "https://static.toiimg.com/thumb/msid-81527421,width-1200,height-900,resizemode-4/.jpg",
    text: <div>Youtube, instagram and snapchat <br/> are the most popular social media <br/> platforms among <div className="bold">Teens</div></div>,
  }

  return (
    <>
      <div className="App1">
        <h2>General Social Media Marketing stats</h2>
        <div className="App">
      <Assignment props={data} />
      <Assignment props={data1} />
      <Assignment props={data2} />
      <Assignment props={data3} />
      <Assignment props={data4} />
      <Assignment props={data5} />
        </div>
        <h2>STATUS REW</h2>
      </div>
      </>
  );
}

export default App;
