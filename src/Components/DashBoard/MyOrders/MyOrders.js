import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import swal from 'sweetalert';
import { Container, Table } from 'react-bootstrap';

const MyOrders = () => {

    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://damp-river-81870.herokuapp.com/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [control])


    const handleDelete = (id) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this  order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    fetch(`https://damp-river-81870.herokuapp.com/orders/${id}`, {
                        method: "DELETE",
                        header: { "content-type": "application/json" },
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                swal("Your Order has been deleted!", { icon: "success", });
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
        <div>
            <Container className="my-3">
                <h2 className="text-center fw-bolder my-3">My <span style={{
                    color: "#fd7e14"
                }}>Orders</span></h2>
                <Table responsive="sm" className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Id & Quantity </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => (
                                <tr key={order._id}>
                                    <td>{index + 1}</td>
                                    <td>{JSON.stringify(order?.order)}</td>
                                    <td>{order?.name}</td>
                                    <td>{order?.email}</td>
                                    <td>{order?.address}</td>
                                    <td><button onClick={() => handleDelete(order._id)} className="btn bg-danger text-white px-3 py-1"> <i className="far fa-trash-alt me-2"></i>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>

                </Table>

            </Container>
        </div>
    );
};

export default MyOrders;