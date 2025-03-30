import { useState } from 'react';

const App = () => {
  const [showImage, setShowImage] = useState(true);
  const [bgDiv , setBgDiv]  = useState("red")
  const [input, setInput]  =  useState("")
  const [fontSize, setFontSize] =  useState(30)
  const [color, setColor] = useState("green")
  const[list, setList] = useState("")
  const[data,setData] = useState([])
   
  const addList = () =>{
    setData([...data,list])
  }
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#ddd',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '48px',
          width: '50%',
          margin: '0 auto',
          display:'flex',
          flexDirection:'column',
          gap:32
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1 style={{ padding: 0, marginBottom: 4 }}>Code With Sonu</h1>
          <p style={{ padding: 0, margin: 0, color: 'gray' }}>
            State Management React Application
          </p>
        </div>

        <div>
          <h2>Show and Hide App</h2>
          {showImage && (
            <img src="./images/flower.jpg" alt="Flower" width="100%" />
          )}
          <button
            onClick={() => setShowImage(!showImage)}
            style={{
              background: 'blue',
              color: 'white',
              padding: '12px 24px',
              marginTop: '16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {showImage ? 'Hide' : 'Show'}
          </button>
        </div>

        <div>
          <h2>background toggle div</h2>
          <div style={{
            height:300,
            width:300,
            background: bgDiv,
            borderRadius:'15px',

          }}/>
          <button
            onClick={() => setBgDiv(bgDiv === 'red' ? 'blue' : 'red')}
            style={{
              background: 'blue',
              color: 'white',
              padding: '12px 24px',
              marginTop: '16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            { bgDiv ==="red" ? "red" : "blue"}
          </button>
        </div>
        
        <div>
          <h2>Live Input preview</h2>
          <input placeholder='Type Your Text Here' style={{
            border:'2px solid #ccc',
            padding:8,
            width:300
          }}
          onChange={(e)=>setInput(e.target.value)}
          />
          <h1>{ input } </h1>
        </div>

        <div>
          <h2> Font Increaser</h2>
          <p style={{
            fontSize:fontSize
          }}>Code with Sonu</p>
          <input type='range' min= "30" max="200" step="1" onChange={(e)=>setFontSize(Number(e.target.value)) }/>
        </div>

         <div>
           <h1> Color Value Sample</h1>
           <input placeholder='Enter color name' onChange={(e)=> setColor(e.target.value)} value={color}/>
           <div style={{
            height:170,
            width:170,
            background:color,
            marginTop:16
           }} />
         </div>

         <div>
          <h1>Dynamic List (Using useState & Array)</h1>
          <div>
            <input 

            onChange={(e)=>setList(e.target.value)}
            placeholder='Enter Product Name'
            style={{
              border:'2px solid #ccc',
              padding:12,
              borderRadius:4,
              width:350,

            }}
            />
            <button 
            onClick={addList()}
            style={{
              border:'none',
              background:'yellow',
              padding:14,
              fontWeight:'bold',
              marginLeft:6,
              width:110,
              borderRadius:6
    
            }}>Add</button>
          </div>

          <ul>
           {
           data.map((item,index)=>(
            <li>{item}</li>
           ))
           }
          </ul>

         </div>
      </div>
    </div>
  );
};

export default App;