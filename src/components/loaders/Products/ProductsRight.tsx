
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductRightLoader = () => {
    // Dummy array for grid items
    const placeholders = new Array(12).fill(null);

    return (
        <SkeletonTheme baseColor="#b6bdd136" highlightColor="#19b4ef4d">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {placeholders.map((_, index) => (
                    <div
                        key={index}
                        className="bg-white p-2 rounded shadow-sm flex flex-col gap-1"
                    >
                        <Skeleton height={130} className="rounded" />
                        <Skeleton width="70%" height={10} />
                        <Skeleton width="50%" height={10} />
                        <Skeleton width="30%" height={10} />
                        <div className="flex justify-between mt-1">
                            <Skeleton width={60} height={32} />
                            <Skeleton circle width={32} height={32} />
                        </div>
                    </div>
                ))}
            </div>
        </SkeletonTheme>
    );
};

export default ProductRightLoader;
