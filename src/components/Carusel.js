import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image from'../images/icon.png';

const Carusel = (props) =>  {
	const media = props.media;

    return (
    	<div>
    	     <AliceCarousel>
				{media && media.hasOwnProperty('media')? media.media.map(row => (
				      <img src={row.url} className="sliderimg" alt=""/>
					)) : null}
		    </AliceCarousel>
    	</div>
    	);
}

export default Carusel;