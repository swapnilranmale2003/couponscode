import React, { useState } from 'react'
import './Upload.css'
function Upload() {

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');

  return (
    <>
    <h1 className='text-center'>Upload Coupons</h1>
    <div className='container my-5 upload-coupons'>
      <div className='inputs'>
      <input type="text" className='form-control' name="Title" placeholder='Enter the Title' id="" />
      <input type="text"  className='form-control ' name="Title" placeholder='Enter the link' id="" />
      <input type="text" className='form-control ' name="Title" placeholder='Enter the coupon code' id="" />
      <input type="text" className='form-control ' name="Title" placeholder='Enter the description' id="" />
      </div>
      <div>
      <button type='submit' className='btn btn-dark'>Submit</button>
      </div>
    </div>
    </>
  )
}

export default Upload
