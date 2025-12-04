export default function Footer() {
    return (
        <footer className="bg-black py-16 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-bold mb-6">NITS.</h2>
                        <p className="text-white/60 max-w-md mb-8">
                            Designing a better world today. We create digital experiences that
                            matter, blending aesthetics with functionality.
                        </p>
                        <form className="flex gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors w-full max-w-xs"
                            />
                            <button className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center hover:scale-110 transition-transform">
                                <svg
                                    className="w-5 h-5 text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white/40">Sitemap</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-white hover:text-orange-500 transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-white hover:text-orange-500 transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="text-white hover:text-orange-500 transition-colors">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-white hover:text-orange-500 transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white/40">Socials</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-white hover:text-orange-500 transition-colors">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-orange-500 transition-colors">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-orange-500 transition-colors">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-orange-500 transition-colors">
                                    Behance
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm">
                    <p>© 2024 NITS. All Rights Reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
