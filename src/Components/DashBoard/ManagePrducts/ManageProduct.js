import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const ManageProduct = () => {

    const [products, setProducts] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch('https://damp-river-81870.herokuapp.com/all-products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [control])


    const handleDelete = (id) => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "Do you want to delete this Product ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    fetch(`https://damp-river-81870.herokuapp.com/all-products/${id}`, {
                        method: "DELETE",
                        headers: { "content-type": "application/json" },
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                swal("Product has been deleted! Successfully", { icon: "success", });
                                setControl(!control);
                            }
                            else {
                                setControl(false);
                            }
                        })
                }
            });
    }

    return (
        <div className='container'>
            <h2 className="my-4"><span className="px-5 fw-bolder">Manage <span style={{
                color: "rgb(253, 126, 20)"
            }}>All Products</span></span></h2>

            <div className="row g-2">
                {
                    products.map(product => <div
                        key={product._id}
                        product={product}
                        className="col-md-4 col-sm-12"
                    >
                        <div className="card cusProductCard mb-3" style={{ maxwidth: "540px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={product?.image} className="img-fluid rounded-start p-3 ImageCard" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product?.title}</h5>
                                        <p className="card-text">{product?.category}</p>
                                        <h5 className="card-text">$ {product?.price}</h5>
                                        <button className='CusButton' onClick={() => handleDelete(product?._id)}>Remove this Product</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;

