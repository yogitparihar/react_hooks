import './App.css';
import { MemoizationComponent } from './Hooks/Memoization';
import { Counter } from './Hooks/Memoization/Counter';
import { UseCallbakHook } from './Hooks/UseCallbackHook';
import { CountMemo } from './Hooks/UseMemoHook';
function App() {
  return (
    <div className="App">
      <CountMemo/>
    </div>
  );
}

export default App;
