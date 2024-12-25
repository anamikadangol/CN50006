import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GreetingElementWithProp from './mygreetingprop';
import AppColor from './AppBackgroundColor';

ReactDOM.render(
  <React.StrictMode>
    {/* Task 5 */}
    <GreetingElementWithProp msg="Hey, it’s Monday!" />
    <GreetingElementWithProp msg="Hey, it’s Tuesday!" />
    <GreetingElementWithProp msg="Hey, it’s Wednesday!" />
    <GreetingElementWithProp msg="Hey, it’s Thursday!" />
    <GreetingElementWithProp msg="Hey, it’s Friday!" />
    <GreetingElementWithProp msg="Hey, it’s Saturday!" />
    <GreetingElementWithProp msg="Hey, it’s Sunday!" />

    {/* Task 6 */}
    <AppColor heading="This is 1st Element" label="Enter Name:" color="green" />
    <AppColor heading="This is 2nd Element" label="Enter Name:" color="blue" />
    <AppColor heading="This is 3rd Element" label="Enter Name:" color="yellow" />
  </React.StrictMode>,
  document.getElementById('root')
);