import { Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Slide = ({ products, title }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-xl overflow-hidden flex flex-col items-center justify-center">
            <div className="flex px-5 py-4 w-full">
                <h2 className="text-xl font-semibold mr-6 leading-8">{title}</h2>

                <button
                    className="ml-auto bg-purple-700 text-white rounded text-sm px-4 py-2 hover:bg-purple-800"
                    onClick={() => { navigate("/Products") }}
                >
                    View All
                </button>
            </div>

            <Divider />

            <div className="flex items-center justify-center gap-4 p-6 w-[90%]">
                {products.map((product, index) => (
                    <Link key={index} to={`/product/view/${product._id}`} className="no-underline">
                        <div className="text-center p-4 bg-gray-100 rounded-lg">
                            <img src={product.productImage} alt={product.productName} className="rounded-lg w-full h-56 object-cover" />
                            <h3 className="text-base font-semibold mt-2 text-gray-900 truncate">{product.productName}</h3>
                            <div className="flex gap-2 justify-center items-center mt-2">
                                <p className="text-sm text-gray-500 line-through">{product.price.mrp}</p>
                                <p className="text-sm text-gray-900">Rs. {product.price.cost}</p>
                                <p className="text-sm text-green-600">{product.price.discountPercent}</p>
                            </div>
                            <p className="text-sm text-gray-900 opacity-60 mt-2">{product.tagline}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Slide;
