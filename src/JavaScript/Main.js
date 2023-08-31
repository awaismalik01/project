import React from "react";
import GreekSalad from "../images/greek salad.png";
import Bruchetta from "../images/bruchetta.png";
import LemonCake from "../images/lemon dessert.png";
import Avatar from "../images/customer.png";
import Rating from "../images/rating.png";

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
    { name: "Anyone Name", img: Avatar, rate: Rating, review: `"good"` },
    { name: "Anyone Name", img: Avatar, rate: Rating, review: `"good"` },
    { name: "Anyone Name", img: Avatar, rate: Rating, review: `"good"` },
    { name: "Anyone Name", img: Avatar, rate: Rating, review: `"good"` },
  ];

  return (
    <main>
      <section>
        <div className="section-head">
          <h1>This Weeks Special!</h1>
          <button>Online Menu</button>
        </div>
        <div className="dishes">
          {menu?.map((value, index) => (
            <div key={"dish" + index} className="dish-card">
              <img alt="dish" src={value?.img} />
              <div className="details">
                <div className="name-price">
                  <h3>{value?.dish}</h3>
                  <h4>{value?.price}</h4>
                </div>
                <p>{value?.details}</p>
                <h4>Order a Delivery</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      <aside>
        <h1>Testimonials</h1>
        <div className="testimonial">
          {reviews?.map((value, index) => (
            <blockquote key={"testimonial" + index}>
              <img className="rate" alt="dish" src={value?.rate} />
              <img className="profile" alt="dish" src={value?.img} />
              <h3>{value?.name}</h3>
              <p>{value?.review}</p>
            </blockquote>
          ))}
        </div>
      </aside>

      <article>
        <div className="article-col1">
          <h1>Little Lemon</h1>
          <h3>California</h3>
          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant.
            <br />
            <br /> To craft the menu, Mario relies on family recipes and his
            experience as a chef in Italy. Adrian does all the marketing for the
            restaurant and led the effort to expand the menu beyond classic
            Italian to incorporate additional cuisines from the Mediterranean
            region.
          </p>
        </div>

        <div className="article-col2">
          <img
            className="article-img1"
            src={require("../images/Mario and Adrian A.jpg")}
            alt="resturant"
          />
          <img
            className="article-img2"
            src={require("../images/Mario and Adrian b.jpg")}
            alt="shef"
          />
        </div>
      </article>
    </main>
  );
}

export default Main;
