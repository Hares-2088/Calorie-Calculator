import React from 'react';

export default function Habits() {
    return (
        <div className="container ">
            <h1 className="mt-3 title">Good and Bad Eating Habits</h1>

            <h2>Good Eating Habits:</h2>
            <ul>
                <li>Water can be a great replacement for high-calorie drinks such as soda and energy beverages.</li>
                <li>If you are in a caloric deficit, your body utilizes fat to release the energy that it requires, allowing you to lose fat and weight.</li>
                <li>Using a calorie calculator to track your calories ensures you are eating the correct amount to support your weight loss.</li>
                <li>Exercising has both physical and mental benefits.</li>
                <li>Exercising boosts your metabolism.</li>
                <li>Drinking water can maintain satiety and prevent you from ingesting more calories.</li>
                {/* Add more good habits as needed */}
            </ul>

            <h2>Bad Eating Habits:</h2>
            <ul>
                <li>Dehydration can lead to hunger, causing you to overeat.</li>
                <li>Beverages with added sugars can increase your calorie intake and make weight loss difficult.</li>
                <li>Eating late at night, especially high-calorie snacks.</li>
                <li>Skipping meals, leading to overeating during the next meal.</li>
                <li>Emotional eating in response to stress or boredom.</li>
                <li>Consuming large portions, even of healthy foods, can contribute to overeating.</li>
            </ul>

            <h2>Not Eating Enough Calories Leads To:</h2>
            <ul>
                <li>If you are not getting enough vitamins and minerals through your diet, your body cannot function properly, affecting, for example, bone mass.</li>
                <li>Slowed metabolism.</li>
                <li>Brain fog. Lack of proper fuel for the brain can result in poor cognition and focus.</li>
            </ul>

            <h2>Signs That You Are Not Eating Enough:</h2>
            <ul>
                <li>Poor cognition</li>
                <li>Low energy</li>
                <li>Irritability</li>
                <li>Dizziness</li>
            </ul>
            <h4>
                Restricting food intake for a prolonged period can lead to diseases such as anorexia and bulimia.
            </h4>
        </div>
    );
}
