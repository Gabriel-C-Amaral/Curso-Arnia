import React from "react";
import Car from '../../assets/carList.js'

class Body extends React.Component {


    render(): React.ReactNode {
        return <div>{Car.map((item) => {
            return <div>
                <p>{item.brand}</p>
                <p>{item.models[1]}</p>
            </div>
        })}</div>
    }
}

export default Body