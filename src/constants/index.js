import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    id: 1,
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
    rating: "4.5",
    imogi:"😍😊👌",
    sold: 1170,
    shipping: "freeShipping",
    freeShipping: true,
    reviews : 1050,
    discount : "10%",
    description: "A legend reborn. The Air Jordan 1 transcends the court, becoming a cultural phenomenon. This iconic silhouette features a timeless design with premium leather, encapsulated Air cushioning, and the legendary Jumpman logo. Whether you're conquering the hardwood or dominating the streets, the Air Jordan 1 delivers unparalleled style and performance.",
  },
  {
    id: 2,
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
    rating: "4.7",
    imogi:"😍😊⭐",
    sold: 1500,
    shipping: "freeShipping",
    freeShipping: false,
    reviews : 1050,
    discount : "30%",
    description: "Where performance meets cutting-edge design. The Air Jordan 3 revolutionized the game with revolutionary features like the visible Air unit and elephant print accents. Tinker Hatfield's masterpiece continues to inspire athletes and fashionistas alike. Experience the ultimate comfort and support with the Air Jordan 3, a shoe that's as innovative today as it was in 1988."
  },
  {
    id:3,
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
    rating: "4.3",
    imogi:"😍👌🤩",
    sold: 1000,
    shipping: "freeShipping",
    freeShipping: true,
    reviews : 800,
    discount : "12.50%",
    description:"Crafted for greatness. Inspired by Michael Jordan's desire for speed and agility, the Air Jordan 11 features a sleek, low-cut design and patent leather upper. The full-length Zoom Air unit delivers unparalleled cushioning, propelling you to new heights. Elevate your game and step into the legacy of the Air Jordan 11."
  },
  {
    id:4,
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
    rating: "4.9",
    imogi:"😊👌⭐",
    sold: 1070,
    shipping: "freeShipping",
    freeShipping: false,
    reviews : 800,
    discount : "30%",
    description: "The past meets the future. This iconic colorway returns with a classic white, grey, and black design. Featuring a premium leather upper, visible Air unit in the heel, and iconic Jumpman branding, the Air Jordan 4 Retro OG 'White Cement' is a must-have for any sneakerhead. Relive the golden age of basketball and step into the future with this timeless masterpiece."
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const accordionCardDetails = [
  {
    question:"What is Nike",
    answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question:"How to buy",
    answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    question:"Chose write product",
    answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  ,
  {
    question:"Deliver Methods",
    answer:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
]