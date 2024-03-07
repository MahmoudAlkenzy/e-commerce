/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { FaHeart } from 'react-icons/fa';
import { IoIosHeartEmpty } from 'react-icons/io';
import { useAddToWishlist } from '../../hooks/useAddToWishlist';
import { useRemoveFromwhishList } from '../../hooks/useRemoveFromWishlist';
import { useAddToCart } from '../../hooks/useCart';

export default function AddToWishlistButton({ product, data }) {
    const { cart, isLoading } = useAddToCart();
    const { addToWishlist } = useAddToWishlist();
    const { removeFromwishlist } = useRemoveFromwhishList();
    if (isLoading) return;
    return (
        <span className="position-absolute cursor-pointer  top-0 end-0 p-3 fs-4 z-3 ">
            {data.data.find((pro) => pro.id === product.id) ? (
                <FaHeart
                    color="red"
                    onClick={() =>
                        removeFromwishlist({ productId: product.id })
                    }
                />
            ) : (
                <IoIosHeartEmpty
                    color="red"
                    fill="red"
                    onClick={() => addToWishlist({ productId: product.id })}
                />
            )}
        </span>
    );
}
