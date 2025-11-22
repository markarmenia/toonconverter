const Privacy = () => {
    return (
        <div className="page-container">
            <h1>Privacy Policy - TOON Converter</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Last updated: {new Date().toLocaleDateString()}</p>

            <section>
                <h2>Introduction</h2>
                <p>
                    At TOON Converter, we take your privacy seriously. This Privacy Policy explains how we handle
                    information when you use our JSON to TOON and YAML to TOON conversion tool. Our commitment to
                    privacy is fundamental to our service - we designed TOON Converter to operate entirely in your
                    browser, ensuring that your data remains private and secure.
                </p>
            </section>

            <section>
                <h2>Information We DO NOT Collect</h2>
                <p>
                    TOON Converter is built with privacy as a core principle. Here's what we DO NOT do:
                </p>
                <ul>
                    <li><strong>We do not collect your conversion data:</strong> All JSON, YAML, and TOON conversions happen entirely in your browser. Your data never leaves your device.</li>
                    <li><strong>We do not track your usage:</strong> We do not use analytics, tracking pixels, or behavioral monitoring tools.</li>
                    <li><strong>We do not require accounts:</strong> No registration, login, or personal information is required to use TOON Converter.</li>
                    <li><strong>We do not store files:</strong> We do not save, upload, or transmit your files to any server.</li>
                    <li><strong>We do not use advertising cookies:</strong> We do not serve ads or use advertising-related cookies.</li>
                    <li><strong>We do not sell data:</strong> Since we don't collect your data, we have nothing to sell to third parties.</li>
                    <li><strong>We do not share data:</strong> Your conversion data is never shared with anyone because it never reaches our servers.</li>
                </ul>
            </section>

            <section>
                <h2>How TOON Converter Works</h2>
                <p>
                    Understanding how our tool works will help you appreciate our privacy-first approach:
                </p>

                <h3>Client-Side Processing</h3>
                <p>
                    TOON Converter is a client-side web application built with JavaScript and React. This means:
                </p>
                <ul>
                    <li>All conversions are performed locally in your web browser</li>
                    <li>Your JSON and YAML data is processed entirely on your device</li>
                    <li>No data is transmitted to our servers or any third-party services</li>
                    <li>The tool works even when you're offline (after initial page load)</li>
                    <li>Your conversion history is not stored anywhere</li>
                </ul>

                <h3>Open Source Transparency</h3>
                <p>
                    TOON Converter is open source, which means:
                </p>
                <ul>
                    <li>You can review our entire codebase on <a href="https://github.com/markarmenia/toonconverter" target="_blank" rel="noreferrer">GitHub</a></li>
                    <li>Security researchers can audit our code for privacy and security</li>
                    <li>The community can verify that we don't collect or transmit data</li>
                    <li>You can self-host the tool if you prefer</li>
                </ul>
            </section>

            <section>
                <h2>Data We May Collect</h2>

                <h3>Server Logs</h3>
                <p>
                    Like most websites, our web server may automatically log basic information when you visit our site:
                </p>
                <ul>
                    <li>IP address (for security and spam prevention)</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Date and time of access</li>
                    <li>Pages visited</li>
                    <li>Referring URL</li>
                </ul>
                <p>
                    This information is used solely for:
                </p>
                <ul>
                    <li>Technical maintenance and troubleshooting</li>
                    <li>Security monitoring and DDoS prevention</li>
                    <li>Understanding basic usage patterns (e.g., total visitors)</li>
                </ul>
                <p>
                    <strong>Important:</strong> These logs do NOT contain any of your conversion data, as that data
                    never reaches our servers.
                </p>

                <h3>Local Storage</h3>
                <p>
                    TOON Converter may use browser local storage for:
                </p>
                <ul>
                    <li>Saving your preferred tab selection (JSON or YAML)</li>
                    <li>Remembering your formatting preferences (indentation, delimiter)</li>
                    <li>Storing UI preferences for better user experience</li>
                </ul>
                <p>
                    This data is stored only in your browser and is never transmitted to our servers. You can clear
                    this data at any time through your browser settings.
                </p>
            </section>

            <section>
                <h2>Cookies</h2>
                <p>
                    TOON Converter uses minimal cookies, if any. For detailed information about our cookie usage,
                    please see our <a href="/cookies">Cookie Policy</a>.
                </p>
                <p>
                    We do not use:
                </p>
                <ul>
                    <li>Advertising cookies</li>
                    <li>Tracking cookies</li>
                    <li>Third-party analytics cookies (like Google Analytics)</li>
                    <li>Social media cookies</li>
                </ul>
            </section>

            <section>
                <h2>Third-Party Services</h2>

                <h3>GitHub</h3>
                <p>
                    We link to our GitHub repository for open-source transparency and community collaboration. When
                    you visit GitHub through our links, you're subject to GitHub's privacy policy, not ours.
                </p>

                <h3>Hosting Provider</h3>
                <p>
                    TOON Converter is hosted on a web hosting service. While they may have access to server logs,
                    they do not have access to your conversion data (because it never reaches the server).
                </p>

                <h3>No Analytics Services</h3>
                <p>
                    We intentionally do not use Google Analytics, Facebook Pixel, or any other third-party analytics
                    services. Your privacy is more important to us than detailed usage statistics.
                </p>
            </section>

            <section>
                <h2>Data Security</h2>
                <p>
                    We implement several security measures to protect your privacy:
                </p>
                <ul>
                    <li><strong>HTTPS Encryption:</strong> All communication with our website is encrypted using SSL/TLS</li>
                    <li><strong>No Data Storage:</strong> We can't lose your data because we don't store it</li>
                    <li><strong>Client-Side Processing:</strong> Your data never leaves your device during conversion</li>
                    <li><strong>Open Source:</strong> Security researchers can audit our code</li>
                    <li><strong>Regular Updates:</strong> We keep dependencies up-to-date to address security vulnerabilities</li>
                </ul>
            </section>

            <section>
                <h2>Your Rights and Control</h2>
                <p>
                    You have complete control over your data:
                </p>
                <ul>
                    <li><strong>No account deletion needed:</strong> Since we don't create accounts, there's nothing to delete</li>
                    <li><strong>Clear local storage:</strong> You can clear browser local storage at any time</li>
                    <li><strong>Use offline:</strong> Use TOON Converter offline for maximum privacy</li>
                    <li><strong>Self-host:</strong> Download and host the tool yourself if desired</li>
                    <li><strong>Inspect network traffic:</strong> Use browser developer tools to verify no data is transmitted</li>
                </ul>
            </section>

            <section>
                <h2>Children's Privacy</h2>
                <p>
                    TOON Converter does not target children under the age of 13, and we do not knowingly collect
                    personal information from children. Since we don't collect user data at all, this is not a concern
                    for our service.
                </p>
            </section>

            <section>
                <h2>International Users</h2>
                <p>
                    TOON Converter is designed for users worldwide. Since all processing happens in your browser:
                </p>
                <ul>
                    <li>Your data never crosses international borders via our service</li>
                    <li>GDPR compliance is inherent in our no-data-collection model</li>
                    <li>CCPA requirements don't apply since we don't sell personal information</li>
                    <li>You maintain complete control over your data regardless of location</li>
                </ul>
            </section>

            <section>
                <h2>Contact for Email Support</h2>
                <p>
                    If you contact us via email (info@convertertoon.com), we will collect:
                </p>
                <ul>
                    <li>Your email address</li>
                    <li>The content of your message</li>
                    <li>Any information you voluntarily provide</li>
                </ul>
                <p>
                    This information is used only to:
                </p>
                <ul>
                    <li>Respond to your inquiry</li>
                    <li>Provide technical support</li>
                    <li>Address reported issues</li>
                </ul>
                <p>
                    We do not:
                </p>
                <ul>
                    <li>Add you to marketing lists without consent</li>
                    <li>Share your email with third parties</li>
                    <li>Use your information for purposes other than support</li>
                </ul>
            </section>

            <section>
                <h2>Changes to This Privacy Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. The "Last updated" date at the top of this
                    page indicates when the policy was last revised. Changes will be posted on this page, and if
                    they're significant, we may add a notice on our homepage.
                </p>
                <p>
                    However, our core privacy commitment will never change: we will never collect, store, or
                    transmit your conversion data.
                </p>
            </section>

            <section>
                <h2>Legal Basis for Processing (GDPR)</h2>
                <p>
                    For users in the European Economic Area (EEA), our legal basis for processing any incidental
                    data (like server logs) is:
                </p>
                <ul>
                    <li><strong>Legitimate Interest:</strong> To provide and maintain our service securely</li>
                    <li><strong>Consent:</strong> When you contact us for support</li>
                </ul>
                <p>
                    Since we don't process personal conversion data, most GDPR obligations don't apply to our
                    core functionality.
                </p>
            </section>

            <section>
                <h2>California Privacy Rights (CCPA)</h2>
                <p>
                    California residents have specific rights under the California Consumer Privacy Act (CCPA).
                    However, since TOON Converter:
                </p>
                <ul>
                    <li>Does not collect personal information through the conversion tool</li>
                    <li>Does not sell personal information</li>
                    <li>Does not share personal information with third parties</li>
                </ul>
                <p>
                    Most CCPA provisions don't apply. If you contact us for support, you can request deletion of
                    your email correspondence at any time.
                </p>
            </section>

            <section>
                <h2>Questions or Concerns</h2>
                <p>
                    If you have questions about this Privacy Policy or concerns about how your information is
                    handled, please:
                </p>
                <ul>
                    <li>Email us at: info@convertertoon.com</li>
                    <li>Open an issue on our <a href="https://github.com/markarmenia/toonconverter" target="_blank" rel="noreferrer">GitHub repository</a></li>
                    <li>Visit our <a href="/contact">Contact page</a> for more ways to reach us</li>
                </ul>
            </section>

            <section>
                <h2>Summary</h2>
                <p>
                    In plain English, here's our privacy promise:
                </p>
                <ul>
                    <li>✅ Your conversion data stays on your device</li>
                    <li>✅ We don't track you</li>
                    <li>✅ We don't collect personal information</li>
                    <li>✅ We don't sell or share data</li>
                    <li>✅ Our code is open source and auditable</li>
                    <li>✅ You can use the tool completely anonymously</li>
                </ul>
                <p>
                    TOON Converter is designed to be a privacy-respecting tool for converting JSON and YAML to TOON
                    format for use with Large Language Models. Your trust is important to us, and we've built our
                    service accordingly.
                </p>
            </section>
        </div>
    )
}

export default Privacy
