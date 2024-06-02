import React, { useState } from 'react';
import './styles.css';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [profession, setProfession] = useState('');
  const [goal, setGoal] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !whatsapp || !profession || !goal || !city) {
      alert('Please fill in all fields.');
      return;
    }

    // If all fields are filled, proceed with form submission
    alert('Form submitted successfully!');
    console.log('Form submitted:', { name, whatsapp, profession, goal, city });

    setName('');
    setWhatsapp('');
    setProfession('');
    setGoal('');
    setCity('');
  };

  return (
    <div className="m-4 mr-6 ">
      <h1 className='flex flex-col items-center justify-center p-1.5 mt-4 text-xs font-bold leading-4 text-white uppercase bg-pink-500  rounded-t-lg'>
        Fill the form below to inquire
      </h1>
      <div className="items-center w-full font-semibold bg-white rounded-none p-2">
        <form onSubmit={handleSubmit}>
          <div className="text-sm text-black mt-4 rounded-sm">* Enter your name</div>
          <div className="input-container mt-3 ">
            <input
              type="text"
              placeholder="Eg. Aneesha Mehra"
              className="input-field border w-full px-4 py-2 border-gray-300 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex text-sm text-black mt-4 mb-3">* Enter your WhatsApp Number</div>
          <div className="flex mb-4 md:w-1/3">
            <div className="input-container mr-2">
              <select
                className="select-field border border-gray-600 w-20"
                onChange={(e) => setWhatsapp(e.target.value)}
                required
              >
                <option value="">+00</option>
                <option value="+91">+91</option>
                <option value="+89">+89</option>
                <option value="+73">+73</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Eg. 00000000"
              className="rounded-lg border border-gray-300 px-4 py-1 w-full text-sm "
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
            />
          </div>

          <div className="text-sm text-black font-bold mt-4">* Select your profession</div>
          <div className="input-container mt-2">
            <select
              className="select-field border border-gray-600 w-20"
              onChange={(e) => setProfession(e.target.value)}
              required
            >
              <option value="">Choose the most relevant option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="text-sm text-black mt-4">* Select your goal</div>
          <div className="input-container mt-3">
            <select
              className="select-field border border-gray-600 w-20"
              onChange={(e) => setGoal(e.target.value)}
              required
            >
              <option value="">Choose the most relevant option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="text-sm text-black mt-4">* Select your city</div>
          <div className="input-container mt-3">
            <select
              className="select-field border border-gray-600 w-20"
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="">Choose the most relevant option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <button className="submit-button mt-12 mb-2 gradient-bg text-white w-full py-2 rounded" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
