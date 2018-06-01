import React from "react";

const Weather = props => (
	<div className="weather__info">
	 {
	 	props.city && props.country && <p className="weather_city">
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p>
	 }
   {
    props.description && <p className="weather_desc">
      <span className="weather__value"> { props.description } </span>
   </p>
   }
	 {
	 	props.temperature && <p className="weather_temp">
	 		<span className="weather__value"> { props.temperature }	</span>
	 	°F</p>
	 }
	 {
	 	props.humidity && <p className="weather__key"> Humidity:
	 		<span className="weather__value"> { props.humidity } </span>
	 %</p>
	 }
   {
    props.wind && <p className="weather__key"> Wind Speed:
      <span className="weather__value"> { props.wind } </span>
    </p>
   }
   {
    props.temp_min && <p className="weather__key"> Low:
      <span className="weather__value"> { props.temp_min } </span>
    °F</p>
   }
   {
    props.temp_max && <p className="weather__key"> High:
      <span className="weather__value"> { props.temp_max } </span>
    °F</p>
   }
	 {
	 	props.error && <p className="weather__error">{ props.error }</p>
	 }
	</div>
);

export default Weather;
