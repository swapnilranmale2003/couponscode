import React, { useState } from 'react'

function Upload() {

    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');

  return (
    <div>
      <input type="text" name="Title" placeholder='Enter the Title' id="" />
      <input type="text" name="Title" placeholder='Enter the link' id="" />
      <input type="text" name="Title" placeholder='Enter the coupon code' id="" />
      <input type="text" name="Title" placeholder='Enter the description' id="" />

      <button type='submit'>Submit</button>
    </div>
  )
}

export default Upload
