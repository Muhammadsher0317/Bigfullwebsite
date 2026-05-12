import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import Sliderboxs from "../../components/sliderboxs/Sliderboxs";
import "../home/Home.css";

function Category() {
  const { id } = useParams();
  const { productData, categoryData } = useContext(DataContext);
  const category = (categoryData || []).find((item) => String(item?.id) === id);
  const products = (productData || []).filter(
    (product) => String(product?.category?.id) === id,
  );

  return (
    <div className="products_page">
      <div className="container">
        <div className="hlars">
          <div className="reds"></div>
          <h1>{category?.title || "Category"}</h1>
        </div>
        <div className="exportslar">
          <h2>{category ? `Showing ${products.length} products in ${category.title}` : "Category not found"}</h2>
          <div className="exportbtns">
            <Link to="/">
              <button>Back Home</button>
            </Link>
          </div>
        </div>

        {products.length === 0 ? (
          <div style={{ padding: "40px 0", textAlign: "center" }}>
            <p>{category ? "Hech qanaqa mahsulot topilmadi." : "Kategoriya topilmadi."}</p>
          </div>
        ) : (
          <div className="explorecards">
            {products.map((items, index) => (
              <Sliderboxs key={index} items={items} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
