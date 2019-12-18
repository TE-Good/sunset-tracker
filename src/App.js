// import React, { useState } from 'react';
import React, { useState } from 'react'
import './App.css';
import ReactMapGL, { Marker } from 'react-map-gl'
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
    <div className="app">
    {console.log('render', viewport)}
      <ReactMapGL
        height={'95vh'}
        width={'72vw'}
        zoom={1}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        {...viewport}
        onViewportChange={(viewport) => setViewport({viewport})}
      > 
        <Marker latitude={0} longitude={-180} offsetLeft={0} offsetTop={0}>
          <div className="marker"></div>
        </Marker>
      </ReactMapGL>
    </div>
  )
}

export default App;
