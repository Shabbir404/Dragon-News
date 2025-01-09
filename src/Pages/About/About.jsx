

const AboutPage = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center">
            {/* Header */}
            <header className="w-full bg-gradient-to-r from-red-500 to-yellow-500 py-6">
                <h1 className="text-4xl font-bold text-white text-center">
                    About Dragon News
                </h1>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl w-full p-6">
                <section className="text-gray-700">
                    <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        At Dragon News, we strive to deliver reliable and real-time news from
                        around the world. Our mission is to keep you informed on all major
                        events, trends, and developments, empowering you to make well-informed
                        decisions. We believe in providing news with a high level of integrity,
                        accuracy, and objectivity. Whether it's breaking news or in-depth
                        investigative reports, our team of skilled journalists and analysts work
                        relentlessly to keep you up-to-date with what's happening across the globe.
                    </p>
                </section>

                <section className="text-gray-700">
                    <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        Dragon News envisions a world where people have easy access to
                        trustworthy and comprehensive news coverage. Our goal is to create a
                        platform where readers can feel confident that the news they read is
                        accurate, fair, and without bias. We are committed to transparency and
                        uphold the highest ethical standards in journalism.
                    </p>
                </section>

                <section className="text-gray-700">
                    <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
                    <ul className="list-disc pl-5 text-lg leading-relaxed mb-6 space-y-2">
                        <li>Breaking News Updates on Local and Global Events</li>
                        <li>Expert Analysis on Politics, Technology, Business, and More</li>
                        <li>In-Depth Investigative Reports</li>
                        <li>Exclusive Interviews with Influencers and Thought Leaders</li>
                        <li>Multimedia Coverage with Images, Videos, and Interactive Graphics</li>
                    </ul>
                </section>

                <section className="text-gray-700">
                    <h2 className="text-2xl font-semibold mb-4">Join Us on Our Journey</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        We invite you to join the Dragon News community as we continue to grow
                        and expand our coverage. Stay informed, stay engaged, and make your voice
                        heard. You can follow us on social media, subscribe to our newsletter, or
                        simply keep reading for the latest updates.
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
    );
};

export default AboutPage;
