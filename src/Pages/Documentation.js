import React from 'react';

export default function Documentation() {
  return (
    <div className="container mt-5">
      <h1 className="title">Documentation</h1>
      <div className="documentation-content" style={{ textAlign: 'justify' }}>
        <h2>Basal Metabolic Rate (BMR) and Daily Calorie Intake</h2>
        <p>
          The basal metabolic rate (BMR) defines the number of calories burned by your body while resting
          to perform normal body functions (Goldstein, p. 16). These functions include breathing, circulation,
          digestion, and excretion.
        </p>
        <p>
          To calculate your BMR, you need information such as your gender, age, height, and weight. Gender is a
          factor because of the difference in body mass between men and women, leading to separate formulas.
        </p>
        <p>
          The formula for men is: BMR = 66 + (6.23 x weight in pounds) + (12.7 x height in inches) –
          (6.8 x age in years).
          <br/>
          For women: BMR = 655 + (4.35 x weight in pounds) + (4.7 x height in inches) –
          (4.7 x age in years) (Goldstein, p. 16).
        </p>
        <p>
          Additionally, the calculator includes an activity level. This is not used to calculate the BMR but
          determines the daily calorie intake. Both the BMR and activity level are needed to calculate daily
          calorie intake.
        </p>

        <h2>Total Daily Energy Expenditure (TDEE)</h2>
        <p>
          Total daily energy expenditure (TDEE) estimates how many calories your body burns daily by accounting
          for three major contributing factors: your resting energy expenditure (REE), your activity level, and
          the thermic effect of food metabolism.
        </p>
        <p>
          The resting energy expenditure, in short, is how many calories you burn during a resting day. Your
          activity level is quite simply the amount of physical activity that you partake in during your day, so
          if you partake in a lot of physical activity in your day to day life, it will affect your TDEE same as
          being less active will. The thermic effect of food is the amount of energy your body uses to metabolize
          (change the food that you eat into a substance that can be used by your body) the food you eat.
        </p>
        <p>
          Now with all that information at hand, how does one calculate their TDEE? Well first, it determines your
          REE by taking your age, gender, height, and weight. It then determines the appropriate activity multiplier
          based on your activity level input, giving an estimate of your TDEE. The formula visually looks like this:
          <br />
          <strong>TDEE=BMR×Activity Level Factor</strong>
        </p>
      </div>
    </div>
  );
}
