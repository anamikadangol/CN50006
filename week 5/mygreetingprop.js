import './App.css';

function GreetingElementWithProp(props) {
  return (
    <div className="App">
      <h1>{props.msg}</h1>
    </div>
  );
}

export default GreetingElementWithProp;