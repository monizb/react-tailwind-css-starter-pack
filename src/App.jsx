import "./App.css";
import TypeTextStylePrimarySizeXsStateDefault from "./Comp2";
import TypeTextStylePrimarySizexsStateDefault2 from "./Comp1";
import DynamicInput from "./stories/DynamicInput";
import StateHover from "./StateHover";

function App() {
  return (
    <main className="flex justify-center gap-4 flex-col min-h-screen">
      {/* <h1 className="text-3xl text-center font-bold underline">React & Tailwind CSS Starter Pack</h1>
      <p className="text-center text-xl">This is a starter pack for React & Tailwind CSS projects.</p>
      <img src="https://bit.ly/3wsmzTy" alt="meme" className="mx-auto" /> */}
      <TypeTextStylePrimarySizexsStateDefault2 />
      <StateHover />
      <TypeTextStylePrimarySizeXsStateDefault/>
      <DynamicInput isInputDisabled={true}/>
    </main>
  );
}

export default App;
