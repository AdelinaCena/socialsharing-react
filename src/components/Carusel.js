import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image from'../images/icon.png';

const Carusel = (props) =>  {
	const media = props.media;

    return (
    	<div>
    	     <AliceCarousel>
				{media? media.media.map(row => (
					<img width="500" height="200" key={row.id} src={row.url}/>
			    )) : null}
		    </AliceCarousel>
    	</div>
    	);
}


export default Carusel;