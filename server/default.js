
import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";

const DefaultData = async () => {
    try {
        for (const product of products) {
            await Product.updateOne(
                { id: product.id },
                { $setOnInsert: product },
                { upsert: true }
            );
        }

        console.log("Default products checked successfully");
    } catch (error) {
        console.error("Error while inserting default data:", error.message);
    }
};

export default DefaultData;
