import React, { useEffect, useState } from 'react';
import './Coupons.css';

function Coupons() {
    const [coupons, setCoupons] = useState([]);

    useEffect(() => {
        fetch('https://uploadcoupons-6b1e4-default-rtdb.firebaseio.com/UploadCoupon.json')
            .then(response => response.json())
            .then(data => {
                const fetchedCoupons = [];
                for (const key in data) {
                    fetchedCoupons.push({
                        id: key,
                        title: data[key].Name,
                        link: data[key].link,
                        couponcode: data[key].redem,
                        description: data[key].Description
                    });
                }
                setCoupons(fetchedCoupons);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="coupons-container">
            {coupons.map((coupon, index) => (
                <div className="coupon-card" key={index}>
                    <div className="title">
                        <h3>{coupon.title}</h3>
                    </div>
                    <div className="description">
                        <p>{coupon.description}</p>
                    </div>
                    <div className="coupon-buttons">
                        {coupon.link && <a href={coupon.link} target="_blank" rel="noopener noreferrer" className="link-button">Link</a>}
                        <button className="redeem-button">{coupon.couponcode}</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Coupons;
