import React from 'react'
import './App.css';
import DataFetching from './Components/DataFetching';
// import ClassCounterOne from './Components/ClassCounterOne';
// import ClassCounter from './Components/ClassCounter';
// import UseEffectCounter from './Components/UseEffectCounter';
// import useStateCounter from './Components/useStateCounter';
// import UseStateCounterFour from './Components/UseStateCounterFour';
// import UseStateCounterThree from './Components/UseStateCounterThree';
// import UseStateCounterTwo from './Components/UseStateCounterTwo';
// import MouseMoveClass from './Components/MouseMoveClass';
// import MouseMoveHooks from './Components/MouseMoveHooks';
// import MouseContainer from './Components/MouseContainer';
import IntervalClassCounter from './Components/IntervalClassCounter';
import IntervalHookCounter from './Components/IntervalHookCounter';
import UseContextC from './Components/UseContextC';
import CounterOne from './ReducerHook/CounterOne';
import CounterThree from './ReducerHook/CounterThree';
import CounterTwo from './ReducerHook/CounterTwo';
import ContextReducer from './ReducerHook/ContextReducer';
import DataFetchingOne from './FetchData/DataFetchingOne';
import DataFetchingTwo from './FetchData/DataFetchingTwo';
import ParentComponent from './CallBackHooks/ParentComponent';
import Counter from './UseMemoHook/Counter';
import FocusInput from './UseRefsHooks/FocusInput';
import ClassTImer from './UseRefsHooks/ClassTImer';
import HookTimer from './UseRefsHooks/HookTimer';
import DocTitle from './CustomHooks/DocTitle';
import DocTitleTwo from './CustomHooks/DocTitleTwo';
import CustomCounterOne from './CustomHooks/CustomCounterOne';
import CustomCounterTwo from './CustomHooks/CustomCounterTwo';
import UserForm from './CustomHooks/UserForm';


export const UserContext = React.createContext()
export const JobContext = React.createContext()



function App() {
  
  return (

    <div className="App">
      {/* <ClassCounter />
      <useStateCounter /> */}
      {/* <ClassCounterOne /> */}
      {/* <UseStateCounterTwo /> */}
      {/* <UseStateCounterThree /> */}
      {/* <UseStateCounterFour /> */}
      {/* <UseEffectCounter /> */}
      {/* <MouseMoveClass /> */}

      {/* <MouseMoveHooks /> */}

      {/* <MouseContainer /> */}

      {/* <IntervalClassCounter />

      <IntervalHookCounter /> */}

      {/* <DataFetching /> */}

      {/* Learning UseContext */}
      {/* <UserContext.Provider value ={'Jaykumar'} >
        <JobContext.Provider value={'React Developer'} >
          <UseContextC />
        </JobContext.Provider>
      </UserContext.Provider> */}

      {/* Learning UseReducers */}

      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}

      {/* <ContextReducer /> */}

      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}

      {/* Learning useCallback Hooks */}

      {/* <ParentComponent /> */}

      {/* LEarning useMemo Hooks */}

      {/* <Counter /> */}

      {/* LEarning useRefs Hooks */}

      {/* <FocusInput /> */}
      {/* <ClassTImer />

      <HookTimer /> */}

      {/* Learning Custom Hooks */}

      {/* <DocTitle />
      <DocTitleTwo /> */}

      {/* <CustomCounterOne />
      <CustomCounterTwo /> */}
      <UserForm />

    </div>
    
  );
}

export default App;
