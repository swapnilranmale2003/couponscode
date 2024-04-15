import React, { useEffect, useState } from 'react';
import './FetchData.css'; // Assuming you have a CSS file for styling

function FetchData() {
    const [records, setRecords] = useState([]);
    
    useEffect(() => {
        fetch('https://uploadcoupons-6b1e4-default-rtdb.firebaseio.com/UploadCoupon.json')
            .then(response => response.json())
            .then(data => {
                const fetchedData = [];
                for (const key in data) {
                    fetchedData.push({ id: key, ...data[key] });
                }
                setRecords(fetchedData);
            })
            .catch(err => console.log(err));
    }, []);

    const copyCouponCode = (code) => {
        navigator.clipboard.writeText(code)
            .then(() => alert('Coupon code copied to clipboard'))
            .catch((error) => console.error('Failed to copy: ', error));
    };

    return (
        <>
        <div className="card-section ml-3 my-5">
        <div className="cards-container">
            {records.map((item, index) => (
                <div className="card" key={index}>
                    <div className="card-header">
                        <h3>{item.title}</h3>
                    </div>
                    <div className="card-body">
                        <p><strong>Coupon Code:</strong> {item.couponcode}</p>
                        {item.description && <p className='card-dec'><strong>Description:</strong> {item.description}</p>}
                        <div className="buttons-container">
                            {item.link && <button className="link-button"><a href={item.link} target="_blank" rel="noopener noreferrer">Link</a></button>}
                            {item.couponcode && <button className="redeem-button" onClick={() => copyCouponCode(item.couponcode)}>Redeem</button>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
        </>
    );
}

export default FetchData;
