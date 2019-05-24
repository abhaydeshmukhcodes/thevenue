import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.3898805814347!2d73.80709981489262!3d18.5112754874144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfba558c99e7%3A0x9d780fd63ef5a65d!2sMaitreyi+Society!5e0!3m2!1sen!2sin!4v1554271339798!5m2!1sen!2sin"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>LOCATION</div>
      </div>
    </div>
  );
};

export default Location;
