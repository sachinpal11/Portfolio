import React from 'react'
import Gap from './Gap'

function Contact() {


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1f98c236-1d61-43f1-9ece-474e402b2c4d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      event.target.reset();
    }
  };
  return (
    <div className='w-full h-auto py-10 bg-neutral-900'>
      <Gap />
      <Gap />
      <div className='relative flex h-auto sm:flex-row items-center flex-col justify-center'>
        <div className='p-4 w-[10%]  z-10 flex items-center justify-center -mr-2  sm:-rotate-90 '>
          <p className='sm:text-8xl text-6xl -mb-10 sm:mb-0 text-center uppercase text-neutral-500 font-[poppins] font-bold text-nowrap flex flex-col '>
            <span>Let's Work</span>
            <span>Together</span>
          </p>
        </div>
        <div className='w-[90%] py-14 z-20  sm:w-[50%] xl:w-[40%] font-[poppins] flex flex-col gap-2 rounded-xl bg-white p-4'>
          <span className='font-[oswald] text-5xl text-neutral-900 font-semibold'>Get in Touch</span>
          <span className='text-neutral-700'>You can reach me anytime</span>
          <form className='w-full flex flex-col gap-3 mt-6' onSubmit={onSubmit}>
            <div className='flex w-full justify-center md:flex-row flex-col sm:mt-0 mt-5 gap-2'>
              <input type="text" className='ContactInput rounded-full md:w-[45%]' placeholder='First Name' name='First Name' />
              <input type="text" className='ContactInput rounded-full md:w-[45%]' placeholder='Last Name' name='Last Name' />
            </div>
            <div>
              <input type="email" className='w-[91%] rounded-full ContactInput' placeholder='Email' name="Email" id="" />
            </div>
            <div>
              <input type="text" className='w-[91%] rounded-full ContactInput' placeholder='Phone No.' name="Phone No." id="" />
            </div>
            <div>
              <textarea className='h-40 ContactInput  rounded-xl' placeholder='How Can I Help You?' name="Message" id=""></textarea>
            </div>
            <button className='text-xl bg-neutral-900 text-white rounded-full py-3 ContactBtn' type='submit' >Submit </button>
          </form>
        </div>
      </div>
      <Gap />

    </div>

  )
}

export default Contact
