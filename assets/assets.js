import gs_logo from "./gs_logo.jpg"
import happy_store from "./happy_store.webp"
import upload_area from "./upload_area.svg"
import hero_model_img from "./hero_model_img.png"
import hero_product_img1 from "./hero_product_img1.png"
import hero_product_img2 from "./hero_product_img2.png"
import product_img1 from "./product_img1.png"
import product_img2 from "./product_img2.png"
import product_img3 from "./product_img3.png"
import product_img4 from "./product_img4.png"
import product_img5 from "./product_img5.png"
import product_img6 from "./product_img6.png"
import product_img7 from "./product_img7.png"
import product_img8 from "./product_img8.png"
import product_img9 from "./product_img9.png"
import product_img10 from "./product_img10.png"
import product_img11 from "./product_img11.png"
import product_img12 from "./product_img12.png"
import { ClockFadingIcon, HeadsetIcon, SendIcon } from "lucide-react";
import profile_pic1 from "./profile_pic1.jpg"
import profile_pic2 from "./profile_pic2.jpg"
import profile_pic3 from "./profile_pic3.jpg"

export const assets = {
    upload_area, hero_model_img,
    hero_product_img1, hero_product_img2, gs_logo,
    product_img1, product_img2, product_img3, product_img4, product_img5, product_img6,
    product_img7, product_img8, product_img9, product_img10, product_img11, product_img12,
}

export const categories = ["Air Force 1", "Jordan 9", "Vans", "Timberland", "Prada", "Versace"];

export const dummyRatingsData = [
    { id: "rat_1", rating: 4.2, review: "I was a bit skeptical at first, but these sneakers turned out to be even better than I imagined. The material feels premium, super comfortable for daily wear, and the fit is just perfect. I've already recommended them to my friends and will definitely buy another pair soon.", user: { name: 'Kristin Watson', image: profile_pic1 }, productId: "prod_1", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'AirStride Sneakers', category:'Shoes', id:'prod_1'} },
    { id: "rat_2", rating: 5.0, review: "These shoes are amazing! The comfort level is unmatched and they look even better in person. My walks feel so much easier now — definitely worth every penny. Fast delivery and great packaging too!", user: { name: 'Jenny Wilson', image: profile_pic2 }, productId: "prod_2", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'UrbanStep Runners', category:'Shoes', id:'prod_2'} },
    { id: "rat_3", rating: 4.1, review: "I love these sneakers — super lightweight and stylish. They match with almost every outfit I wear. The only small issue is they felt a bit tight the first day, but they stretched perfectly after a few wears.", user: { name: 'Bessie Cooper', image: profile_pic3 }, productId: "prod_3", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'FlexMotion Trainers', category:'Shoes', id:'prod_3'} },
    { id: "rat_4", rating: 5.0, review: "These are easily my favorite sneakers right now! Super comfortable and breathable — great for long walks and workouts. The color looks fantastic in real life too. I’ll definitely buy from this brand again.", user: { name: 'Kristin Watson', image: profile_pic1 }, productId: "prod_4", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'Velocity Max Shoes', category:'Shoes', id:'prod_4'} },
    { id: "rat_5", rating: 4.3, review: "Overall, really happy with this purchase! The shoes feel durable and the sole has great grip. Took a day to break in, but after that they’re super comfortable. Highly recommend if you want quality sneakers for everyday wear.", user: { name: 'Jenny Wilson', image: profile_pic2 }, productId: "prod_5", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'StrideWave Walkers', category:'Shoes', id:'prod_5'} },
    { id: "rat_6", rating: 5.0, review: "Absolutely love these shoes! Super soft inside, easy to clean, and look great with jeans or joggers. I’ve already ordered another pair in a different color. 100% satisfied!", user: { name: 'Bessie Cooper', image: profile_pic3 }, productId: "prod_6", createdAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+0530 (India Standard Time)', product: { name: 'CloudFlex Runners', category:'Shoes', id:'prod_6'} },
]

