import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './EducationFetch.css'; // Import the CSS file

function EducationFetch({ searchQuery }) {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch('https://uploadeducationcoupons-default-rtdb.firebaseio.com/uploadeducationcoupons.json')
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

    const hideCouponCode = (code) => {
        return (
            <span style={{ color: 'yellow', fontSize: '1rem' }}>
                {'#'.repeat(code.length)}
            </span>
        );
    };

    const isCouponExpired = (couponDate) => {
        const currentDate = new Date();
        const couponExpiryDate = new Date(couponDate);
        couponExpiryDate.setHours(12, 0, 0, 0);
        return currentDate > couponExpiryDate;
    };

    const filteredRecords = records.filter(record =>
        record.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="card-section ml-3 my-5">
                <div className="cards-container">
                    {filteredRecords.map((item, index) => (
                        <div className={`card ${isCouponExpired(item.date) ? 'expired' : ''}`} key={index}>
                            <div className="card-header">
                                <h3>{item.title}</h3>
                            </div>
                            <div className="card-body">
                                <p><strong>Coupon Code:</strong> {hideCouponCode(item.couponcode)}</p>
                                {item.description && <p><strong>Description:</strong> {item.description}</p>}
                                {item.date && (
                                    <p>
                                        <strong>Date:</strong> {new Date(item.date).toLocaleDateString('en-GB')}
                                    </p>
                                )}
                                <div className="buttons-container">
                                    {item.link && !isCouponExpired(item.date) && (
                                        <button className="link-button">
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">Link</a>
                                        </button>
                                    )}
                                    {item.couponcode && !isCouponExpired(item.date) && (
                                        <button className="redeem-button" onClick={() => copyCouponCode(item.couponcode)}>Redeem</button>
                                    )}
                                    {item.couponcode && isCouponExpired(item.date) && (
                                        <button className="redeem-button expired" disabled>Expired!</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default EducationFetch;
