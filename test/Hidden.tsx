import { useState } from "react";

export const Hidden = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <span>Hidden</span>}
    </div>
  );
};
