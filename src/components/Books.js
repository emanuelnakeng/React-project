import React from 'react';
import BookItem from './BookItem';

const Books = props => {
	console.log(props.data);
	return (
		<div className='books'>
			{props.data.map(book => {
				const { id, name, price, sale, author, thumbnail } = book;
				return (
					<BookItem
						key={id}
						name={name}
						price={price}
						sale={sale}
						author={author}
						thumbnail={thumbnail}
					/>
				);
			})}
			{/* {books.map(book => {
				const { id, name, price, sale, author, thumbnail } = book;
				return (
					<BookItem
						key={id}
						name={name}
						price={price}
						sale={sale}
						author={author}
						thumbnail={thumbnail}
					/>
				);
			})} */}
		</div>
	);
};

export default Books;
