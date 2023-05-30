import { v4 as uuidv4 } from 'uuid';
import eat_more from "../assets/Eat-More-Frequently.jpg"
import more_nutriens from "../assets/Choose-High-Nutrient-Rich-Foods-768x505.jpg"
import shakes from "../assets/Drink-Healthy-Smoothies-Or-Shakes.jpg"
import exercise from "../assets/Strength-Training-Exercise.jpg"
import fruit_veg from "../assets/fruit.jpg"
import more_water from "../assets/glass_water.jpg"

export const weightGain = [
    {
        id: uuidv4(),
        title: "Eating more frequently",
        picture: eat_more,
        info: "Generally, we all have to intake at least three-time meals a day.  Snacking between meals can also help in the diet to gain weight fast."
    },
    {
        id: uuidv4(),
        title: "Food with nutrients",
        picture: more_nutriens,
        info: " As part of a healthy diet, choose whole-grain loaves of bread, portions of pasta and cereals; meats, fruits, and vegetables; dairy products; milk and egg."
    },
    {
        id: uuidv4(),
        title: "Smoothies and shakes",
        picture: shakes,
        info: "These drinks provide fast nutrient-dense calories without making a person feel overly full. Banana smoothie is the best drink to gain weight faster as it has protein."
    },
    {
        id: uuidv4(),
        title: "Exercise",
        picture: exercise,
        info: "Do healthy exercise, such as strength training. Exercise may also open your appetite. These exercises can help you gain more weight by building up your muscles."
    }
]
export const weightLoss = [
    {
        id: uuidv4(),
        title: "Eat fruit and veg",
        picture: fruit_veg,
        info: "Fruit and veg are low in calories and fat, and high in fibre – 3 essential ingredients for successful weight loss."
    },
    {
        id: uuidv4(),
        title: "Drink water",
        picture: more_water,
        info: " You can end up consuming extra calories when a glass of water is really what you need."
    },
    {
        id: uuidv4(),
        title: "Food with nutrients",
        picture: more_nutriens,
        info: " As part of a healthy diet, choose whole-grain loaves of bread, portions of pasta and cereals; meats, fruits, and vegetables; dairy products; milk and egg."
    },
    {
        id: uuidv4(),
        title: "Exercise",
        picture: exercise,
        info: "Do healthy exercise, such as strength training. Exercise may also open your appetite. These exercises can help you gain more weight by building up your muscles."
    }
]