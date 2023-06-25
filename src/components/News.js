import React from 'react'
import { Tabs, Tab } from 'react-materialize'
export default function News() {
    return (
        <Tabs
            className="tab-news z-depth-1"
            options={{
                swipeable: true
            }}
            scope="tabs-33"
        >
            <Tab
                className="tabs"
                options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                }}
                title="Messi's FINALE performance at Barca"
            >
                <iframe src="https://www.youtube.com/embed/rHuHv1_0-0w" />
            </Tab>
            <Tab
                active
                className="tabs"
                options={{
                    duration: 300,
                    onShow: null,
                    responsiveThreshold: Infinity,
                    swipeable: false
                }}
                title="Ronaldo gonna leave Real Madrid????"
            >
                <iframe src="https://www.youtube.com/embed/wsfHPhwktBc" />
            </Tab>
        </Tabs>
    )
}