import Header from './Header';
import Footer from './Footer';

type Props = {
	children?: React.ReactNode;
};

const Layout: React.FC<any> = ({ children }: Props) => {
	return (
		<div className='body'>
			<Header />
			<main className='main'>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
