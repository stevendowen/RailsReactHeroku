import React from 'react'
import store from '../store/index'

function Home() {
    const ads = store.getState().ads;
    
    return ads.map((ad, idx) => (
        <div id={idx} >
            <div>{ad.title}</div>
            <div>{ad.price}</div>
        </div>
        
    ))
}

export default Home;