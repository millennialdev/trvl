import React from 'react';
import CardItem from './CardItem';

function Cards() {
	return (
		<div className='cards'>
			<h1>Check out these EPIC Destinations!</h1>
			<div className='cards__container'>
				<ul className='cards__items'>
					<CardItem />
				</ul>
			</div>
		</div>
	);
}

export default Cards;
