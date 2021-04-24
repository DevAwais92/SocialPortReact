import React, { useState } from 'react'

const Contact = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const InputHandler = (event) => {
        const { name, value } = event.target;
        setInput((prevalues) => {
            return {
                ...prevalues,
                [name]: value,
            };
        });
    };

    const SubmitHandler = (event) => {
        event.preventDefault();
        alert(`Name: ${input.name}
Email: ${input.email}
Phone: ${input.phone}
Message: ${input.message}`);
    };

    return (
        <div>
            <div className="my-5">
                <h1 className="text-center"> Contact us </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={SubmitHandler}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name.." name="name" value={input.name} onChange={InputHandler} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email..." name="email" value={input.email} onChange={InputHandler} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Phone..." name="phone" value={input.phone} onChange={InputHandler} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message..." rows="3" name="message" value={input.message} onChange={InputHandler}></textarea>
                            </div>
                            <div className="col-12 my-5">
                                <button className="btn btn-danger">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
