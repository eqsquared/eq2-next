import Head from 'next/head'
import { useEffect } from 'react'

function updateValue(id, value) {
    document.getElementById(`${id}-value`).innerText = value;
    calculateROI();
}

function calculateTurnoverCost(salary) {
    if (salary <= 40000) return salary * 0.5;
    if (salary <= 60000) return ((salary - 40000) / 20000 * 100) + 50;
    if (salary <= 90000) return ((salary - 60000) / 30000 * 50) + 150;
    if (salary <= 150000) return ((salary - 90000) / 60000 * 100) + 200;
    return salary * 5;
}

function calculateROI() {
    const numEmployees = parseInt(document.getElementById('num-employees').value);
    const numHires = parseInt(document.getElementById('num-hires').value);
    const avgSalary = parseInt(document.getElementById('avg-salary').value);
    const annualSales = parseInt(document.getElementById('annual-sales').value);

    const turnoverCost = calculateTurnoverCost(avgSalary);
    const badHireCost = turnoverCost * 1.75;

    const totalBadHireCost = badHireCost * numHires;
    const totalTurnoverCost = turnoverCost * numEmployees * 0.01;

    const lossOfSales = annualSales * 0.07;
    const increasedSickDaysCost = numEmployees * avgSalary / 260 * .1;
    const productivityLossCost = numEmployees * avgSalary * 0.03;
    const higherTurnoverCost = turnoverCost * numEmployees * 0.02;

    const totalLeadershipCost = lossOfSales + increasedSickDaysCost + productivityLossCost + higherTurnoverCost;
    const totalPotentialSavings = totalBadHireCost + totalTurnoverCost + totalLeadershipCost;

    const softwareCost = 20000; // Annual cost of your software
    const roi = ((totalPotentialSavings - softwareCost) / softwareCost) * 100;

    document.getElementById('potential-savings').innerText = `$${totalPotentialSavings.toFixed(2)}`;
    document.getElementById('roi').innerText = `${roi.toFixed(2)}%`;
}

