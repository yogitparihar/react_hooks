import './App.css';
import { MemoizationComponent } from './Hooks/Memoization';
import { Counter } from './Hooks/Memoization/Counter';
import { UseCallbakHook } from './Hooks/UseCallbackHook';
import { CountMemo } from './Hooks/UseMemoHook';
import { UseRefHook } from './Hooks/UseRefHook';
function App() {
  return (
    <div className="App">
      <UseRefHook/>
    </div>
  );
}

export default App;
