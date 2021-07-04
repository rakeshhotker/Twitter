import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
function App() {
	return (
		<div className='app'>
			<Sidebar />
			<Feed username='roshan973' />
		</div>
	);
}

export default App;
