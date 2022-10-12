import { BoxSizing } from './cssConcepts/boxSizing';
import { WidthAutoVSHundredPercent } from './cssConcepts/widthAutoVSHundredPercent';
import { HeightAutoVSHundredPercent } from './cssConcepts/heightAutoVSHundredPercent';
import { MinMaxWidthAndHeight } from './cssConcepts/minMaxWidthAndHeight';
import { IntrinsicVsExtrinsicSizing } from './cssConcepts/intrinsicVsExtrinsicSizing';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <BoxSizing /> */}
      {/* <WidthAutoVSHundredPercent /> */}
      {/* <HeightAutoVSHundredPercent /> */}
      {/* <MinMaxWidthAndHeight /> */}
      <IntrinsicVsExtrinsicSizing />
    </div>
  );
}

export default App;
