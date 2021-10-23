import React from 'react';
import Books from './components/Books';

const App = () => {
	const books = [
		{
			id: 1001,
			name: 'My first Learn-to-Write 1-2-3',
			price: 8.53,
			sale: 4.53,
			author: 'N. Emanuel',
			thumbnail:
				'https://images-na.ssl-images-amazon.com/images/I/81Ekpv7AwKL._AC._SR360,460.jpg',
		},
		{
			id: 1002,
			name: 'The Spooky wheels on the Bus',
			price: 3.99,
			author: 'N. Sbu',
			thumbnail:
				'https://images-na.ssl-images-amazon.com/images/I/91QIjV4x67L._AC._SR360,460.jpg',
		},
		{
			id: 1003,
			name: 'Road Crew, coming through!',
			price: 4.99,
			sale: 1.59,
			author: 'N. Leago',
			thumbnail:
				'https://images-na.ssl-images-amazon.com/images/I/A1N8fmNMZAL._AC._SR360,460.jpg',
		},
		{
			id: 1004,
			name: 'The little blue truck?',
			price: 12.49,
			sale: 6.99,
			author: 'N. Emanuel',
			thumbnail:
				'https://images-na.ssl-images-amazon.com/images/I/A1ee9JJRUCS._AC._SR360,460.jpg',
		},
		{
			id: 1005,
			name: 'Oppisites Abstracts',
			price: 16.99,
			sale: 7.99,
			author: 'MO Willems',
			thumbnail:
				'https://images-na.ssl-images-amazon.com/images/I/912Krx2TwTL._AC._SR360,460.jpg',
		},
		{
			id: 1006,
			name: 'If Animals Kissed Good Night',
			price: 8.53,
			author: 'N. Emanuel',
			thumbnail:
				'https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
		},
	];
	return (
		<>
			<h1>Best selling books</h1>
			<div className='books'>
				{/* <BookItem
					name={books[0].name}
					price={books[0].price}
					sale={books[0].sale}
					author={books[0].author}
					thumbnail={books[0].thumbnail}
				>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Tenetur, hic.
					</p>
				</BookItem>
				<BookItem
					name={books[1].name}
					price={books[1].price}
					sale={books[1].sale}
					author={books[1].author}
					thumbnail={books[1].thumbnail}
				/>
				<BookItem
					name={books[2].name}
					price={books[2].price}
					sale={books[2].sale}
					author={books[2].author}
					thumbnail={books[2].thumbnail}
				/>
				<BookItem
					name={books[3].name}
					price={books[3].price}
					sale={books[3].sale}
					author={books[3].author}
					thumbnail={books[3].thumbnail}
				/>
				<BookItem
					name={books[4].name}
					price={books[4].price}
					sale={books[4].sale}
					author={books[4].author}
					thumbnail={books[4].thumbnail}
				/>
				<BookItem
					name={books[5].name}
					price={books[5].price}
					sale={books[5].sale}
					author={books[5].author}
					thumbnail={books[5].thumbnail}
				/>
			</div> */}
				<Books data={books} />
			</div>
		</>
	);
};

export default App;
