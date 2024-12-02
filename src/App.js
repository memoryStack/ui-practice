import { Routes, Route} from "react-router-dom";

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
import { FlexBox } from './cssConcepts/flexBox';
import './App.css';
import { ColorSystem as SudokuColorSystem } from './sudokuColorSystem';
import { ROUTES, ROUTES_URLS } from "./routes";
import ClipboardEvents from "./cssConcepts/ClipboardEvents";
import Home from "./home";
import Blob from './cssConcepts/Blob'
import InputMethodEditor from "./cssConcepts/InputMethodEditor";
import CompositionEvent from "./cssConcepts/CompositionEvent";
import Clipboard from "./cssConcepts/Clipboard";
import AsynchronousCSS from "./cssConcepts/asynchronousCSS";
import CompressTextAssets from './cssConcepts/textBasedAssetsCompression'

const ROUTES_VS_UI = {
  [ROUTES.HOME]: {
    url: ROUTES_URLS.HOME,
    component: Home,
  },
  [ROUTES.BOX_SIZING]: {
    url: ROUTES_URLS.BOX_SIZING,
    component: BoxSizing,
  },
  [ROUTES.WIDTH_AUTO_VS_HUNDRED_PERCENT]: {
    url: ROUTES_URLS.WIDTH_AUTO_VS_HUNDRED_PERCENT,
    component: WidthAutoVSHundredPercent,
  },
  [ROUTES.HEIGHT_AUTO_VS_HUNDRED_PERCENT]: {
    url: ROUTES_URLS.HEIGHT_AUTO_VS_HUNDRED_PERCENT,
    component: HeightAutoVSHundredPercent,
  },
  [ROUTES.MIN_MAX_WIDTH_AND_HEIGHT]: {
    url: ROUTES_URLS.MIN_MAX_WIDTH_AND_HEIGHT,
    component: MinMaxWidthAndHeight,
  },
  [ROUTES.INTRINSIC_VS_EXTRINSIC_SIZING]: {
    url: ROUTES_URLS.INTRINSIC_VS_EXTRINSIC_SIZING,
    component: IntrinsicVsExtrinsicSizing,
  },
  [ROUTES.DISPLAY]: {
    url: ROUTES_URLS.DISPLAY,
    component: Display,
  },
  [ROUTES.MEDIA_QUERY]: {
    url: ROUTES_URLS.MEDIA_QUERY,
    component: MediaQuery,
  },
  [ROUTES.TEST]: {
    url: ROUTES_URLS.TEST,
    component: Test,
  },
  [ROUTES.CONTAINING_BLOCK]: {
    url: ROUTES_URLS.CONTAINING_BLOCK,
    component: ContainingBlock,
  },
  [ROUTES.BLOCK_FORMATTING_CONTEXT]: {
    url: ROUTES_URLS.BLOCK_FORMATTING_CONTEXT,
    component: BlockFormattingContext,
  },
  [ROUTES.INLINE_FORMATTING_CONTEXT]: {
    url: ROUTES_URLS.INLINE_FORMATTING_CONTEXT,
    component: InlineFormattingContext,
  },
  [ROUTES.FLOATS]: {
    url: ROUTES_URLS.FLOATS,
    component: Floats,
  },
  [ROUTES.MARGIN_COLLAPSING]: {
    url: ROUTES_URLS.MARGIN_COLLAPSING,
    component: MarginCollapsing,
  },
  [ROUTES.BALL_LINEAR_ANIMATION]: {
    url: ROUTES_URLS.BALL_LINEAR_ANIMATION,
    component: BallLinearAnimation,
  },
  [ROUTES.BASIC_TRANSITION]: {
    url: ROUTES_URLS.BASIC_TRANSITION,
    component: BasicTransition,
  },
  [ROUTES.TOGGLE_BUTTONS]: {
    url: ROUTES_URLS.TOGGLE_BUTTONS,
    component: ToggleButtons,
  },
  [ROUTES.PSEUDO_ELEMENTS]: {
    url: ROUTES_URLS.PSEUDO_ELEMENTS,
    component: PseudoElements,
  },
  [ROUTES.RANGE_INPUT]: {
    url: ROUTES_URLS.RANGE_INPUT,
    component: RangeInput,
  },
  [ROUTES.DRAG_DROP]: {
    url: ROUTES_URLS.DRAG_DROP,
    component: DragDrop,
  },
  [ROUTES.FLEX_BOX]: {
    url: ROUTES_URLS.FLEX_BOX,
    component: FlexBox,
  },
  [ROUTES.SUDOKU_COLOR_SYSTEM]: {
    url: ROUTES_URLS.SUDOKU_COLOR_SYSTEM,
    component: SudokuColorSystem,
  },
  [ROUTES.HEIGHT]: {
    url: ROUTES_URLS.HEIGHT,
    component: Height,
  },
  [ROUTES.CLIPBOARD_EVENT]: {
    url: ROUTES_URLS.CLIPBOARD_EVENT,
    component: ClipboardEvents,
  },
  [ROUTES.BLOB]: {
    url: ROUTES_URLS.BLOB,
    component: Blob,
  },
  [ROUTES.INPUT_METHOD_EDITORS]: {
    url: ROUTES_URLS.INPUT_METHOD_EDITORS,
    component: InputMethodEditor,
  },
  [ROUTES.COMPOSITION_EVENT]: {
    url: ROUTES_URLS.COMPOSITION_EVENT,
    component: CompositionEvent
  },
  [ROUTES.CLIPBOARD]: {
    url: ROUTES_URLS.CLIPBOARD,
    component: Clipboard
  },
  [ROUTES.LOAD_CSS_ASYNCHRONOUSLY]: {
    url: ROUTES_URLS.LOAD_CSS_ASYNCHRONOUSLY,
    component: AsynchronousCSS
  },
  [ROUTES.COMPRESS_TEXT_ASSETS]: {
    url: ROUTES_URLS.COMPRESS_TEXT_ASSETS,
    component: AsynchronousCSS
  },
};

function App() {
  return (
    <div className="App">
      <Routes>
        {
          Object.keys(ROUTES).map((route) => {
            const {url, component: Component} = ROUTES_VS_UI[route]
            return (<Route path={url} element={<Component />} />)
          })
        }
      </Routes>
    </div>
  );
}

export default App;
