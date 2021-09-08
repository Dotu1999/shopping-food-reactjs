import React from 'react';
import PropTypes from 'prop-types';
import "./header.css"
Header.propTypes = {

};

function Header(props) {
    return (
        <div className="header">
            <div id="demo" className="carousel slide container-fluid" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cakhobakien.com/wp-content/uploads/2016/10/ca-kho-dua.jpg" alt="Los Angeles" width="1100" height="500" />
                        <div className="carousel-caption">
                            <h3>Cá Kho</h3>
                            <p>Cá Kho Vũ Đại!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://monngondongian.com/wp-content/uploads/2019/11/4AEC4FCB-C152-4436-979D-C39B17178CC9.jpeg" alt="Chicago" width="1100" height="500" />
                        <div className="carousel-caption">
                            <h3>Nem Quấn</h3>
                            <p>Nem Quấn Hà Thành!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIK3UKwD5t0B0tC8zLqly4UY1MaDrARMdq2w&usqp=CAU" alt="New York" width="1100" height="500" />
                        <div className="carousel-caption">
                            <h3>Bánh Mỳ</h3>
                            <p>Bánh Mỳ Kẹp Thịt!</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    );
}

export default Header;