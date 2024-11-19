import { BoxSizing } from './cssConcepts/boxSizing';
import { WidthAutoVSHundredPercent } from './cssConcepts/widthAutoVSHundredPercent';
import { HeightAutoVSHundredPercent } from './cssConcepts/heightAutoVSHundredPercent';
import { MinMaxWidthAndHeight } from './cssConcepts/minMaxWidthAndHeight';
import { IntrinsicVsExtrinsicSizing } from './cssConcepts/intrinsicVsExtrinsicSizing';
import { Display } from './cssConcepts/display';
import { MediaQuery } from './cssConcepts/mediaQuery';
import Test from './cssConcepts/Experiment/experiment';
import Grid from './cssConcepts/grid/grid';
import { ContainingBlock } from './cssConcepts/containingBlock';
import { BlockFormattingContext } from './cssConcepts/blockFormattingContext';
import { InlineFormattingContext } from './cssConcepts/inlineFormattingContext';
import { Floats } from './cssConcepts/float';
import { MarginCollapsing } from './cssConcepts/marginCollapsing';
import { BallLinearAnimation } from './animations/BallLinearAnimation';
import { BasicTransition } from './animations/BasicTransition';
import { ToggleButtons } from './toggleButtons';
import { PseudoElements } from './pseudoElements';
import { RangeInput } from './rangeInput';
import { DragDrop } from './dragDrop';
import { Height } from './cssConcepts/height';
// import { FlexBox } from './flexBox';

import './App.css';
import { ColorSystem as SudokuColorSystem } from './sudokuColorSystem';


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
      <Grid />
      {/* <ContainingBlock /> */}
      {/* <BlockFormattingContext /> */}
      {/* <InlineFormattingContext /> */}
      {/* <Floats /> */}
      {/* <MarginCollapsing /> */}
      {/* <BallLinearAnimation /> */}
      {/* <BasicTransition /> */}
      {/* <ToggleButtons /> */}
      {/* <PseudoElements /> */}
      {/* <RangeInput /> */}
      {/* <DragDrop /> */}
      {/* <FlexBox /> */}
      {/* <SudokuColorSystem /> */}
      {/* <Height /> */}
    </div>
  );
}

export default App;
