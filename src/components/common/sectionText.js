import React from 'react'

function SectionText({title}) {
  return (
    <>
     <div className="fs-1 mb-5 section-title h-3 ms-2 ms-md-0">
          <img
            src="../media/smalll-icons/sectionArrow.webp"
            className="mb-1"
            width="30"
          />
         {title}
        </div>
    </>
  )
}

export default SectionText