import React from 'react';
import PropTypes from 'prop-types';
import './context.css'
import LinkIMG from '../../../api/getImg';
import Pagination from "@material-ui/lab/Pagination";
import Cart from './cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
Content.propTypes = {
    listProduct: PropTypes.array,
};
function Content(props) {
    const notify = (data) => toast(data, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const { listProduct, count, setPage, page, title, changeTitle, addToListCart, listCart, setListCart } = props;
    const addToCart = (event, data) => {
        // console.log(event.target.className);
        if (event.target.className == "btn noAddCart") { notify("Sản phẩm này đã có trong giỏ hàng của bạn") }
        else {
            const lineItem = {
                product: data,
                quantity: 1
            }
            addToListCart(lineItem);
            notify("Bạn vừa thêm sản phẩm này vào giỏ hàng");

        }
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="row" id="nav-content">
                <div className="col-md-5 col-sm-8 col-7">
                    {/* <input type="search" placeholder="Nhập sản phẩm bạn cần tìm ?"
                        aria-describedby="button-addon8" className="form-control" value={title} onChange={changeTitle} /> */}
                    {/* <i className="fas fa-search"></i> */}
                    <input type="search" placeholder="Nhập sản phẩm bạn cần tìm ?"
                        aria-describedby="button-addon8" className="form-control" onKeyDown={changeTitle} />
                </div>
                <div className="col-md-7 col-sm-4 col-5">
                    <div className="cart" data-toggle="modal" data-target="#myModal">
                        {/* <h4>Giỏ hàng </h4> */}
                        <i className="fas fa-shopping-cart fa-2x"></i>
                        {listCart.length > 0 ? <span className="tip">{listCart.length}</span> : ''}
                    </div>
                </div>
            </div>
            <div className="row">
                {/* <ToastContainer /> */}
                <div className="sidebar-container col-md-3" style={{ maxHeight: '450px' }}>
                    <div className="sidebar-logo">
                        Bếp Việt
                    </div>
                    <ul className="sidebar-navigation">
                        <li className="header">Navigation</li>
                        <li>
                            <a href="/">
                                <i className="fa fa-home" aria-hidden="true"></i> Homepage
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard
                            </a>
                        </li>
                        <li className="header">Another Menu</li>
                        <li>
                            <a href="/">
                                <i className="fa fa-users" aria-hidden="true"></i> Friends
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-cog" aria-hidden="true"></i> Settings
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-info-circle" aria-hidden="true"></i> Information
                            </a>
                        </li>
                    </ul>
                </div>

                <div id="listProcducts" className="content-container col-md-9" >
                    <div className="container-fluid">
                        <div className="card-columns">
                            {listProduct.length > 0 ? ('') : <h3>Not found</h3>}
                            {listProduct.map((product) => {
                                let found = listCart.find(element => element.product.id == product.id);
                                let classAddCart;
                                if (found == undefined) {
                                    classAddCart = "btn btn-info addcart";
                                }
                                else { classAddCart = "btn noAddCart" }
                                return (
                                    <div className="card bg-light" key={product.id}>
                                        <div className="card-body text-center">
                                            {/* <img style={{ height: '200px' }} src={LinkIMG + product.picture} alt="food" /> */}
                                            <img style={{ height: '200px' }} src={product.picture} alt="food" />
                                            <br />
                                            <h4 className="card-text">{product.name}</h4>
                                            <h6 className="content_price">price : {Number(product.price).toFixed(2)} $</h6>
                                            <button type="button" className={classAddCart} onClick={(e) => addToCart(e, product)}>Add to cart</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div className="pagination" style={{ display: (listProduct.length == 0) ? 'none' : '' }}>
                    <Pagination
                        // className="my-8"
                        count={count}
                        page={page}
                        siblingCount={1}
                        boundaryCount={1}
                        variant="outlined"
                        shape="rounded"
                        onChange={setPage}
                    />
                </div>
                <br></br>
            </div>
            <Cart listCart={listCart} setListCart={setListCart} />
        </>
    );
}

export default Content;