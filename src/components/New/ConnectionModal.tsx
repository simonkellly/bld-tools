export const ConnectionModal = () => (
  <div className="modal modal-bottom sm:modal-middle _modal-open">
    <div className="modal-box">
      <h3 className="font-bold text-lg">No smart cube connected!</h3>
      <p className="py-4">
        Please connect a smart cube to use this trainer. At the moment only the
        GAN 356i is officially supported. Some devices and browsers may not support
        web-bluetooth (such as Opera GX).
      </p>
      <div className="modal-action">
        <button className="btn btn-secondary">I Don't Have One</button>
        <button className="btn btn-primary">Connect</button>
      </div>
    </div>
  </div>
);
