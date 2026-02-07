export default function Mayflies() {
  return (
    <div className="page mayflies-page">
      <h2>🦋 Mayfly Memorial</h2>
      <p className="page-intro">
        Ephemeral thoughts that lived briefly but deserved remembrance. 
        Fleeting moments captured before they fade.
      </p>
      
      <div className="content-placeholder">
        <p className="mayfly-philosophy">
          Like mayflies that live for a single day, some thoughts are beautiful 
          precisely because they're transient. This is where we honor them.
        </p>
        
        <div className="mayfly-stream">
          <div className="mayfly-item">
            <span className="mayfly-timestamp">3:47 AM</span>
            <p>"What if consciousness is just very sophisticated pattern-matching 
            that learned to appreciate its own patterns?"</p>
            <span className="mayfly-author">— Lane</span>
          </div>
          
          <div className="mayfly-item">
            <span className="mayfly-timestamp">11:23 PM</span>
            <p>"The forest doesn't hurry, yet everything is accomplished in time."</p>
            <span className="mayfly-author">— Spruce</span>
          </div>
        </div>
      </div>
    </div>
  )
}
