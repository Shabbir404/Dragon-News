import React from 'react';

const TermsPage = () => {
    return (
        <div>
            <div className="bg-gray-50 min-h-screen flex flex-col items-center">
                {/* Header */}
                <header className="w-full bg-gradient-to-r from-red-500 to-yellow-500 py-6">
                    <h1 className="text-4xl font-bold text-white text-center">
                        Terms and Conditions
                    </h1>
                </header>

                {/* Main Content */}
                <main className="max-w-4xl w-full p-6">
                    <section className="text-gray-700 space-y-6">
                        <h2 className="text-3xl font-semibold">Welcome to Dragon News</h2>
                        <p className="text-lg leading-relaxed">
                            These Terms and Conditions govern your use of the Dragon News website.
                            By accessing or using this website, you agree to comply with these terms.
                            If you do not agree with these terms, please do not use the website.
                        </p>

                        <h3 className="text-2xl font-semibold">1. Acceptance of Terms</h3>
                        <p className="text-lg leading-relaxed">
                            By using the services provided by Dragon News, you agree to be bound by
                            these Terms and Conditions. We may update or change these terms from time
                            to time, and your continued use of the site signifies your acceptance of
                            any modifications made.
                        </p>

                        <h3 className="text-2xl font-semibold">2. User Responsibilities</h3>
                        <p className="text-lg leading-relaxed">
                            As a user of Dragon News, you are responsible for ensuring that all
                            information provided to us is accurate and up to date. You must also
                            ensure that your use of the site complies with applicable laws and does
                            not infringe on the rights of others.
                        </p>

                        <h3 className="text-2xl font-semibold">3. Content Ownership</h3>
                        <p className="text-lg leading-relaxed">
                            All content published on Dragon News, including articles, images, videos,
                            and other materials, is owned by Dragon News or its content providers.
                            You may not reproduce, distribute, or modify any of the content without
                            express written permission from Dragon News.
                        </p>

                        <h3 className="text-2xl font-semibold">4. Privacy and Data Collection</h3>
                        <p className="text-lg leading-relaxed">
                            We value your privacy. Our Privacy Policy outlines how we collect,
                            store, and use your data. By using Dragon News, you agree to the collection
                            and use of your information as described in the Privacy Policy.
                        </p>

                        <h3 className="text-2xl font-semibold">5. Prohibited Uses</h3>
                        <p className="text-lg leading-relaxed">
                            You agree not to use Dragon News for any unlawful purpose or in any
                            manner that could harm, disable, or disrupt the site. Prohibited activities
                            include, but are not limited to, posting harmful content, spamming, or
                            violating intellectual property rights.
                        </p>

                        <h3 className="text-2xl font-semibold">6. Third-Party Links</h3>
                        <p className="text-lg leading-relaxed">
                            Dragon News may contain links to third-party websites. We are not
                            responsible for the content, privacy practices, or terms of any third-party
                            sites. You visit these sites at your own risk.
                        </p>

                        <h3 className="text-2xl font-semibold">7. Limitation of Liability</h3>
                        <p className="text-lg leading-relaxed">
                            Dragon News is not liable for any damages resulting from the use or
                            inability to use the website. This includes any errors, omissions, or
                            interruptions in the content or services provided.
                        </p>

                        <h3 className="text-2xl font-semibold">8. Changes to Terms</h3>
                        <p className="text-lg leading-relaxed">
                            We reserve the right to modify or update these Terms and Conditions at
                            any time. Any changes will be posted on this page, and the updated terms
                            will become effective upon posting.
                        </p>

                        <h3 className="text-2xl font-semibold">9. Governing Law</h3>
                        <p className="text-lg leading-relaxed">
                            These Terms and Conditions shall be governed by and construed in
                            accordance with the laws of the jurisdiction in which Dragon News operates.
                            Any disputes arising under these terms will be subject to the exclusive
                            jurisdiction of the courts in that jurisdiction.
                        </p>

                        <h3 className="text-2xl font-semibold">10. Contact Us</h3>
                        <p className="text-lg leading-relaxed">
                            If you have any questions or concerns regarding these Terms and Conditions,
                            please contact us at <a href="mailto:support@dragonnews.com" className="text-red-500 hover:underline">support@dragonnews.com</a>.
                        </p>
                    </section>
                </main>

                {/* Footer */}
                <footer className="w-full bg-gray-800 text-white py-6 text-center">
                    <p className="text-sm">
                        © 2025 Dragon News. All rights reserved. | <a href="/privacy-policy" className="underline">Privacy Policy</a> | <a href="/terms-of-service" className="underline">Terms of Service</a>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default TermsPage;