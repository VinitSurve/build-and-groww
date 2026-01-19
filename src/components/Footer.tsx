import Link from 'next/link';
import CDNVideo from './CDNVideo';

export default function Footer() {
    return (
        <footer className="border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
                    {/* GDG Cloud Mumbai Section */}
                    <div>
                        <div className="mb-8">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
                                <CDNVideo src="https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/GDG%20Logoo.mp4" autoPlay loop muted className="inline-block mb-1 w-12 h-12" /> GDG Cloud मुंबई
                            </h2>
                            <p className="text-sm text-gray-400">
                                Building the future of AI with the Google Developer Community
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href='https://gdg.community.dev/gdg-cloud-mumbai/'
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/company/gdg-cloud-mumbai/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/gdgcloudmumbai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                                    >
                                        Instagram
                                    </a>
                                </li>
                            </ul>

                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="https://x.com/GDGCloudMumbai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                                    >
                                        Twitter/X
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.youtube.com/@GDGCloudMumbai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                                    >
                                        YouTube
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.facebook.com/gdgcloudmumbai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                                    >
                                        Facebook
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* GDG Cloud Pune Section */}
                    <div>
                        <div className="mb-8">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
                                 <CDNVideo src="https://cdn.jsdelivr.net/gh/randomaiphoto/build-and-grow-media@main/GDG%20Logoo.mp4" autoPlay loop muted className="inline-block mb-1 w-12 h-12" /> GDG Cloud पुणे
                            </h2>
                            <p className="text-sm text-gray-400">
                                Fostering innovation and learning in the developer community
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href='https://gdg.community.dev/gdg-cloud-pune/'
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/company/gdg-cloud-pune/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/gdgcloudpune"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                                    >
                                        Instagram
                                    </a>
                                </li>
                            </ul>

                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="https://x.com/GDGCloudPune"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                                    >
                                        Twitter/X
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.youtube.com/@GDGCloudPune"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                                    >
                                        YouTube
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://t.me/gdgcp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                                    >
                                        Telegram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="px-4 sm:px-6 lg:px-8 py-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                    <span className="text-xs sm:text-sm text-gray-400">
                        © 2025 GDG Cloud मुंबई X पुणे. All Rights Reserved.
                    </span>
                    <Link
                        href="#home" 
                        className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors right-4 bottom-4 sm:right-4 sm:bottom-4 md:right-6 md:bottom-6 z-50 lg:static lg:translate-none bg-transparent lg:bg-transparent"
                    >
                        Back to top
                    </Link>
                </div>
            </div>
        </footer>
    );
}
