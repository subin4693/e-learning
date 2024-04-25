import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { useNavigate, useParams } from "react-router-dom";
import { enrollCourse, userToInstructor } from "@/api/api";
import { toast } from "react-toastify";

// import "./payment.css";

const stripePromise = loadStripe(
    "pk_test_51LwqOKSFbpHA21vyYlHBOPAh0GYLUqTD6dYffkfrdl8w5MxcoJZvyuFSy54bgbKoQ3HD1J9CIqk1CJTfbXT3ygay00xpnjNc9X"
);

const Payment = () => {
    const [clientSecret, setClientSecret] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const buyCourse = async () => {
        try {
            const res = await enrollCourse(id);

            setClientSecret(res.clientSecret);
        } catch (error) {
            toast("Already purcheased");
            navigate("/start-learning");
            console.log(error);
        }
    };

    const convertToInstructor = async () => {
        try {
            const res = await userToInstructor();

            setClientSecret(res.clientSecret);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (id) buyCourse();
        else {
            convertToInstructor();
        }
    }, []);

    const appearance = {
        theme: "stripe",
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <div className="App">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
};

export default Payment;
