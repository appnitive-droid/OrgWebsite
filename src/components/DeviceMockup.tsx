export function DeviceMockup({ appName = "Your day, in focus" }: { appName?: string }) {
  return (
    <div className="device-scene" aria-label={`Abstract Android app preview for ${appName}`} role="img">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <div className="device device-back"><div className="device-screen screen-blue"><span className="mini-pill" /><div className="mini-card" /><div className="mini-card short" /></div></div>
      <div className="device device-front"><div className="device-screen"><div className="device-status"><span>9:41</span><span>●</span></div><div className="device-app-mark">CN</div><p className="device-label">{appName}</p><div className="progress-ring"><span>72%</span></div><div className="mini-row"><span /><span /><span /></div></div></div>
      <div className="floating-chip chip-top">Privacy-conscious</div><div className="floating-chip chip-bottom">Built for Android</div>
    </div>
  );
}
