import { useState } from 'react';
import { Counter } from './Counter';

export const UseStateDemo = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [showCounter, setShowCounter] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFirstName('');
    setLastName('');
    setEmail('');
  };

  const handleToggle = () => {
    setShowCounter((counter) => !counter);
  };

  return (
    <>
      <div className="header">useState Demo</div>
      <div className="flex-row">
        <button className="button" onClick={handleToggle}>
          Toggle Counter
        </button>
      </div>

      <hr />
      <div className="container">
        {showCounter ? (
          <Counter />
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
};
