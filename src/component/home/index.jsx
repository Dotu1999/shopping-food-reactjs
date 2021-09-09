import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import Fooder from './footder/Fooder';
import Content from './content/Index';
import ProdectService from '..//../service/Product_service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const [listProduct, setListProduct] = useState([]);
    const [page, setpage] = useState(1);
    const [pageLimit] = useState(6);
    const [totalPage, setTotalPage] = useState(0);
    const [title, setTitle] = useState('');
    const [listCart, setListCart] = useState([]);
    //thong bao
    const notify = (data) => toast(data, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const addToListCart = (data) => {
        const newListCart = [...listCart];
        newListCart.push(data)
        setListCart(newListCart);
    }
    const setPageProduct = (event, value) => {
        setpage(value);
    };
    const onChangeSearchTitle = (e) => {
        if (e.key === 'Enter') {
            const searchTitle = e.target.value;
            setpage(1);
            setTitle(searchTitle);
            notify("Bạn đã hoàn thành tìm kiếm ");
        }
        // const searchTitle = e.target.value;
        // setpage(1);
        // setTitle(searchTitle);
    };
    useEffect(() => {
        // get product by sever spring boot
        // ProdectService.getAll(page - 1, pageLimit, title)
        //     .then((res) => {
        //         setListProduct(res.data.tutorials);
        //         setTotalPage(res.data.totalPages);
        //     })
        //     .catch((err) => {
        //         console.log("loi");
        //     })
        // get product by fake api mockapi
        ProdectService.getAllByName(title)
            .then((res) => {
                setTotalPage(Math.ceil(res.data.length / pageLimit));
                // console.log(res.data.length)
            })
            .catch((err) => {
                console.log("looi");
            })
        ProdectService.getProduct(page, pageLimit, title)
            .then((res) => {
                setListProduct(res.data);
            })
            .catch((err) => {
                console.log("loi");
            })
    }, [page, title])
    return (
        <div>
            <Header />
            <Content listProduct={listProduct} count={totalPage} page={page}
                setPage={setPageProduct} title={title} changeTitle={onChangeSearchTitle} addToListCart={addToListCart}
                listCart={listCart} setListCart={setListCart} />
            <Fooder />
        </div>
    );
}

export default Home;