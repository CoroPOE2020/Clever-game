import React, { Fragment, Component } from "react";

import Welcome from "./Welcome/Welcome";
import Carousel from "../../../UI/Carousel/Carousel";
import RoomsList from "./RoomsList/RoomsList";
import Stats from "./Stats/Stats";


class Home extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Fragment>
                <Welcome />
                <Carousel />
                <RoomsList />
                <Stats />
            </Fragment>
        )
    }
};

export default Home;