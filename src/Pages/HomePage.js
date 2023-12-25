import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import emailjs from 'emailjs-com';
import Table from 'react-bootstrap/Table';
import _ from 'lodash';
import { LinkContainer } from 'react-router-bootstrap';


export default function HomePage() {
    const [name, setName] = useState(null);
    const [gender, setGender] = useState("Male");
    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [age, setAge] = useState(18);
    const [email, setEmail] = useState(null);
    const [bmr, setBMR] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false); // Added state for form submission
    const [activityLevel, setActivityLevel] = useState('Sedentary');
    const [tdee, setTDEE] = useState(null);
    const [weightUnit, setWeightUnit] = useState("kg");
    const [heightUnit, setHeightUnit] = useState("cm"); // Initialize height unit state

    const habits = `Good Eating Habits:
    - Water can be a great replacement for high-calorie drinks such as soda and energy beverages.
    - If you are in a caloric deficit, your body utilizes fat to release the energy that it requires, allowing you to lose fat and weight.
    - Using a calorie calculator to track your calories ensures you are eating the correct amount to support your weight loss.
    - Exercising has both physical and mental benefits.
    - Exercising boosts your metabolism.
    - Drinking water can maintain satiety and prevent you from ingesting more calories.

Bad Eating Habits:
    - Dehydration can lead to hunger, causing you to overeat.
    - Beverages with added sugars can increase your calorie intake and make weight loss difficult.
    - Eating late at night, especially high-calorie snacks.
    - Skipping meals, leading to overeating during the next meal.
    - Emotional eating in response to stress or boredom.
    - Consuming large portions, even of healthy foods, can contribute to overeating.

Not Eating Enough Calories Leads To:
    - If you are not getting enough vitamins and minerals through your diet, your body cannot function properly, affecting, for example, bone mass.
    - Slowed metabolism.
    - Brain fog. Lack of proper fuel for the brain can result in poor cognition and focus.

Signs That You Are Not Eating Enough:
    - Poor cognition
    - Low energy
    - Irritability
    - Dizziness

Restricting food intake for a prolonged period can lead to diseases such as anorexia and bulimia.`;


    const activityFactors = {
        Sedentary: 1.2,
        LightlyActive: 1.375,
        ModeratelyActive: 1.55,
        VeryActive: 1.725,
        ExtraActive: 1.9
    };

    const activityLevelDefinitions = {
        Sedentary: 'Little or no exercise',
        LightlyActive: 'Light exercise/sports 1-3 days/week',
        ModeratelyActive: 'Moderate exercise/sports 3-5 days/week',
        VeryActive: 'Hard exercise/sports 6-7 days a week',
        ExtraActive: 'Very hard exercise/sports and physical job or 2x training'
    };

    const handleSubmit = (event) => {
        event.preventDefault();


        if (weightUnit && weightUnit === "lbs") {
            setWeight(weight * 0.453592);
        }

        if (heightUnit && heightUnit === "ft") {
            setHeight(height * 30.48);
        };

        // BMR Calculation
        const weightInKg = parseFloat(weight);
        const heightInCm = parseFloat(height);
        const ageInYears = parseFloat(age);

        let calculatedBMR;

        if (gender === 'Male') {
            calculatedBMR = 88.362 + 13.397 * weightInKg + 4.799 * heightInCm - 5.677 * ageInYears;
        } else {
            calculatedBMR = 447.593 + 9.247 * weightInKg + 3.098 * heightInCm - 4.330 * ageInYears;
        }

        setBMR(calculatedBMR.toFixed(2));
        setFormSubmitted(true); // Set formSubmitted to true after form submission

        // Calculate TDEE
        const activityFactor = activityFactors[activityLevel];
        const calculatedTDEE = calculatedBMR * activityFactor;

        setTDEE(calculatedTDEE.toFixed(2))

        if (email !== null) {
            const templateParams = {
                from_name: name,
                Name: name,
                to_name: "Calorie Team",
                email: email,
                BMR:`BMR: ${calculatedBMR.toFixed(2)}, TDEE: ${calculatedTDEE.toFixed(2)}`,
                message: `${habits}`
            };
            // Send email using EmailJS
            emailjs.send('service_enxr8i8', 'template_hyqyxlq', templateParams, 'vG-CrAxun8EqZ_ttr')
        }

    };



    return (
        <div className="container background">

            <h1 className="mb-5 title">BMR-Daily Calorie Intake</h1>
            <Row >
                <Col md={6}>
                    <Form id="addmodal" onSubmit={handleSubmit}>
                        <fieldset>

                            <Form.Group as={Row} controlId="formGridName" className="form-item">
                                <Form.Label column md={3}>
                                    Name
                                </Form.Label>
                                <Col md={4}>
                                    <Form.Control
                                        required
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridGender" className="form-item" required>
                                <Form.Label column md={3}>
                                    Gender
                                </Form.Label>
                                <Col md={4} className="d-flex align-items-center">
                                    <Form.Check
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        label="Female"
                                        inline
                                        className='me-2'
                                        onChange={() => setGender("Female")}
                                    />
                                    <Form.Check
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        label="Male"
                                        inline
                                        onChange={() => setGender("Male")}
                                    />
                                    <LinkContainer
                                        to="/gender"
                                        className="ms-2"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        <h5 className="clickable">?</h5>
                                    </LinkContainer>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridAge" className="form-item">
                                <Form.Label column md={3}>
                                    Age
                                </Form.Label>
                                <Col md={4}>
                                    <Form.Control
                                        required
                                        type="number"
                                        defaultValue={18}
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridEmail" className="form-item">
                                <Form.Label column md={3}>
                                    E-mail
                                </Form.Label>
                                <Col md={4}>
                                    <Form.Control
                                        placeholder="@email.com"
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridHeight" className="form-item">
                                <Form.Label column md={3}>
                                    Height
                                </Form.Label>
                                <Col md={3}>
                                    <Form.Control
                                        required
                                        type="number"
                                        onChange={(e) => setHeight(e.target.value)}
                                    />
                                </Col>
                                <Col md={1} className="d-flex align-items-center">
                                    <p className='classic-p'>{heightUnit}</p>
                                </Col>
                                <Col md={4}>
                                    <Form.Select
                                        required
                                        value={heightUnit}
                                        onChange={(e) => setHeightUnit(e.target.value)}
                                        className="unit-select"
                                    >
                                        <option value="cm">cm</option>
                                        <option value="ft">ft</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formGridWeight" className="form-item">
                                <Form.Label column md={3}>
                                    Weight
                                </Form.Label>
                                <Col md={3}>
                                    <Form.Control
                                        required
                                        type="number"
                                        onChange={(e) => setWeight(e.target.value)}
                                    />
                                </Col>
                                <Col md={1} className="d-flex align-items-center">
                                    <p className='classic-p'>{weightUnit}</p>
                                </Col>
                                <Col md={4}>
                                    <Form.Select
                                        required
                                        value={weightUnit}
                                        onChange={(e) => setWeightUnit(e.target.value)}
                                        className="unit-select"
                                    >
                                        <option value="kg">kg</option>
                                        <option value="lbs">lbs</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>


                            <Form.Group as={Row} controlId="formGridActivityLevel" className="form-item">
                                <Form.Label column md={3}>
                                    Activity Level
                                </Form.Label>
                                <Col md={4}>
                                    <Form.Select
                                        required
                                        value={activityLevel}
                                        onChange={(e) => setActivityLevel(e.target.value)}
                                    >
                                        {Object.keys(activityFactors).map((level, i) => (
                                            <option key={i} value={level}>
                                                {level}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Col>
                            </Form.Group>


                            {formSubmitted && (
                                <div className="alert alert-success" role="alert" id="success_message">
                                    Thanks for sharing your information with us, we will send you your BMR shortly.
                                </div>
                            )}

                            {formSubmitted && (
                                <div className="alert alert-success" role="alert" id="success_message">
                                    Thanks for sharing your information with us, we will send you your BMR by e-mail shortly.
                                    <br />
                                    Your BMR is: {bmr}
                                    <br />
                                    Your TDEE is: {tdee}
                                </div>
                            )}


                            <Form.Group as={Row}>
                                <Col md={{ span: 3, offset: 3 }}>
                                    <button type="submit" className="btn btn-warning">
                                        Send <span className="glyphicon glyphicon-send"></span>
                                    </button>
                                </Col>
                            </Form.Group>
                        </fieldset>
                    </Form>
                </Col>
                <Col>
                    <Table striped bordered hover responsive className="table-info">
                        <thead>
                            <tr>
                                <th style={{ width: '20%' }}>Activity Level</th>
                                <th style={{ width: '80%' }}>Meaning</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(activityLevelDefinitions).map((level, i) => (
                                <tr key={i}>
                                    <td >{level}</td>
                                    <td >{activityLevelDefinitions[level]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    );
}