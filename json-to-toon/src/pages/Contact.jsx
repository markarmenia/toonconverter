const Contact = () => {
    return (
        <div className="page-container">
            <h1>Contact Us - TOON Converter Support</h1>

            <section>
                <h2>Get in Touch</h2>
                <p>
                    We're here to help! Whether you have questions about using TOON Converter, need technical support,
                    want to report a bug, or have suggestions for new features, we'd love to hear from you. The TOON
                    Converter team is committed to providing the best JSON to TOON and YAML to TOON conversion
                    experience possible.
                </p>
            </section>

            <section>
                <h2>Contact Information</h2>

                <div className="contact-info" style={{ marginTop: '2rem' }}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3>Email Support</h3>
                        <p>
                            For general inquiries, technical support, or feature requests:
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--accent-color)' }}>
                            <strong>Email:</strong> <a href="mailto:support@toon-converter.com" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>support@toon-converter.com</a>
                        </p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            We typically respond within 24-48 hours during business days.
                        </p>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3>GitHub Repository</h3>
                        <p>
                            For technical issues, bug reports, and feature requests, please visit our GitHub repository:
                        </p>
                        <p style={{ fontSize: '1.1rem' }}>
                            <strong>GitHub:</strong> <a href="https://github.com/toon-format/toon" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)', textDecoration: 'none' }}>toon-format/toon</a>
                        </p>
                        <p>
                            You can:
                        </p>
                        <ul>
                            <li>Report bugs by opening an issue</li>
                            <li>Request new features through discussions</li>
                            <li>Contribute code via pull requests</li>
                            <li>Review and contribute to the TOON specification</li>
                            <li>Star the repository to show your support</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <h2>How We Can Help</h2>

                <h3>Technical Support</h3>
                <p>
                    If you're experiencing technical difficulties with TOON Converter, our support team can assist with:
                </p>
                <ul>
                    <li>Conversion errors or unexpected output</li>
                    <li>Browser compatibility issues</li>
                    <li>Understanding TOON format specifications</li>
                    <li>Best practices for JSON/YAML to TOON conversion</li>
                    <li>Integration guidance for your LLM applications</li>
                    <li>Performance optimization tips</li>
                </ul>

                <h3>Feature Requests</h3>
                <p>
                    We're always looking to improve TOON Converter. If you have ideas for new features or enhancements,
                    please let us know. Some examples of valuable feedback include:
                </p>
                <ul>
                    <li>Additional output format options</li>
                    <li>New delimiter types</li>
                    <li>Batch conversion capabilities</li>
                    <li>API endpoints for programmatic access</li>
                    <li>Additional file format support</li>
                    <li>Enhanced validation features</li>
                </ul>

                <h3>Bug Reports</h3>
                <p>
                    Found a bug? Please report it! When submitting a bug report, include:
                </p>
                <ul>
                    <li>A clear description of the issue</li>
                    <li>Steps to reproduce the problem</li>
                    <li>Expected vs. actual behavior</li>
                    <li>Your browser and operating system</li>
                    <li>Sample input data (if applicable and not sensitive)</li>
                    <li>Screenshots or error messages</li>
                </ul>

                <h3>General Inquiries</h3>
                <p>
                    Have questions about:
                </p>
                <ul>
                    <li>TOON format specifications and standards</li>
                    <li>Use cases for TOON in LLM applications</li>
                    <li>Privacy and data security practices</li>
                    <li>Open source contribution opportunities</li>
                    <li>Commercial licensing inquiries</li>
                    <li>Partnership opportunities</li>
                </ul>
                <p>
                    Feel free to reach out via email, and we'll be happy to assist.
                </p>
            </section>

            <section>
                <h2>Community & Collaboration</h2>
                <p>
                    TOON Converter is an open-source project, and we welcome community involvement. Here's how you
                    can get involved:
                </p>

                <h3>Contribute to Development</h3>
                <ul>
                    <li>Fork the repository and submit pull requests</li>
                    <li>Improve documentation and examples</li>
                    <li>Add support for additional programming languages</li>
                    <li>Enhance the user interface and user experience</li>
                    <li>Write tests to improve code quality</li>
                </ul>

                <h3>Share Your Experience</h3>
                <ul>
                    <li>Write blog posts or tutorials about TOON Converter</li>
                    <li>Share your use cases and success stories</li>
                    <li>Create video tutorials for the community</li>
                    <li>Recommend TOON Converter to colleagues and peers</li>
                    <li>Star and share our GitHub repository</li>
                </ul>

                <h3>Spread the Word</h3>
                <ul>
                    <li>Share on social media (Twitter, LinkedIn, Reddit)</li>
                    <li>Write reviews or recommendations</li>
                    <li>Mention in relevant forums and communities</li>
                    <li>Include in your developer resources lists</li>
                </ul>
            </section>

            <section>
                <h2>Response Times</h2>
                <p>
                    We strive to respond to all inquiries as quickly as possible:
                </p>
                <ul>
                    <li><strong>Email:</strong> 24-48 hours during business days (Monday-Friday)</li>
                    <li><strong>GitHub Issues:</strong> 1-3 business days for initial response</li>
                    <li><strong>Critical Bugs:</strong> We prioritize security and critical functionality issues</li>
                    <li><strong>Feature Requests:</strong> Reviewed during regular development cycles</li>
                </ul>
                <p>
                    Please note that response times may vary during holidays or periods of high volume.
                </p>
            </section>

            <section>
                <h2>Before Contacting Support</h2>
                <p>
                    To help us assist you more efficiently, please:
                </p>
                <ul>
                    <li>Review our <a href="/docs">Documentation</a> for common questions and solutions</li>
                    <li>Check the <a href="/about">About page</a> for information about TOON format</li>
                    <li>Search existing <a href="https://github.com/toon-format/toon/issues" target="_blank" rel="noreferrer">GitHub issues</a> to see if your question has been addressed</li>
                    <li>Try different browsers if you're experiencing technical issues</li>
                    <li>Clear your browser cache and cookies</li>
                </ul>
            </section>

            <section>
                <h2>Privacy Notice</h2>
                <p>
                    When you contact us, we collect only the information necessary to respond to your inquiry
                    (such as your email address and message content). We do not share this information with third
                    parties, and we use it solely for support purposes. For more information, please see our{' '}
                    <a href="/privacy">Privacy Policy</a>.
                </p>
            </section>

            <section>
                <h2>Social Media</h2>
                <p>
                    While we don't have dedicated social media accounts yet, you can stay updated by:
                </p>
                <ul>
                    <li>Watching our GitHub repository for updates and releases</li>
                    <li>Following discussions in the TOON format community</li>
                    <li>Subscribing to repository notifications for important announcements</li>
                </ul>
            </section>

            <section>
                <h2>Thank You</h2>
                <p>
                    Thank you for using TOON Converter and for being part of our community. Your feedback helps us
                    improve and make TOON Converter the best tool for converting JSON and YAML to TOON format.
                    Whether you're optimizing data for GPT-4, Claude, Gemini, or other Large Language Models, we're
                    here to support your success.
                </p>
                <p>
                    We look forward to hearing from you!
                </p>
            </section>
        </div>
    )
}

export default Contact