export default function Home() {
    useEffect(() => {
        calculateROI(); // Initial calculation
    }, []);

    return (
        <div>
            <Head>
                <title>Hire Smarter with EQ²</title>
            </Head>

            <header className="hero-section">
                <div className="hero-content">
                    <div className="hero-container">
                        <h1>Eliminate Hiring Mistakes, Strengthen Leadership, And Boost Engagement</h1>
                        <p>The Customized, Data-Driven HR Solution For Recruiting, Nurturing, And Retaining Exceptional Talent.</p>
                        <a href="#" className="cta-button button">Try The Assessment Now</a>
                    </div>
                </div>
            </header>

            <section className="problem-statement section">
                <h2>Sound Familiar?</h2>
                <ul className="checklist">
                    <li>✅ Great Resume</li>
                    <li>✅ Killed The Interview</li>
                    <li>✅ Trusted Your Gut</li>
                    <li>❌ Huge Disappointment</li>
                </ul>
                <p>Resumes can deceive, interviews reveal only so much, and our intuition isn't scalable or even as reliable as we think.</p>
            </section>

            <section className="roi section">
                <div className="roi-calculator">
                    <h2>Calculate Your ROI</h2>
                    <label htmlFor="num-employees">Number of Employees:</label>
                    <input type="range" id="num-employees" name="num-employees" min="0" max="1000" defaultValue="100"
                           onInput={(e) => updateValue('num-employees', e.target.value)} />
                    <span id="num-employees-value">100</span>

                    <label htmlFor="num-hires">Number of New Hires Next Year:</label>
                    <input type="range" id="num-hires" name="num-hires" min="0" max="100" defaultValue="10"
                           onInput={(e) => updateValue('num-hires', e.target.value)} />
                    <span id="num-hires-value">10</span>

                    <label htmlFor="avg-salary">Average Annual Salary ($):</label>
                    <input type="range" id="avg-salary" name="avg-salary" min="30000" max="300000" step="1000"
                           defaultValue="60000" onInput={(e) => updateValue('avg-salary', e.target.value)} />
                    <span id="avg-salary-value">$60,000</span>

                    <label htmlFor="annual-sales">Annual Sales ($):</label>
                    <input type="range" id="annual-sales" name="annual-sales" min="100000" max="100000000" step="100000"
                           defaultValue="1000000" onInput={(e) => updateValue('annual-sales', e.target.value)} />
                    <span id="annual-sales-value">$1,000,000</span>
                </div>

                <div className="roi-results">
                    <h3>Potential Annual Savings: <span id="potential-savings">$0.00</span></h3>
                    <h3>Projected ROI: <span id="roi">0%</span></h3>
                </div>
            </section>

            <section className="solution-overview section">
                <h2>Empower Your Team With Data-Driven Decisions Throughout The Employee Journey</h2>
                <p>Save time and resources by avoiding hiring errors, improving managerial performance, and reducing turnover. EQ² combines behavioral insights with user-friendly software to help you create an outstanding company culture.</p>
                <ul className="benefits">
                    <li>Uncover Hidden Strengths And Weaknesses</li>
                    <li>Reduce Bias And Subjectivity</li>
                    <li>Save Time And Resources</li>
                    <li>Improve Team Performance And Retention</li>
                </ul>
            </section>

            <section className="improve-hiring-journey section">
                <h2>Enhance The Entire Employee Cycle</h2>
                <p>Remove uncertainty and inefficiency, focusing on attracting, onboarding, and retaining top talent.</p>
            </section>

            <section className="personalize-leadership-development section">
                <h2>Tailored Leadership Development Powered By AI</h2>
                <p>Retain top talent by addressing leadership inefficiencies and communication gaps.</p>
            </section>

            <section className="build-high-performing-teams section">
                <h2>Build High-Performing Teams</h2>
                <p>Lead effectively by comprehending individual and team strengths and areas for improvement.</p>
            </section>

            <section className="find-disengagement section">
                <h2>Identify And Resolve Disengagement Issues</h2>
                <p>Enhance engagement with rapid, validated surveys, predictive analytics, and intelligent AI-driven strategies.</p>
            </section>

            <section className="level-up-performance section">
                <h2>Elevate Performance Through Behavioral Insights</h2>
                <p>Performance management tools to develop leadership, increase accountability, and engage employees.</p>
            </section>

            <section className="how-it-works section">
                <h2>The Behavioral Science Behind EQ²</h2>
                <p>The EQ² Behavioral Assessment helps you understand how employee behaviors manifest day-to-day, allowing you to improve your team as a whole.</p>
                <ol className="steps">
                    <li><strong>Sign Up:</strong> Create your account and set up your first assessment.</li>
                    <li><strong>Invite Candidates:</strong> Send assessment invitations to your shortlisted candidates.</li>
                    <li><strong>Review Results:</strong> Receive detailed reports highlighting each candidate's strengths and areas for improvement.</li>
                    <li><strong>Make Informed Decisions:</strong> Use the data-driven insights to make the best hiring decisions.</li>
                </ol>
            </section>

            <section className="testimonials section">
                <h2>Testimonials And Case Studies</h2>
                <blockquote>
                    "Using this assessment tool has transformed our hiring process. We now make better, more informed hiring decisions and have seen a significant improvement in employee performance and retention." - [Satisfied Customer]
                </blockquote>
                <p>Company XYZ reduced their turnover rate by 25% after implementing our assessment tool, saving them thousands in hiring costs and improving team cohesion.</p>
            </section>

            <section className="additional-reasons section">
                <h2>Why Choose EQ²?</h2>
                <p>Resumes are often misleading, and interviews can be influenced by biases. Our assessment provides objective data to complement your hiring process. Gain deeper insights into candidates' true capabilities and potential for success.</p>
            </section>
        </div>
    )
}
