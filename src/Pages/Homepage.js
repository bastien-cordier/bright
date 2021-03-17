import React, { Fragment } from 'react'
import './Styles/Homepage.css'
import Nouveautes from '../Components/Nouveautes'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Whoami from '../Components/Whoami'

function Homepage() {
    return (
        <Fragment>
            <Nouveautes />
            <Slider />
            <Categories />
            <Whoami />
        </Fragment>
    )
}

export default Homepage
