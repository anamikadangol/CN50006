import './App.css';

function AppColor(props) {
  
  function changeColor() {
    document.body.style.backgroundColor = props.color; 
    alert(`Background changed to ${props.color}`);
  }

  return (
    <div className="App">
      <h1>{props.heading}</h1>
      <label>{props.label}</label>
      <input type="text" placeholder="Enter your name" />
      <button onClick={changeColor}>Change to {props.color}</button>
    </div>
  );
}

export default AppColor;