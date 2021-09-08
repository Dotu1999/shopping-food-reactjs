import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LinkIMG from '../../../api/getImg';
Cart.propTypes = {
    listCart: PropTypes.array,
};
function Cart(props) {
    const { listCart, setListCart } = props;
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let sum = 0;
        listCart.forEach(e => sum = sum + e.product.price * e.quantity);
        setTotal(sum);
    }, [listCart])
    const newListCart = [...listCart];
    //change quantity
    const changeQuatity = (e, data) => {
        // const newListCart = [...listCart];
        const objIndex = newListCart.findIndex((obj) => obj.product.id == data.product.id);
        if (e.target.className == "-" && newListCart[objIndex].quantity > 1) {
            newListCart[objIndex].quantity -= 1;
        }
        if (e.target.className == "+") {
            newListCart[objIndex].quantity += 1;
        }
        setListCart(newListCart);
    }
    //delete element of cart
    const deleteCart = (data) => {
        const objIndex = newListCart.findIndex((obj) => obj.product.id == data.product.id);
        newListCart.splice(objIndex, 1);
        setListCart(newListCart);
    }
    return (
        <>
            {/* modal */}
            <div className="modal fade" id="myModal">
                <div className="modal-dialog" >
                    <div className="modal-content">
                        {/* modal head  */}
                        <div className="modal-header">
                            <h4 className="modal-title">ORDER</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        {/* modal body  */}
                        <div className="modal-body"  >
                            <div className="listCart" style={{ display: (listCart.length == 0) ? "none" : " " }}>
                                {listCart.map((each) => (
                                    <div key={each.product.id}>
                                        <div className="itemCart row">
                                            <img className="col-md-2" src={LinkIMG + each.product.picture} alt="" />
                                            <div className="col-md-2">
                                                <p style={{ fontSize: '16px' }}>{each.product.name}</p>
                                            </div>
                                            <div className="col-md-3 quantity" >
                                                <span className="-" onClick={(e) => changeQuatity(e, each)}>-</span>
                                                <span>{each.quantity}</span>
                                                <span className="+" style={{ color: '#64c4af' }} onClick={(e) => changeQuatity(e, each)}>+</span>
                                            </div>
                                            <div className="col-md-5 cart_price">
                                                <h5>${Number(each.product.price).toFixed(2)} &nbsp; &nbsp; </h5>
                                                <button className="btn btn-secondary" onClick={() => deleteCart(each)}>Delete</button>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>

                                ))}
                            </div>
                            {(listCart.length == 0) ? (<><h3>No product in your cart</h3><p>Please choose product !</p></>) : ''}
                            <hr />
                            <div className="totalCart" style={{ display: (listCart.length == 0) ? "none" : " " }} >
                                <h4>Total :</h4>
                                <h5 style={{ overflow: 'hidden' }}>{Number(total).toFixed(2)} $</h5>
                            </div>
                        </div>
                        <div className="modal-footer" style={{ display: (listCart.length == 0) ? "none" : " " }}>
                            <button type="button" className="btn checkout" data-dismiss="modal">
                                PROCEED TO CHECKOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;