export const dummyStoreData = {
    id: "store_1",
    userId: "user_1",
    name: "Shoe Craft",
    description: "At ShoeCraft, we believe buying shoes should be simple, stylish, and satisfying. Whether you're after trendy sneakers, classic leather boots, elegant heels, or comfy everyday wear — we’ve brought the best footwear collections from trusted sellers all under one digital roof. Discover your perfect fit and step out in style with confidence.",
    username: "shoeraft",
    address: "3rd Floor, Shoe Craft , Pipeline, Nakuru, Kenya",
    status: "approved",
    isActive: true,
    logo: happy_store,
    email: "collshenr@gmail.com",
    contact: "+254 704448259",
    createdAt: "2025-09-04T09:04:16.189Z",
    updatedAt: "2025-09-04T09:04:44.273Z",
    user: {
        id: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "ShoeCraft",
        email: "collshenr@gmail.com",
        image: gs_logo,
    }
}

export const productDummyData = [
    {
        id: "prod_1",
        name: "AirFlex Running Sneakers",
        description: "Engineered for comfort and speed, the AirFlex Running Sneakers feature a breathable mesh upper and lightweight sole for maximum performance. Ideal for running, workouts, or everyday wear. Built with durability and sleek design in mind — your go-to pair for any occasion.",
        mrp: 120,
        price: 89,
        images: [product_img1, product_img2, product_img3, product_img4],
        category: "Sneakers",
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
        updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
    },
    {
        id: "prod_2",
        name: "Classic Leather Loafers",
        description: "A timeless statement of style and sophistication. The Classic Leather Loafers are crafted from premium full-grain leather, with a soft cushioned insole for all-day comfort. Perfect for formal occasions or elevating your casual look.",
        mrp: 140,
        price: 99,
        images: [product_img2],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Formal Shoes",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
        updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
    },
    {
        id: "prod_3",
        name: "Urban Street High-Tops",
        description: "Designed for trendsetters — the Urban Street High-Tops bring a bold urban aesthetic with a premium synthetic upper, strong grip sole, and unmatched street comfort. Perfect for casual wear or your daily hustle.",
        mrp: 130,
        price: 95,
        images: [product_img3],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Casual",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
        updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
    },
    {
        id: "prod_4",
        name: "TrailRider Hiking Boots",
        description: "Tough terrain? No problem. The TrailRider Hiking Boots are built with rugged soles, waterproof coating, and padded ankle support. Whether you’re hiking or exploring the outdoors, these boots are your reliable adventure partner.",
        mrp: 160,
        price: 119,
        images: [product_img4],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Boots",
        rating: dummyRatingsData,
        createdAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
        updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
    },
    {
        id: "prod_5",
        name: "ComfortStride Slides",
        description: "Step into everyday comfort with the ComfortStride Slides — soft, flexible, and ultra-lightweight. Perfect for lounging, quick errands, or after a long workout. Designed to keep your feet relaxed all day.",
        mrp: 60,
        price: 39,
        images: [product_img5],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Slides",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
        updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
    },
    {
        id: "prod_6",
        name: "All-Day Trainer Pro",
        description: "A perfect blend of performance and style. The All-Day Trainer Pro shoes are built for gym sessions, walking, or casual wear — featuring breathable knit fabric, shock-absorbent soles, and a minimalist design that complements any outfit.",
        mrp: 110,
        price: 79,
        images: [product_img6],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Training Shoes",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
        updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
    },
    {
        id: "prod_7",
        name: "Elite Women's Heels",
        description: "Turn heads with the Elite Women's Heels — featuring elegant design, comfortable arch support, and a smooth satin finish. Ideal for evening events, formal occasions, or whenever you want to step up your look.",
        mrp: 95,
        price: 69,
        images: [product_img7],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Heels",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
        updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
    },
    {
        id: "prod_8",
        name: "Kids’ SportRunners",
        description: "Built for little champions — the Kids’ SportRunners combine fun, comfort, and durability. With flexible soles and breathable materials, they’re perfect for school, sports, or playtime adventures.",
        mrp: 70,
        price: 45,
        images: [product_img8],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Kids",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
        updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
    },
    {
        id: "prod_9",
        name: "Signature Suede Chelsea Boots",
        description: "Premium handcrafted suede Chelsea boots that exude timeless elegance. Easy slip-on design, soft leather lining, and durable outsole — perfect for both formal and smart-casual occasions.",
        mrp: 150,
        price: 109,
        images: [product_img9],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Boots",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
        updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
    },
    {
        id: "prod_10",
        name: "AirStride Running Shoes",
        description: "Redefine comfort and movement with AirStride Running Shoes — featuring breathable mesh, lightweight design, and cloud-soft cushioning. Designed for runners who want both performance and style.",
        mrp: 130,
        price: 95,
        images: [product_img10],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Running",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
        updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
    },
    {
        id: "prod_11",
        name: "Men’s Leather Sandals",
        description: "Crafted for the perfect blend of tradition and comfort, these Men’s Leather Sandals feature durable straps, cushioned soles, and breathable lining — ideal for daily wear or outdoor strolls.",
        mrp: 80,
        price: 55,
        images: [product_img11],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Sandals",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
        updatedAt: 'Sat Jul 20 2025 14:51:25 GMT+3 (Kenya Standard Time)',
    },
    {
        id: "prod_12",
        name: "Luxury Dress Shoes",
        description: "Handcrafted from genuine Italian leather, the Luxury Dress Shoes are designed for professionals who appreciate detail. Sleek, durable, and built for long wear — the perfect finishing touch to any formal outfit.",
        mrp: 200,
        price: 149,
        images: [product_img12],
        storeId: "seller_1",
        inStock: true,
        store: dummyStoreData,
        category: "Formal",
        rating: [...dummyRatingsData, ...dummyRatingsData],
        createdAt: 'Sat Jul 19 2025 14:51:25 GMT+3 (Kenya Standard Time)',
        updatedAt: 'Sat Jul 19 2025 14:51:25 GMT+3 (Kenya Standard Time)',
    }
];

