
const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Footer top */}
                    <div className="flex flex-wrap justify-between mb-8">
                        <div className="w-full md:w-1/4 mb-4 md:mb-0">
                            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                            <p className="text-sm">
                                We are a leading news source bringing you the latest and most
                                accurate information from around the world. Stay informed with us!
                            </p>
                        </div>
                        <div className="w-full md:w-1/4 mb-4 md:mb-0">
                            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
                            <ul>
                                <li className="mb-2">
                                    <a href="/breaking-news" className="text-sm hover:underline">
                                        Breaking News
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/national-news" className="text-sm hover:underline">
                                        National News
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/international-news" className="text-sm hover:underline">
                                        International News
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="/sports" className="text-sm hover:underline">
                                        Sports
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/4 mb-4 md:mb-0">
                            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
                            <ul className="flex space-x-4">
                                <li>
                                    <a href="https://facebook.com" className="text-sm hover:underline">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" className="text-sm hover:underline">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" className="text-sm hover:underline">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com" className="text-sm hover:underline">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/4">
                            <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
                            <p className="text-sm mb-4">
                                Sign up for our newsletter to receive the latest news directly to your inbox.
                            </p>
                            <form>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 mb-2 text-sm text-gray-800 rounded-lg"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Footer bottom */}
                    <div className="border-t border-gray-700 pt-4 text-center text-sm">
                        <p>&copy; 2025 News Blog. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;