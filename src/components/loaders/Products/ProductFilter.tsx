
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductFilterLoader = () => {

  return (
    <SkeletonTheme baseColor="#b6bdd136" highlightColor="#19b4ef4d">
      <div className="px-2 md:px-8 hidden md:block">
        {/* Filter bar (search + sort) */}
        <div className="flex flex-col mb-6 gap-4">
          <Skeleton width={`60%`} height={20} />
          <Skeleton width={150} height={10} />
          <Skeleton width={100} height={10} />
          <Skeleton width={110} height={10} />
          <Skeleton width={160} height={10} />
          <Skeleton width={100} height={10} />
        </div>
        {/* Filter bar (search + sort) */}
        <div className="flex flex-col mb-6 gap-4">
          <Skeleton width={`60%`} height={20} />
          <Skeleton width={150} height={10} />
          <Skeleton width={100} height={10} />
          <Skeleton width={110} height={10} />
          <Skeleton width={160} height={10} />
          <Skeleton width={100} height={10} />
        </div>

      </div>
    </SkeletonTheme>
  );
};

export default ProductFilterLoader;
