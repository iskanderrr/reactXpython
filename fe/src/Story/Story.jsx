import React, { useEffect, useState } from 'react';
import "../css/pages/story.css";

export default function Story() {
    const [inputData, setInputData] = useState({
        full_name: "",
        email: "",
        message: "",
      });
  function handleInput(e) {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main className='main'>
        <section class="details-outer">
            <h1 class="details-heading">SHARE YOUR STORY.</h1>
            <div class="details-texts-outer">
                <p>The recent fires have left so many in need, and Lineo is here to help.</p>
                <p>We’re selecting <strong>10 people or families</strong> to receive assistance as they work to rebuild their lives. Share your story or tell us about someone you know who needs support.</p>
                <p>Submit today, and we’ll reach out if we’re able to help.</p>
            </div>
            <form class="form-outer">
                <label class="form-input-outer">
                    Full Name
                    <input name='full_name' onChange={handleInput} class="form-input" placeholder="First & Last Name" />
                </label>
                <label class="form-input-outer">
                    Email
                    <input name='email' onChange={handleInput} class="form-input" placeholder="firstlast@gmail.com" />
                </label>
                <label class="form-textarea-outer">
                    Share your story *
                    <textarea name='message' onChange={handleInput} rows="7" class="form-textarea" placeholder="How can Lineo help you?" ></textarea>
                </label>
                <button class="button-filled" >
                    Submit your story
                </button>
            </form>
        </section>
    </main>
  )
}