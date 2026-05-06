import React from 'react'

const ReviewItem = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 pb-8 sm:pb-10 border-b border-black/60 last:border-0 last:pb-0">
      {/* Reviewer */}
      <div className="sm:w-32 shrink-0 flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gray-300 rounded-full shrink-0" />
        <div className="flex flex-col items-start sm:mt-4">
          <p className="text-sm font-bold leading-tight">Jane Doe</p>
          <p className="text-[11px] sm:text-[12px] font-bold uppercase underline leading-tight">
            Restaurant
          </p>
          <p className="text-[11px] sm:text-[12px] text-[#FF8400] font-bold underline leading-tight">
            14 Reviews
          </p>
        </div>
      </div>

      {/* Review Content */}
      <div className="flex-1">
        <h3 className="font-bold text-lg md:text-xl leading-tight">
          Title of Review
        </h3>
        <p className="text-gray-700 font-normal mb-4 uppercase text-xs sm:text-sm leading-tight">
          Month XX, YEAR
        </p>
        <p className="text-[12px] sm:text-[13px] md:text-sm leading-relaxed text-justify font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo metus vitae urna eleifend,
          a tristique sapien fringilla. Aliquam scelerisque ante tellus, eget consequat mi sollicitudin vel.
          Duis viverra semper mauris. Pellentesque iaculis purus sollicitudin ligula cursus vestibulum.
          Integer aliquam urna vitae porta ultrices. Fusce aliquam odio vel nunc lacinia volutpat ac non diam.
        </p>
      </div>
    </div>
  );
}

export default ReviewItem
