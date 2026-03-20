'use client';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductFilterForMobileLoader = () => {
  return (
    <SkeletonTheme baseColor="#b6bdd136" highlightColor="#19b4ef4d">
      <div className="px-2 md:px-8 md:hidden">
        {/* Filter bar (search + sort) */}
        <div className="flex flex-col mb-6 gap-2">
          <Skeleton width={`60%`} height={14} />
          <Skeleton width={150} height={8} />
          <Skeleton width={180} height={8} />
          <Skeleton width={118} height={8} />
          <Skeleton width={160} height={8} />
          <Skeleton width={180} height={8} />
        </div>
        {/* Filter bar (search + sort) */}
        <div className="flex flex-col mb-6 gap-2">
          <Skeleton width={`60%`} height={14} />
          <Skeleton width={150} height={8} />
          <Skeleton width={180} height={8} />
          <Skeleton width={118} height={8} />
          <Skeleton width={160} height={8} />
          <Skeleton width={180} height={8} />
        </div>

      </div>
    </SkeletonTheme>
  );
};

export default ProductFilterForMobileLoader;
