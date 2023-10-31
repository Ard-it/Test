import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
    return (
        <BookingForm avaiableTimes={props.avaiableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>

    );
};

export default Booking;