import { useContext } from "react";
import { useSettingsStore } from "../stores/settings-store";

export const HelpModal = () => {
  const helpOpen = useSettingsStore(store => store.helpOpen);
  const closeHelp = useSettingsStore(store => store.closeHelp);

  if (!helpOpen) return <></>;
  return (
    <div
      className="modal modal-bottom sm:modal-middle modal-open"
      onClick={closeHelp}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">BLD Tools</h3>
        <label className="btn btn-sm btn-circle absolute right-3 top-3">✕</label>
        <p className="py-4">
          Welcome to BLD Tools, a collection of tools I use for getting better at blindfolded speedsolving events.
          This tool is primarly to be used in combination with a bluetooth smart cube but can be used on its own.
          <br/><br/>
          Press and hold space or hover over the relavent label to view the solution to the current case.
        </p>
        
        <p className="pb-2">
          There are some integrated commands which can be executed from the cube these are as follows:
        </p>
          
          <div className="mockup-code">
            <pre data-prefix="$" className="text-info"><code>D' D  D' D  -&gt; Hints the next move</code></pre> 
            <pre data-prefix="$" className="text-warning"><code>D' D' D' D' -&gt; Retries the current case</code></pre> 
            <pre data-prefix="$" className="text-error"><code>D  D  D  D  -&gt; Skips to the next case</code></pre> 
          </div>
      </div>
    </div>
  );
};
