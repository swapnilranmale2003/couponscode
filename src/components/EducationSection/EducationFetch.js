import React, { useEffect, useState } from 'react';
import EducationSection from './EducationSection';

function EducationFetch() {
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
                                <p><strong>Coupon Code:</strong> {hideCouponCode(item.couponcode)}</p>
                                {item.description && <p><strong>Description:</strong> {item.description}</p>}
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

export default EducationFetch;
