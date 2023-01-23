import './App.css';
import Studentform from './Studentform';
import Helloword from './HelloWord';

function App() {
  return (
    <div className="App">
      <Helloword />
      <Studentform />
      <table className='table'>
        <thead>
          <tr className='tableheading'>
            <th className='thname'>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Degree</th>
            <th className='thbranch'>Branch</th>
          </tr>
        </thead>
        <tbody className='table' id="table-data"></tbody>
      </table>
    </div>
  );
}

export default App;

