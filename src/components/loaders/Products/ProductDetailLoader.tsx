
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductDetailLoader = () => {
  return (
    <SkeletonTheme baseColor="#b6bdd136" highlightColor="#19b4ef4d">
      <div className="main-container py-6 md:pt-36">
        {/* Main section */}
        <div className="flex flex-col lg:flex-row md:gap-6">
          {/* Left - Image Section */}
          <div className="w-full lg:w-1/2 ">
            <Skeleton height={400} className="rounded" />
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} width="100%" height={60} className="rounded" />
              ))}
            </div>
          </div>

          {/* Right - Info Section */}
          <div className="w-full lg:w-1/2 md:pt-12">
            <Skeleton width="40%" height={16} className='' />
            <Skeleton width="80%" height={24} />
            <div className="flex gap-3 items-center">
              <Skeleton width={80} height={24} />
              <Skeleton width={40} height={24} />
            </div>
            <Skeleton width="30%" height={20} />
            <Skeleton width="50%" height={20} />
            <div className="flex gap-4">
              <Skeleton width={100} height={32} />
              <Skeleton width={100} height={32} />
              <Skeleton circle width={32} height={32} />
            </div>
            <div className="grid grid-cols-3 gap-3 md:pt-4">
              <Skeleton width="100%" height={50} />
              <Skeleton width="100%" height={50} />
              <Skeleton width="100%" height={50} />
            </div>
            <div className="flex items-center justify-between gap-2 w-full">
              <Skeleton width="30%" height={16} />
              <Skeleton width="30%" height={16} />
            </div>
            <div className="grid grid-cols-6 gap-2 mt-2 overflow-x-auto">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} width="100%" height={30} className="rounded" />
              ))}
            </div>
          </div>
        </div>

        {/* Tabs & Description */}
        <div className="mt-10">
          <div className="flex gap-4 border-b pb-2">
            {['Description', 'Additional Info', 'Specification', 'Review'].map((tab, idx) => (
              <Skeleton key={idx} width={100} height={20} />
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6 space-y-3">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} height={10} width={`${80 - i * 10}%`} />
            ))}
          </div>

          {/* Feature & Shipping Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="space-y-2">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} height={16} width="90%" />
              ))}
            </div>
            <div className="space-y-2">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} height={16} width="80%" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ProductDetailLoader;
