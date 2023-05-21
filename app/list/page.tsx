import Image from "next/image";

export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {products.map((product, index) => (
        <div className="food" key={`product-${index}`}>
          {/* <Image
            src={require(`@/public/food${index}.png`)}
            className="food-img"
          /> */}
          <img src={`/food${index}.png`} className="food-img" />
          <h4>{product} $40</h4>
        </div>
      ))}
    </div>
  );
}
