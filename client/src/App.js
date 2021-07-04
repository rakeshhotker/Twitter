import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Connections from './Connection';
function App() {
	return (
		<div className='app'>
			<Sidebar username='roshan973' />
			<Feed username='roshan973' />
			<Connections username='roshan973' />
		</div>
	);
}

export default App;
