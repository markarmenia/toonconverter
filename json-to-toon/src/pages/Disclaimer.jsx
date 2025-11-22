const Disclaimer = () => {
    return (
        <div className="page-container">
            <h1>Disclaimer - TOON Converter</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Last updated: {new Date().toLocaleDateString()}</p>

            <section>
                <h2>General Disclaimer</h2>
                <p>
                    The information, tools, and services provided by TOON Converter (the "Service") are for general
                    informational and educational purposes only. While we strive to provide accurate and reliable
                    JSON to TOON and YAML to TOON conversion capabilities, we make no representations or warranties
                    of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or
                    availability of the Service for any purpose.
                </p>
            </section>

            <section>
                <h2>No Warranty of Accuracy</h2>
                <p>
                    TOON Converter is provided as a conversion tool that processes your input data to generate TOON
                    format output. While we've taken care to ensure the conversion logic is correct, we cannot and
                    do not guarantee:
                </p>
                <ul>
                    <li><strong>100% Accuracy:</strong> Conversions may contain errors or unexpected results in edge cases</li>
                    <li><strong>Format Perfection:</strong> Output may not be exactly what you expect for all input types</li>
                    <li><strong>Data Integrity:</strong> Complex or unusual data structures may not convert perfectly</li>
                    <li><strong>LLM Compatibility:</strong> Converted data may not work optimally with all LLMs in all contexts</li>
                    <li><strong>Token Optimization:</strong> Token savings may vary depending on your specific use case</li>
                </ul>
                <p>
                    <strong>Always verify the output before use in production systems, critical applications, or
                        important workflows.</strong>
                </p>
            </section>

            <section>
                <h2>Use at Your Own Risk</h2>
                <p>
                    Your use of TOON Converter is entirely at your own risk. You acknowledge and agree that:
                </p>
                <ul>
                    <li>You are responsible for validating all conversion output</li>
                    <li>You should maintain backups of your original data</li>
                    <li>You should test converted data before production use</li>
                    <li>Any reliance you place on the Service is strictly at your own discretion</li>
                    <li>You are solely responsible for any consequences of using converted data</li>
                    <li>We are not responsible for any business decisions made based on converted output</li>
                </ul>
            </section>

            <section>
                <h2>No Professional Advice</h2>
                <p>
                    TOON Converter is a technical tool, not a professional service. The Service does not constitute:
                </p>
                <ul>
                    <li><strong>Technical Consulting:</strong> We don't provide personalized technical advice</li>
                    <li><strong>Data Architecture Guidance:</strong> We don't advise on data structure design</li>
                    <li><strong>Business Consulting:</strong> We don't provide business strategy guidance</li>
                    <li><strong>Legal Advice:</strong> We don't advise on data compliance or legal matters</li>
                    <li><strong>Security Consulting:</strong> We don't advise on data security practices</li>
                </ul>
                <p>
                    If you need professional advice regarding your data, LLM integration, or business processes,
                    please consult with qualified professionals in those fields.
                </p>
            </section>

            <section>
                <h2>Educational and Development Tool</h2>
                <p>
                    TOON Converter is designed as an educational and development tool to help users:
                </p>
                <ul>
                    <li>Learn about the TOON format</li>
                    <li>Experiment with data format conversions</li>
                    <li>Prototype LLM-optimized data structures</li>
                    <li>Develop and test applications</li>
                </ul>
                <p>
                    While you may use the Service for commercial purposes, it is primarily intended for:
                </p>
                <ul>
                    <li>Educational exploration of TOON format</li>
                    <li>Development and testing environments</li>
                    <li>Prototyping and proof-of-concept work</li>
                    <li>Learning about token optimization for LLMs</li>
                </ul>
                <p>
                    <strong>For mission-critical or production systems, always thoroughly test the conversion output
                        and consider implementing additional validation and error handling.</strong>
                </p>
            </section>

            <section>
                <h2>Data Responsibility</h2>

                <h3>Your Data, Your Responsibility</h3>
                <p>
                    You are solely responsible for:
                </p>
                <ul>
                    <li>The data you input into TOON Converter</li>
                    <li>Ensuring you have the right to convert and use the data</li>
                    <li>Compliance with data protection laws (GDPR, CCPA, etc.)</li>
                    <li>Protecting sensitive or confidential information</li>
                    <li>Not inputting illegal, harmful, or infringing content</li>
                    <li>Verifying the accuracy and completeness of converted output</li>
                </ul>

                <h3>No Data Recovery</h3>
                <p>
                    Since all conversions happen client-side in your browser:
                </p>
                <ul>
                    <li>We cannot recover lost or corrupted data</li>
                    <li>We have no backups of your input or output</li>
                    <li>You are responsible for maintaining your own backups</li>
                    <li>We cannot assist with data recovery under any circumstances</li>
                </ul>

                <h3>No Liability for Data Loss</h3>
                <p>
                    We are not responsible for:
                </p>
                <ul>
                    <li>Loss of data due to browser crashes or closures</li>
                    <li>Incorrect conversions that result in data corruption</li>
                    <li>Loss of data due to your device or network issues</li>
                    <li>Any other form of data loss or corruption</li>
                </ul>
            </section>

            <section>
                <h2>Technical Limitations</h2>

                <h3>Browser Dependencies</h3>
                <p>
                    TOON Converter relies on your web browser for functionality. We do not guarantee:
                </p>
                <ul>
                    <li>Compatibility with all browsers or browser versions</li>
                    <li>Proper functionality on outdated or unsupported browsers</li>
                    <li>Consistent behavior across different browsers</li>
                    <li>Performance on low-specification devices</li>
                </ul>

                <h3>Size and Complexity Limits</h3>
                <p>
                    While we don't impose hard limits, very large or complex data may:
                </p>
                <ul>
                    <li>Take longer to process</li>
                    <li>Cause browser performance issues</li>
                    <li>Result in browser crashes on low-memory devices</li>
                    <li>Produce unexpected results</li>
                </ul>

                <h3>No Guarantee of Availability</h3>
                <p>
                    We make no guarantees about:
                </p>
                <ul>
                    <li>Continuous availability of the Service</li>
                    <li>Freedom from bugs or errors</li>
                    <li>Uninterrupted operation</li>
                    <li>Future feature compatibility</li>
                </ul>
            </section>

            <section>
                <h2>Third-Party Integration Disclaimer</h2>
                <p>
                    If you use TOON-converted data with third-party services (such as OpenAI GPT, Anthropic Claude,
                    Google Gemini, or other LLM APIs):
                </p>
                <ul>
                    <li>We are not affiliated with these third-party services</li>
                    <li>We do not guarantee compatibility with third-party APIs</li>
                    <li>We are not responsible for how third parties process your data</li>
                    <li>You are subject to the terms and policies of those third parties</li>
                    <li>We cannot guarantee token savings or cost reductions</li>
                    <li>We are not liable for any costs incurred with third-party services</li>
                </ul>
                <p>
                    Always test TOON-formatted data with your target LLM before production use and at scale.
                </p>
            </section>

            <section>
                <h2>OpenAI, Anthropic, and Google Disclaimer</h2>
                <p>
                    TOON Converter is an independent tool and is not:
                </p>
                <ul>
                    <li>Affiliated with, endorsed by, or sponsored by OpenAI (GPT)</li>
                    <li>Affiliated with, endorsed by, or sponsored by Anthropic (Claude)</li>
                    <li>Affiliated with, endorsed by, or sponsored by Google (Gemini)</li>
                    <li>An official tool of any LLM provider</li>
                </ul>
                <p>
                    References to GPT, Claude, Gemini, or other LLMs are for informational purposes only to describe
                    potential use cases. These are trademarks of their respective owners.
                </p>
            </section>

            <section>
                <h2>TOON Format Specification</h2>
                <p>
                    The TOON format is an evolving specification. We make no guarantees that:
                </p>
                <ul>
                    <li>The current implementation perfectly matches the official specification</li>
                    <li>Future versions of TOON format will be backward compatible</li>
                    <li>Output will conform to all possible interpretations of the spec</li>
                    <li>TOON format will gain widespread adoption</li>
                </ul>
                <p>
                    For the official TOON specification, please refer to the{' '}
                    <a href="https://github.com/markarmenia/toonconverter" target="_blank" rel="noreferrer">GitHub repository</a>.
                </p>
            </section>

            <section>
                <h2>Security Disclaimer</h2>
                <p>
                    While we implement security best practices:
                </p>
                <ul>
                    <li>We cannot guarantee absolute security</li>
                    <li>No system is completely immune to vulnerabilities</li>
                    <li>You should not input highly sensitive data unless you understand the risks</li>
                    <li>All processing happens client-side, but your browser security is your responsibility</li>
                </ul>
                <p>
                    For highly sensitive data, consider:
                </p>
                <ul>
                    <li>Using the tool on a secure, isolated system</li>
                    <li>Self-hosting the open-source code</li>
                    <li>Implementing additional security measures</li>
                    <li>Consulting security professionals</li>
                </ul>
            </section>

            <section>
                <h2>Performance and Results Disclaimer</h2>

                <h3>Token Savings Not Guaranteed</h3>
                <p>
                    While TOON format is designed to be token-efficient:
                </p>
                <ul>
                    <li>Actual token savings will vary by use case</li>
                    <li>Some data structures may not benefit from TOON format</li>
                    <li>Token counting varies between different LLMs</li>
                    <li>We make no specific claims about percentage savings</li>
                </ul>

                <h3>LLM Performance</h3>
                <p>
                    We do not guarantee that using TOON format will:
                </p>
                <ul>
                    <li>Improve LLM response quality</li>
                    <li>Reduce API costs (though it may in many cases)</li>
                    <li>Improve processing speed</li>
                    <li>Result in better model understanding</li>
                </ul>

                <h3>Testing Required</h3>
                <p>
                    You should always:
                </p>
                <ul>
                    <li>Test TOON output with your specific LLM</li>
                    <li>Measure actual token usage</li>
                    <li>Verify that your LLM correctly interprets TOON format</li>
                    <li>Compare results with original JSON/YAML formats</li>
                </ul>
            </section>

            <section>
                <h2>External Links Disclaimer</h2>
                <p>
                    TOON Converter may contain links to external websites (such as GitHub). We:
                </p>
                <ul>
                    <li>Do not control the content of external sites</li>
                    <li>Are not responsible for their accuracy or reliability</li>
                    <li>Do not endorse any external content</li>
                    <li>Are not liable for any harm from using external links</li>
                </ul>
                <p>
                    Your use of external links is at your own risk.
                </p>
            </section>

            <section>
                <h2>Changes to Service and Disclaimer</h2>
                <p>
                    We reserve the right to:
                </p>
                <ul>
                    <li>Modify or discontinue the Service at any time</li>
                    <li>Update this Disclaimer without notice</li>
                    <li>Change features or functionality</li>
                    <li>Add or remove conversion options</li>
                </ul>
                <p>
                    Check the "Last updated" date to see when this Disclaimer was last revised.
                </p>
            </section>

            <section>
                <h2>Open Source Software Disclaimer</h2>
                <p>
                    TOON Converter is open-source software. As such:
                </p>
                <ul>
                    <li>It is provided "as is" without warranty</li>
                    <li>Contributors are not liable for issues or damages</li>
                    <li>You can review the code to verify functionality</li>
                    <li>You can fork and modify the code (subject to license)</li>
                    <li>Community contributions may introduce bugs</li>
                </ul>
                <p>
                    See the license file in the GitHub repository for specific terms.
                </p>
            </section>

            <section>
                <h2>Limitation of Liability</h2>
                <p>
                    In no event shall TOON Converter, its contributors, or developers be liable for:
                </p>
                <ul>
                    <li>Any direct, indirect, incidental, special, or consequential damages</li>
                    <li>Loss of profits, revenue, data, or business opportunities</li>
                    <li>Errors in conversion output</li>
                    <li>Data corruption or loss</li>
                    <li>System downtime or unavailability</li>
                    <li>Security breaches or vulnerabilities</li>
                    <li>Decisions made based on converted data</li>
                    <li>Costs incurred from using third-party services with converted data</li>
                </ul>
                <p>
                    This limitation applies even if we've been advised of the possibility of such damages.
                </p>
            </section>

            <section>
                <h2>Jurisdiction-Specific Disclaimers</h2>
                <p>
                    Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability.
                    In such jurisdictions, our liability will be limited to the maximum extent permitted by law. If
                    any disclaimer is found invalid, it will not affect the validity of other disclaimers.
                </p>
            </section>

            <section>
                <h2>User Obligation to Verify</h2>
                <p>
                    <strong>Critical Reminder:</strong> You must verify all conversion output before use. This includes:
                </p>
                <ul>
                    <li>Checking for accuracy and completeness</li>
                    <li>Testing with your target systems</li>
                    <li>Validating data integrity</li>
                    <li>Comparing against expected results</li>
                    <li>Implementing error handling in your applications</li>
                </ul>
                <p>
                    Do not use converted data in production without thorough testing and validation.
                </p>
            </section>

            <section>
                <h2>Contact for Questions</h2>
                <p>
                    If you have questions about this Disclaimer, please:
                </p>
                <ul>
                    <li>Email: info@convertertoon.com</li>
                    <li>GitHub: <a href="https://github.com/markarmenia/toonconverter" target="_blank" rel="noreferrer">markarmenia/toonconverter</a></li>
                    <li>Contact Page: <a href="/contact">Contact Us</a></li>
                </ul>
                <p>
                    Also review our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
                </p>
            </section>

            <section>
                <h2>Summary</h2>
                <p>
                    In plain language:
                </p>
                <ul>
                    <li>⚠️ TOON Converter is provided "as is" for educational and development purposes</li>
                    <li>⚠️ Always verify conversion output before use in production</li>
                    <li>⚠️ We're not liable for errors, data loss, or damages</li>
                    <li>⚠️ Test TOON output with your specific LLM before relying on it</li>
                    <li>⚠️ Token savings and performance improvements are not guaranteed</li>
                    <li>⚠️ You're responsible for your data and its use</li>
                    <li>⚠️ We're not affiliated with OpenAI, Anthropic, Google, or other LLM providers</li>
                    <li>⚠️ Maintain backups of your original data</li>
                </ul>
                <p>
                    Use TOON Converter responsibly and at your own risk. When in doubt, test thoroughly and consult
                    with professionals for critical applications.
                </p>
            </section>
        </div>
    )
}

export default Disclaimer
