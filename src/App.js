import { BoxSizing } from './cssConcepts/boxSizing';
import { WidthAutoVSHundredPercent } from './cssConcepts/widthAutoVSHundredPercent';
import { HeightAutoVSHundredPercent } from './cssConcepts/heightAutoVSHundredPercent';
import { MinMaxWidthAndHeight } from './cssConcepts/minMaxWidthAndHeight';
import { IntrinsicVsExtrinsicSizing } from './cssConcepts/intrinsicVsExtrinsicSizing';
import { Display } from './cssConcepts/display';
import { MediaQuery } from './cssConcepts/mediaQuery';
import Test from './cssConcepts/experiment';
import { ContainingBlock } from './cssConcepts/containingBlock';
import { BlockFormattingContext } from './cssConcepts/blockFormattingContext';
import { InlineFormattingContext } from './cssConcepts/inlineFormattingContext';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <BoxSizing /> */}
      {/* <WidthAutoVSHundredPercent /> */}
      {/* <HeightAutoVSHundredPercent /> */}
      {/* <MinMaxWidthAndHeight /> */}
      {/* <IntrinsicVsExtrinsicSizing /> */}
      {/* <Display /> */}
      {/* <MediaQuery /> */}
      {/* <Test /> */}
      {/* <ContainingBlock /> */}
      {/* <BlockFormattingContext /> */}
      <InlineFormattingContext />
    </div>
  );
}

export default App;
