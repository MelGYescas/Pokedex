import React from 'react';
import Layout from '../containers/Layout';
import Header from '../containers/Header';
import Search from '../containers/Search';
import Footer from '../containers/Footer';

import '../style/global.css';


const App = () => {
	return (
		<Layout>
			<Header />
			<Search />
			<Footer />
		</Layout>
	);
}

export default App;