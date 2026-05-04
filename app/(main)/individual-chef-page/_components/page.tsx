import React from 'react'

const ReviewItem = () => {
  return(
    <div className="flex gap-6 pb-8 border-b border-black last:border-0">
      {/* Reviewer Avatar / Branding */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-gray-300 rounded-full relative flex items-center justify-center">
          
        </div>
        <p className="text-[10px] mt-2 font-bold uppercase underline">Restaurant</p>
        <p className="text-[10px] text-orange-600 font-bold underline">14 Reviews</p>
      </div>

      {/* Review Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold">Title of Review</h3>
        <p className="text-gray-600 mb-4 uppercase text-sm">Month XX, YEAR</p>
        <p className="text-sm leading-relaxed text-justify">
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