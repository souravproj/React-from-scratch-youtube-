import './App.css';
import Counter from './components/Counter';
 //import {Greet} from './components/Greet';//this is only for when we write export with function
import Messege from './components/Messege';
import Hello from './components/hello';
 import Greet from './components/Greet';
import Welcome from './components/welcome'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import Usergreeting from './components/Usergreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';

function App() {
  return (
    <div className="App">
      <StyleSheet/>
      {/* <NameList/> */}
      {/* <Usergreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/>
      <FunctionClick/> */}
      {/* <Counter/> */}
      {/* <Messege/> */}

     
     {/* for props purpose only */}

      {/* <Greet name="Bruce" heroName="Batsman">
        <p>This all are Children</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman"/> */}
    {/* <Welcome name="Bruce" heroName="Batsman"/>
    <Welcome name="Clark" heroName="Superman"/>
    <Welcome name="Diana" heroName="Wonder Woman"/> */}
        {/* <Hello/> */}
    </div>
  );
}

export default App;
