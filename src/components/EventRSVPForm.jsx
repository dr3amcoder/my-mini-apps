import { useState } from "react";

const EventRSVPForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [dietaryPreferences, setDietaryPreferences] = useState("")
  const [isBringingPlusOne, setIsBringingPlusOne] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    const newSubmittedData = {
      name,
      email,
      number,
      dietaryPreferences,
      isBringingPlusOne
    }

    setFormSubmitted(newSubmittedData)

  }


  return(
    <div className="container">
        <h2 className="title-md">Event RSVP</h2>
        <form onSubmit={handleSubmit}>
            <div className="event-form-details">
                <label>
                Name: 
                <input 
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                </label>
                <br />
                <label>
                Email: 
                <input
                    type="email"
                    required 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                </label>
                <br />
                <label>
                Number of attendees: 
                <input
                    type="number"
                    required 
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
                </label>
                <br />
                <label>
                Dietary preferences: 
                <input
                    type="text"
                    value={dietaryPreferences}
                    onChange={e => setDietaryPreferences(e.target.value)}
                />
                </label>
                <br />
                <label>
                Bringing additional guests?
                <input
                    type="checkbox"
                    checked={isBringingPlusOne}
                    onChange={e => setIsBringingPlusOne(e.target.checked)} 
                />
                </label>
                <br />
            </div>
            <button
                className='submit-btn'
                type="submit"
            >
                Submit RSVP
            </button>
        </form>
        {Object.keys(formSubmitted).length > 0 && (
            <div className="rsvp-details">
            <h3 id="event-rsvp-confirmation">RSVP Submitted!</h3>
            <p>Name: {formSubmitted.name}</p>
            <p>Email: {formSubmitted.email}</p>
            <p>Number of attendees: {formSubmitted.number}</p>
            <p>Dietary preferences: {formSubmitted.dietaryPreferences}</p>
            <p>Bringing additional guests: {formSubmitted.isBringingPlusOne ? "Yes" : "No"}</p>
            </div>
        )}
    </div>
  )
}


export default EventRSVPForm;