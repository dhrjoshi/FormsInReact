import { useState } from "react";
import "./App.css";

function App() {
    
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "India",
        streetAddress: "",
        city: "",
        state: "",
        postalCode: "",
        comments: false,
        candidates: false,
        offers: false,
        pushNotification: ""
    });

    function changeHandler(event) {
        const {name, value, checked, type} = event.target;
        setFormData((prev) => ({...prev, [name]: type === "checkbox" ? checked : value}));
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(formData);
    }
    
    return (
        <div className="flex flex-col items-center mt-2">
            <form onSubmit={submitHandler}>

                <label htmlFor="firstName">First Name</label>
                <br></br>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Dhruv"
                    value={formData.firstName}
                    onChange={changeHandler} 
                    className="outline"
                />

                <br></br><br></br>

                <label htmlFor="lastName">Last Name</label>
                <br></br>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Joshi"
                    value={formData.lastName}
                    onChange={changeHandler} 
                    className="outline"
                />

                <br></br><br></br>

                <label htmlFor="email">Email Address</label>
                <br></br>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="abc@xyz.com"
                    value={formData.email}
                    onChange={changeHandler} 
                    className="outline"
                />

                <br></br><br></br>

                <label htmlFor="country">Country</label>
                <br></br>
                <select 
                    name="country"
                    id="country"
                    value={formData.country}
                    onChange={changeHandler}
                    className="outline"
                >
                        
                    <option>India</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>

                </select>

                <br></br><br></br>

                <label htmlFor="streetAddress">Street Address</label>
                <br></br>
                <input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    placeholder="B-25C"
                    value={formData.streetAddress}
                    onChange={changeHandler} 
                    className="outline"
                />

                <br></br><br></br>

                <label htmlFor="city">City</label>
                <br></br>
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="New Delhi"
                    value={formData.city}
                    onChange={changeHandler} 
                    className="outline"
                />

                <br></br><br></br>

                <label htmlFor="state">State / Province</label>
                <br></br>
                <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Delhi"
                    value={formData.state}
                    onChange={changeHandler} 
                    className="outline"
                />

                <br></br><br></br>

                <label htmlFor="email">Postal Code</label>
                <br></br>
                <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    placeholder="1100xx"
                    value={formData.postalCode}
                    onChange={changeHandler} 
                    className="outline"
                />

                <br></br><br></br>

                <fieldset>
                    <legend>By Email</legend>

                    <div className="flex">
                        <input
                            name="comments"
                            id="comments"
                            type="checkbox"
                            checked={formData.comments}
                            onChange={changeHandler}
                        />
                        <div>
                            <label htmlFor="comments">Comments</label>
                            <p>Get notified when someone posts a comment on a posting.</p>
                        </div>
                    </div>

                    <div className="flex">
                        <input
                            name="candidates"
                            id="candidates"
                            type="checkbox"
                            checked={formData.candidates}
                            onChange={changeHandler}
                        />
                        <div>
                            <label htmlFor="candidates">Candidates</label>
                            <p>Get notified when candidate apply for job.</p>
                        </div>
                    </div>

                    <div className="flex">
                        <input
                            name="offers"
                            id="offers"
                            type="checkbox"
                            checked={formData.offers}
                            onChange={changeHandler}
                        />
                        <div>
                            <label htmlFor="offers">Offers</label>
                            <p>Get notified when candidate accepts or reject an offer.</p>
                        </div>
                    </div>
                </fieldset>

                <br></br><br></br>

                <fieldset>
                    <legend>Push Notifications</legend>
                    <p>These are delivered via SMS to your mobile.</p>

                    <input
                        type="radio"
                        id="pushEverything"
                        name="pushNotification"
                        value="Everything"
                        onChange={changeHandler}
                    />
                    <label htmlFor="pushEverything">Everything</label>
                    
                    <br></br>
                    
                    <input
                        type="radio"
                        id="pushEmail"
                        name="pushNotification"
                        value="Same as Email"
                        onChange={changeHandler}
                    />
                    <label htmlFor="pushEmail">Same as Email</label>
                    
                    <br></br>
                    
                    <input
                        type="radio"
                        id="pushNothing"
                        name="pushNotification"
                        value="No Push Notifications"
                        onChange={changeHandler}
                    />
                    <label htmlFor="pushNothing">No Push Notifications</label>

                </fieldset>

                <br></br>

                <button className="bg-blue-500 text-white rounded-sm px-5 py-2 font-bold">
                    Save
                </button>

            </form>
        </div>
    );
}

export default App;