export const ourSpecsData = [
    { title: "Free Shipping", description: "Members enjoy fast, free delivery on every order no conditions, just reliable doorstep.", icon: SendIcon, accent: '#05DF72' },
    { title: "24/7 Customer Support", description: "We're here for you. Get expert help with our customer support.", icon: HeadsetIcon, accent: '#A684FF' }
]

export const addressDummyData = {
    id: "addr_1",
    userId: "user_1",
    name: "Collins",
    email: "collshenr@gmail.com",
    street: "pipeline",
    city: "Nakuru",
    state: "NX",
    zip: "20100",
    country: "Kenya",
    phone: "254704448259",
    createdAt: 'Sat Jul 19 2025 14:51:25 GMT+3 (Kenya Standard Time)',
}

export const couponDummyData = [
    { code: "NEW20", description: "20% Off for New Users", discount: 20, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:35:31.183Z" },
    { code: "NEW10", description: "10% Off for New Users", discount: 10, forNewUser: true, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:35:50.653Z" },
    { code: "OFF20", description: "20% Off for All Users", discount: 20, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:42:00.811Z" },
    { code: "OFF10", description: "10% Off for All Users", discount: 10, forNewUser: false, forMember: false, isPublic: false, expiresAt: "2026-12-31T00:00:00.000Z", createdAt: "2025-08-22T08:42:21.279Z" },
    { code: "PLUS10", description: "20% Off for Members", discount: 10, forNewUser: false, forMember: true, isPublic: false, expiresAt: "2027-03-06T00:00:00.000Z", createdAt: "2025-08-22T11:38:20.194Z" }
]

export const orderDummyData = [
    {
        id: "cmemm75h5001jtat89016h1p3",
        total: 214.2,
        status: "DELIVERED",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        storeId: "cmemkqnzm000htat8u7n8cpte",
        addressId: "cmemm6g95001ftat8omv9b883",
        isPaid: false,
        paymentMethod: "COD",
        createdAt: "2025-08-22T09:15:03.929Z",
        updatedAt: "2025-08-22T09:15:50.723Z",
        isCouponUsed: true,
        coupon: dummyRatingsData[2],
        orderItems: [
            { orderId: "cmemm75h5001jtat89016h1p3", productId: "cmemlydnx0017tat8h3rg92hz", quantity: 1, price: 89, product: productDummyData[0], },
            { orderId: "cmemm75h5001jtat89016h1p3", productId: "cmemlxgnk0015tat84qm8si5v", quantity: 1, price: 149, product: productDummyData[1], }
        ],
        address: addressDummyData,
    },
    {
        id: "cmemm6jv7001htat8vmm3gxaf",
        total: 421.6,
        status: "DELIVERED",
        userId: "user_31dQbH27HVtovbs13X2cmqefddM",
        storeId: "cmemkqnzm000htat8u7n8cpte",
        addressId: "cmemm6g95001ftat8omv9b883",
        isPaid: false,
        paymentMethod: "COD",
        createdAt: "2025-08-22T09:14:35.923Z",
        updatedAt: "2025-08-22T09:15:52.535Z",
        isCouponUsed: true,
        coupon: couponDummyData[0],
        orderItems: [
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "cmemm1f3y001dtat8liccisar", quantity: 1, price: 229, product: productDummyData[2], },
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "cmemm0nh2001btat8glfvhry1", quantity: 1, price: 99, product: productDummyData[3], },
            { orderId: "cmemm6jv7001htat8vmm3gxaf", productId: "cmemlz8640019tat8kz7emqca", quantity: 1, price: 199, product: productDummyData[4], }
        ],
        address: addressDummyData,
    }
]

export const dummyUserData = {
    id: "user_31dQbH27HVtovbs13X2cmqefddM",
    name: "ShoeCraft",
    email: "collshenr@gmail.com",
    image: gs_logo,
    cart: {}
}

export const storesDummyData = [
    {
        id: "cmemkb98v0001tat8r1hiyxhn",
        userId: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "ShoeCraft",
        description: "ShoeCraft is the education marketplace where you can buy goodies related to coding and tech",
        username: "shoecraft",
        address: "pipeline, Nakuru, 20100, Kenya",
        status: "approved",
        isActive: true,
        logo: gs_logo,
        email: "collshenr@gmail.com",
        contact: "+254704448259",
        createdAt: "2025-08-22T08:22:16.189Z",
        updatedAt: "2025-08-22T08:22:44.273Z",
        user: dummyUserData,
    },
    {
        id: "cmemkb98v0001tat8r1hiyxhn",
        userId: "user_31dOriXqC4TATvc0brIhlYbwwc5",
        name: "ShoeCraft",
        description: "ShoeCraft is the education marketplace where you can buy goodies related to coding and tech",
        username: "shoecraft",
        address: "pipeline, Nakuru, 20100, Kenya",
        status: "approved",
        isActive: true,
        logo: gs_logo,
        email: "collshenr@gmail.com",
        contact: "+254704448259",
        createdAt: "2025-08-22T08:22:16.189Z",
        updatedAt: "2025-08-22T08:22:44.273Z",
        user: dummyUserData,
    }
]

export const dummyAdminDashboardData = {
    "orders": 6,
    "stores": 2,
    "products": 12,
    "revenue": "959.10",
    "allOrders": [
        { "createdAt": "2025-08-20T08:46:58.239Z", "total": 145.6 },
        { "createdAt": "2025-08-22T08:46:21.818Z", "total": 97.2 },
        { "createdAt": "2025-08-22T08:45:59.587Z", "total": 54.4 },
        { "createdAt": "2025-08-23T09:15:03.929Z", "total": 214.2 },
        { "createdAt": "2025-08-23T09:14:35.923Z", "total": 421.6 },
        { "createdAt": "2025-08-23T11:44:29.713Z", "total": 26.1 },
        { "createdAt": "2025-08-24T09:15:03.929Z", "total": 214.2 },
        { "createdAt": "2025-08-24T09:14:35.923Z", "total": 421.6 },
        { "createdAt": "2025-08-24T11:44:29.713Z", "total": 26.1 },
        { "createdAt": "2025-08-24T11:56:29.713Z", "total": 36.1 },
        { "createdAt": "2025-08-25T11:44:29.713Z", "total": 26.1 },
        { "createdAt": "2025-08-25T09:15:03.929Z", "total": 214.2 },
        { "createdAt": "2025-08-25T09:14:35.923Z", "total": 421.6 },
        { "createdAt": "2025-08-25T11:44:29.713Z", "total": 26.1 },
        { "createdAt": "2025-08-25T11:56:29.713Z", "total": 36.1 },
        { "createdAt": "2025-08-25T11:30:29.713Z", "total": 110.1 }
    ]
}

export const dummyStoreDashboardData = {
    "ratings": dummyRatingsData,
    "totalOrders": 2,
    "totalEarnings": 636,
    "totalProducts": 5
}