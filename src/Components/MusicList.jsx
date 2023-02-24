import React from 'react'
import '../Customcss/musicList.css'
function MusicList() {
  return (
    <div>
    <h4>Released This Week---------------------------------------------------------------------------------------------</h4>
      <div className='firstDiv'>
      <div className='one'><button>Play</button></div>

      <div className='one'><button>Play</button></div>

      <div className='one'><button>Play</button></div>

      <div className='one'><button>Play</button></div>

      <div className='one'><button>Play</button></div>

      <div className='one'><button>Play</button></div>

      </div> 
      <h4>Featured PlayList----------------------------------------------------------------------------------------------</h4>

      <div className='SecondDiv'>
      <div className='one'><button className='btnPlay'>Play</button></div>

<div className='one'><button className='btnPlay'>Play</button></div>

<div className='one'><button className='btnPlay'>Play</button></div>

<div className='one'><button className='btnPlay' >Play</button></div>

<div className='one'><button className='btnPlay'>Play</button></div>

<div className='one'><button className='btnPlay'>Play</button></div>
      </div>
    </div>
  )
}

export default MusicList
