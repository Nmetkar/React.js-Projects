import React, { useState } from 'react'
import Card from "../Components/Card.jsx";
import Navbar from '../Components/Navbar.jsx';

const Dashboard = ({ products }) => {
    const [productsState, setProductsState] = useState(products);

    return (
        <>
            <Navbar />
            <div className="container mt-4">
  <div className="row g-3">
    {[...new Set(productsState.map(p => p.category))].map((category, index) => (
      <div className="col-6 col-md-3" key={index}>
        <div className="badge bg-secondary hoverEffectAll w-100 py-2 fs-6 fw-semibold text-center rounded-pill">
          {category}
        </div>
      </div>
    ))}
  </div>
</div>


            <div className='container'>
                <div className='row'>
                    {productsState.map((product, i) => (
                        <div className="col-12 col-md-6 col-lg-4 p-3"
                            key={i}>
                            <Card product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
export default Dashboard;
