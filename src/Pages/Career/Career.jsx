

const Career = () => {
    return (
        <div>
            <div className="bg-gray-50 min-h-screen flex flex-col items-center">
                {/* Header */}
                <header className="w-full bg-gradient-to-r from-red-500 to-yellow-500 py-6">
                    <h1 className="text-4xl font-bold text-white text-center">
                        Careers at Dragon News
                    </h1>
                </header>

                {/* Main Content */}
                <main className="max-w-4xl w-full p-6">
                    <section className="text-gray-700">
                        <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
                        <p className="text-lg leading-relaxed mb-6">
                            At Dragon News, we believe in the power of storytelling and in the impact
                            of truth. If you’re passionate about journalism, technology, and creating
                            a meaningful impact in the world, we want you on our team. We are looking
                            for talented, driven individuals who want to grow with us as we push the
                            boundaries of news delivery and media innovation.
                        </p>
                    </section>

                    <section className="text-gray-700">
                        <h2 className="text-2xl font-semibold mb-4">Why Work with Us?</h2>
                        <ul className="list-disc pl-5 text-lg leading-relaxed mb-6 space-y-2">
                            <li>Be part of a dynamic and innovative news organization.</li>
                            <li>Collaborate with top-tier professionals in the media industry.</li>
                            <li>Opportunities for career growth and skill development.</li>
                            <li>Competitive salaries and comprehensive benefits package.</li>
                            <li>A culture that promotes diversity, creativity, and work-life balance.</li>
                        </ul>
                    </section>

                    <section className="text-gray-700">
                        <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
                        <div className="space-y-6">
                            <div className="border p-4 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold">Journalist</h3>
                                <p className="text-lg leading-relaxed mb-2">
                                    As a Journalist at Dragon News, you will be responsible for covering
                                    breaking news, writing articles, and conducting interviews. You must
                                    have excellent writing skills and the ability to work in a fast-paced
                                    environment.
                                </p>
                                <a
                                    href="#"
                                    className="text-red-500 font-medium hover:underline"
                                >
                                    Apply Now
                                </a>
                            </div>

                            <div className="border p-4 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold">Video Editor</h3>
                                <p className="text-lg leading-relaxed mb-2">
                                    We are looking for a talented Video Editor to help create compelling
                                    video content. The ideal candidate should be skilled in editing,
                                    color grading, and delivering engaging video stories that resonate with
                                    audiences.
                                </p>
                                <a
                                    href="#"
                                    className="text-red-500 font-medium hover:underline"
                                >
                                    Apply Now
                                </a>
                            </div>

                            <div className="border p-4 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold">Content Strategist</h3>
                                <p className="text-lg leading-relaxed mb-2">
                                    As a Content Strategist, you will be responsible for planning, creating,
                                    and managing content that aligns with Dragon News' mission and voice.
                                    A deep understanding of digital media and SEO best practices is required.
                                </p>
                                <a
                                    href="#"
                                    className="text-red-500 font-medium hover:underline"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="text-gray-700">
                        <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
                        <p className="text-lg leading-relaxed mb-6">
                            If you’re interested in joining Dragon News, please send your resume and
                            cover letter to <a href="mailto:careers@dragonnews.com" className="text-red-500">careers@dragonnews.com</a>.
                            Be sure to include the position you are applying for in the subject line. We
                            look forward to hearing from you!
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

export default Career;