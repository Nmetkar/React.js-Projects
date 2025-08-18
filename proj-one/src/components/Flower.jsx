import React from 'react'
import flowerData from '../../flowerData'

const Flower = () => {
    console.log(flowerData)
    return (
        <div>
            {flowerData.map((f, index) => (
                <div keys={index}>
                <div className="card" style={{width: '18px'}}>
                    <img src= {f.image} className="card-img-top" alt=''/>
                        <div className="card-body">
                            <h5 className="card-title">{f.name}</h5>
                            <p className="card-text">{f.Price}</p>
                            <a href="#" className="btn btn-primary">{f.InStore}</a>
                        </div>
                </div>
                </div>
            ))}
        </div>
    )
}

export default Flower
