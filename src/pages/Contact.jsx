import { Form, useNavigate } from "react-router";
import { z } from 'zod/v4';// Define a schema for form validation
import { useState } from 'react';

// Define a schema for form validation

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.email("Invalid email address"), //"email" har indbygget email validering med regex, muligt at tilpasse med egen regex
    message: z.string().min(1, "Message is required"),
    subscribe: z.boolean().optional(),
});


export default function Contact() {    
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState(false);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("form submitted:", data);
        data.subscribe = formData.get("subscribe") === "on";    // Convert checkbox value to boolean


         
        const result = contactSchema.safeParse(data);
    
        if (!result.success) {
            console.log("there where errrors")
            const errors = z.treeifyError(result.error);
            console.log(errors);
            setErrors(errors.properties);
        } else {
            setErrors({});
            setSuccessMessage(true); //lav succes besked
            console.log('Valid data:', result.data);
        }
    
        fetch("https://jsonplaceholder.typicode.com/users", { //til "loader" metode: const response = await fetch("",...)
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(result.data), // Use the validated data
        })
            .then(response => {
                console.log("data was sent sussesfully");
                if (response.ok) navigate("/tak");
            }
            )
        };


    return (
        <>
            <h1>Contact</h1>


            <Form method="post" action="/contact" onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                    <p>{errors && errors?.name?.errors[0]}</p>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                    <p>{errors && errors?.email?.errors[0]}</p>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" ></textarea>
                    <p>{errors && errors?.message?.errors[0]}</p>
                </div>
                <div>
                    <label htmlFor="subscribe">Subscribe to newsletter:</label>
                    <input type="checkbox" id="subscribe" name="subscribe" />
                </div>
                <button type="submit">Submit</button>
            </Form>

            {/* Succesbesked */}
            {successMessage && (
                <p style={{ color: 'black', marginTop: '1em', fontSize: '14px' }}>
                    Tak for din besked! Vi vender tilbage hurtigst muligt.
                </p>
            )}
        </>
    )

}