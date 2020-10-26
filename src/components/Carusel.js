import React from 'react';
// Carusel
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Carusel = (props) =>  {
	const media = props.media;

    return (
    	<div>
    	     <AliceCarousel>
				{media? media.media.map(row => (
					<img 
					    width="600" height="300" 
					    key={row.id} src={row.url} alt="File missing"
				    />
			    )) : null}
		    </AliceCarousel>
    	</div>
	);
}

export default Carusel;