// import React, { useState } from 'react';
import React, { useState } from 'react'
import './App.css';
import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'


function App() {  
  const [viewport, setViewport] = useState(
    {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  )
 
  return (
    <div className="App">
    {console.log('render', viewport)}
      <p>hello world</p>
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...viewport}
        onViewportChange={(viewport) => setViewport({viewport})}
      />
    </div>
  )
}

export default App;
