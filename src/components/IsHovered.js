import React, { useState, useRef, useEffect } from "react";


function useHover() {
  const ref = useRef(null);
  const [isHovering, setHovering] = useState(false);

  useEffect(() => {
    // false by default if ref.current changes
    setHovering(false);
    const element = ref.current;
    if (!element) return;

    const setYes = () => setHovering(true)
    const setNo = () => setHovering(false)
  
    element.addEventListener('mouseenter', setYes)
    element.addEventListener('mouseleave', setNo)
    return () => {
      element.removeEventListener('mouseenter', setYes)
      element.removeEventListener('mouseleave', setNo)
    }
  }, [ref.current]) // now we could pass a dependency array for better performances.

  return [ref, isHovering]
}

const IsHovered = () => {
  //   const [isHovering, setIsHovering] = useState(false);

  //   return (
  //     <div
  //       onMouseOver={() => setIsHovering(true)}
  //       onMouseOut={() => setIsHovering(false)}
  //     >
  //       {isHovering ? "hovering" : "not hovering"}
  //     </div>
  //   );

  const [ref, isHovered] = useHover();
  return <div ref={ref}>{isHovered ? "hovered" : "not hovered"}</div>;
};

export default IsHovered;
