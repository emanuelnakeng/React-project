import React from 'react';
import './BookItem.css';

const BookItem = props => {
	const { name, price: amount, author, thumbnail, sale, children } = props;
	return (
		<article className='bookitem'>
			<div>
				<img src={thumbnail} alt='children book' />
			</div>
			<div>
				<h4>${sale}</h4>
				<p
					style={{
						textDecoration: 'line-through',
						fontSize: '0.8rem',
					}}
				>
					${amount}
				</p>
				<h4>{name}</h4>
				<p className='author'>{author}</p>
				{children}
				<button
					onMouseOver={() => console.log('Book added to cart!')}
					style={{
						backgroundColor: 'red',
						padding: '5px 10px',
						borderRadius: '1rem',
						marginTop: '1rem',
						color: 'white',
					}}
				>
					Add to cart
				</button>
			</div>
		</article>
	);
};

export const emanuel = {
	name: 'Emanuel',
	surname: 'Nakeng',
	age: 28,
	job: 'phlebotomist',
};

export default BookItem;
