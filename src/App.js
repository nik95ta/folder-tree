import FolderTree from './components/FolderTree';
import initialData from './data/initialData';
function App() {
  return (
      <div className='container'>
        <FolderTree currentDirectory={initialData} />
      </div>
  );
}

export default App;
