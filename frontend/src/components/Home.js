import React from 'react'
// import store from '../store/index'
import { Segment, Item } from 'semantic-ui-react'


function Home(props) {
    let ads = props.ads
    return (
        <Segment>
            {ads.map((ad, idx ) => (
                <Item key={idx}>{ad.title}</Item>
            ))}
        </Segment>
    )
}

export default Home;