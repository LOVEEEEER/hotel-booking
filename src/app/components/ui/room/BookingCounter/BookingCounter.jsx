import React from "react";
import PropTypes from "prop-types";
import Counter from "../../../common/Counter";

const BookingCounter = ({ value, ...rest }) => {
    return (
        <>
            <Counter
                minValue={1}
                maxValue={5}
                label="Взрослых"
                name="adults"
                value={value.adults}
                {...rest}
            />
            <Counter
                minValue={0}
                maxValue={5}
                label="Детей"
                name="kids"
                value={value.kids}
                {...rest}
            />
        </>
    );
};

BookingCounter.propTypes = {
    value: PropTypes.object.isRequired
};

export default BookingCounter;
