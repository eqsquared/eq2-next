import Head from 'next/head'

export default function Home() {
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

            <!-- Problem Statement -->
            <section className="problem-statement section">
                <h2>Sound Familiar?</h2>
                <ul className="checklist">
                    <li>✅ Great Resume</li>
                    <li>✅ Killed The Interview</li>
                    <li>✅ Trusted Your Gut</li>
                    <li>❌ Huge Disappointment</li>
                </ul>
                <p>Resumes can deceive, interviews reveal only so much, and our intuition isn't scalable or
                    even as reliable as we think.</p>
                <!--  <img src="img/problem-statement-image.jpg" alt="Problem Statement" className="section-image">-->
            </section>

            <!-- Solution Overview -->
            <section className="solution-overview section">
                <h2>Empower Your Team With Data-Driven Decisions Throughout The Employee Journey</h2>
                <p>Save time and resources by avoiding hiring errors, improving managerial performance, and reducing turnover. EQ² combines behavioral insights with user-friendly software to help you create an outstanding company culture.</p>
                <ul className="benefits">
                    <li>Uncover Hidden Strengths And Weaknesses</li>
                    <li>Reduce Bias And Subjectivity</li>
                    <li>Save Time And Resources</li>
                    <li>Improve Team Performance And Retention</li>
                </ul>
                <!--  <img src="img/solution-overview-image.jpg" alt="Solution Overview" className="section-image">-->
            </section>

            <!-- Improve Hiring Journey -->
            <section className="improve-hiring-journey section">
                <h2>Enhance The Entire Employee Cycle</h2>
                <p>Remove uncertainty and inefficiency, focusing on attracting, onboarding, and retaining top talent.</p>
                <!--  <img src="img/improve-hiring-journey-image.jpg" alt="Improve Hiring Journey" className="section-image">-->
            </section>

            <!-- Personalize Leadership Development -->
            <section className="personalize-leadership-development section">
                <h2>Tailored Leadership Development Powered By AI</h2>
                <p>Retain top talent by addressing leadership inefficiencies and communication gaps.</p>
                <!--  <img src="img/personalize-leadership-development-image.jpg" alt="Personalize Leadership Development" className="section-image">-->
            </section>

            <!-- Build High-Performing Teams -->
            <section className="build-high-performing-teams section">
                <h2>Build High-Performing Teams</h2>
                <p>Lead effectively by comprehending individual and team strengths and areas for improvement.</p>
                <!--  <img src="img/build-high-performing-teams-image.jpg" alt="Build High-Performing Teams" className="section-image">-->
            </section>

            <!-- Find Disengagement And Fix It -->
            <section className="find-disengagement section">
                <h2>Identify And Resolve Disengagement Issues</h2>
                <p>Enhance engagement with rapid, validated surveys, predictive analytics, and intelligent AI-driven strategies.</p>
                <!--  <img src="img/find-disengagement-image.jpg" alt="Find Disengagement" className="section-image">-->
            </section>

            <!-- Level Up Performance With Behavioral Data -->
            <section className="level-up-performance section">
                <h2>Elevate Performance Through Behavioral Insights</h2>
                <p>Performance management tools to develop leadership, increase accountability, and engage employees.</p>
                <!--  <img src="img/level-up-performance-image.jpg" alt="Level Up Performance" className="section-image">-->
            </section>

            <!-- How It Works -->
            <section className="how-it-works section">
                <h2>The Behavioral Science Behind EQ²</h2>
                <p>The EQ² Behavioral Assessment helps you understand how employee behaviors manifest day-to-day, allowing you to improve your team as a whole.</p>
                <ol className="steps">
                    <li><strong>Sign Up:</strong> Create your account and set up your first assessment.</li>
                    <li><strong>Invite Candidates:</strong> Send assessment invitations to your shortlisted candidates.</li>
                    <li><strong>Review Results:</strong> Receive detailed reports highlighting each candidate's strengths and areas for improvement.</li>
                    <li><strong>Make Informed Decisions:</strong> Use the data-driven insights to make the best hiring decisions.</li>
                </ol>
                <!--  <img src="img/how-it-works-image.jpg" alt="How It Works" className="section-image">-->
            </section>

            <!-- Testimonials -->
            <section className="testimonials section">
                <h2>Testimonials And Case Studies</h2>
                <blockquote>
                    "Using this assessment tool has transformed our hiring process. We now make better, more informed hiring decisions and have seen a significant improvement in employee performance and retention." - [Satisfied Customer]
                </blockquote>
                <p>Company XYZ reduced their turnover rate by 25% after implementing our assessment tool, saving them thousands in hiring costs and improving team cohesion.</p>
                <!--  <img src="img/testimonials-image.jpg" alt="Testimonials" className="section-image">-->
            </section>

            <!-- Additional Reasons -->
            <section className="additional-reasons section">
                <h2>Why Choose EQ²?</h2>
                <p>Resumes are often misleading, and interviews can be influenced by biases. Our assessment provides objective data to complement your hiring process. Gain deeper insights into candidates' true capabilities and potential for success.</p>
                <!--  <img src="img/additional-reasons-image.jpg" alt="Additional Reasons" className="section-image">-->
            </section>
        </div>
    )
}
