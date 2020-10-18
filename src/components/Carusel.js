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
				      <video width="100%" controls>
						  <source src="mov_bbb.mp4" type="video/mp4"/>
						  <source src="mov_bbb.ogg" type="video/ogg"/>
						  Your browser does not support HTML video.
						</video>
					)) : null}
		    </AliceCarousel>
    	</div>
    	);
}


export default Carusel;