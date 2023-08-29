import React from "react";
import GreekSalad from "../images/greek salad.jpg";
import Bruchetta from "../images/bruchetta.svg";
import LemonCake from "../images/lemon dessert.jpg";

function Main() {
  const menu = [
    {
      img: GreekSalad,
      dish: "Greek Salad",
      price: "$12.99",
      details:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      img: Bruchetta,
      dish: "Bruschetta",
      price: "$5.99",
      details:
        "Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.",
    },
    {
      img: LemonCake,
      dish: "Lemon Cake",
      price: "$5.00",
      details:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  const reviews = [
    { name: "anyone", img: "", review: "good" },
    { name: "anyone", img: "", review: "good" },
    { name: "anyone", img: "", review: "good" },
    { name: "anyone", img: "", review: "good" },
  ];

  return (
    <main>
      <div>
        <div>
          <h1>This Weeks Special!</h1>
          <button>Online Menu</button>
        </div>
        <div>
          {menu?.map((value, index) => (
            <div key={"dish" + index}>
              <div>
                <img alt="dish" src={value?.img} />
              </div>
              <h3>{value?.dish}</h3>
              <h4>{value?.price}</h4>
              <p>{value?.details}</p>
              <h4>Order a Delivery</h4>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1>Testimonials</h1>
        {reviews?.map((value, index) => (
          <div key={"testimonial" + index}>
            <h3>{value?.name}</h3>
            <div>
              <img alt="dish" src={value?.img} />
            </div>
            <p>{value?.review}</p>
          </div>
        ))}
      </div>

      <div>
        <div>
          <h1>Little Lemon</h1>
          <h3>California</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
            ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque
            massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor
            condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in
            accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit
            lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi
            hendrerit consequat. In dictum ligula in elit euismod malesuada.
            Curabitur varius augue id tempus ultricies. Mauris suscipit porta
            odio, et pretium nibh scelerisque ut.
          </p>
        </div>

        <div>
          <img src={require("../images/Mario and Adrian b.jpg")} alt="shef" />
          <img src={require("../images/restaurant.jpg")} alt="resturant" />
        </div>
      </div>
    </main>
  );
}

export default Main;
