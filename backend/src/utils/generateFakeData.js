import { faker } from "@faker-js/faker";
import Category from "../models/category.js";
import Brand from "../models/brand.js";
import Product from "../models/product.js";
import Image from "../models/image.js";
import Review from "../models/review.js";
import User from "../models/user.js";
import { hash } from "bcrypt";

const generateFakeData = async () => {
  try {
    console.log("initiatiating fake  syntetic data generation");

    // Generating random users
    const usersIds = await Promise.all(
      Array.from({ length: 200 }).map(async () => {
        const { _id: userId } = await User.create({
          name: faker.person.fullName(),
          email: faker.internet.email(),
          password: await hash("password123", 10),
          picture: faker.image.avatar(),
          googleId: null,
          provider: "local",
          emailVerified: true,
        });
        return userId;
      })
    );

    // Generating categories
    const categories = await Promise.all(
      Array.from({ length: 5 }).map(async () => {
        const { _id: categoryId } = await Category.create({
          name: faker.commerce.department(),
          description: faker.lorem.sentence(),
        });
        return categoryId;
      })
    );
     console.log('created  catgeories' ,categories)
    // Generating brands
    const brands = await Promise.all(
      Array.from({ length: 5 }).map(async () => {
        const { _id: brandId } = await Brand.create({
          name: faker.company.name(),
        });
        return brandId;
      })
    );

    // Generating products
    const productsIDs = await Promise.all(
      Array.from({ length: 300 }).map(async () => {
        const { _id: productId } = await Product.create({
          name: faker.commerce.productName(),
          gender: faker.helpers.arrayElement(["Men", "Women", "Unisex"]),
          price: faker.commerce.price(),
          category: faker.helpers.arrayElement(categories),
          brand: faker.helpers.arrayElement(brands),
          stock: faker.number.int({ min: 0, max: 100 }),
          ratingCount: faker.number.int({ min: 0, max: 100 }),
          avatar: faker.image.urlLoremFlickr(),
          averageCount: faker.number.int({
            min: 1,
            max: 5,
            precision: 0.1,
          }),
          size: faker.helpers.arrayElements([
            "Small",
            "Medium",
            "Large",
            "X-large",
          ]),
          status: faker.helpers.arrayElement([
            "in-stock",
            "out-of-stock",
            "preorder",
          ]),
        });
        return productId;
      })
    );

    // Generating product images
    const generateImage = () => {
      const images = {};
      for (let i = 0; i < 3; i++) {
        const generateColor = () => {
          const color = faker.color.human();
          return color in images ? generateColor() : color;
        };
        const color = generateColor();
        images[color] = [1, 2, 3].map(() =>
          faker.image.urlLoremFlickr({ color: [color] })
        );
      }
      return images;
    };

    await Promise.all(
      productsIDs.map((id) =>
        Image.create({
          image: generateImage(),
          alt: `image failed to load`,
          product: id,
        })
      )
    );

    // Generating random reviews
    await Promise.all(
      Array.from({ length: 5 }).map(() =>
        Promise.all(
          productsIDs.map((id) =>
            Review.create({
              userId: faker.helpers.arrayElement(usersIds),
              productId: id,
              rating: faker.number.int({ min: 1, max: 5 }),
              comment: faker.lorem.sentence(),
            })
          )
        )
      )
    );
    console.log("fake data generated successfully ");
  } catch (error) {
    console.log(error.stack);
  }
};

export default generateFakeData;
