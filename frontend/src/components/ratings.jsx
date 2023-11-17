"use client";
export default function Ratings({ rating = 4, className = "" }) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<i className={`fa-solid fa-star ${className}`} key={i}></i>);
  }
  for (let i = rating; i < 5; i++) {
    stars.push(<i className={`fa-regular fa-star ${className}`} key={i}></i>);
  }
  return <p>{stars}</p>;
}
