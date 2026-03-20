'use client';

import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductGridLoader = () => {
  // Dummy array for grid items
  const placeholders = new Array(12).fill(null);

  return (
    <SkeletonTheme baseColor="#b6bdd136" highlightColor="#19b4ef4d">
      <div className="px-2 md:px-8 py-6">
        {/* Filter bar (search + sort) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <Skeleton width={300} height={40} />
          <Skeleton width={120} height={40} />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {placeholders.map((_, index) => (
            <div
              key={index}
              className="bg-white rounded p-3 shadow-sm flex flex-col gap-2"
            >
              <Skeleton height={160} className="rounded" />
              <Skeleton width="70%" height={16} />
              <Skeleton width="50%" height={16} />
              <Skeleton width="30%" height={14} />
              <div className="flex justify-between mt-2">
                <Skeleton width={60} height={32} />
                <Skeleton circle width={32} height={32} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ProductGridLoader;
