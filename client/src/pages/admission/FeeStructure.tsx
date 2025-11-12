// src/components/FeeStructure.tsx
import { useState, useEffect } from 'react';

const pdfPath = "/pdfs/SITM-2025-26.pdf";

const FeeStructure = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadProgress, setDownloadProgress] = useState(0);

    // Simulate download progress
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isDownloading) {
            interval = setInterval(() => {
                setDownloadProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setIsDownloading(false);
                        return 100;
                    }
                    return prev + 10;
                });
            }, 200);
        }

        return () => clearInterval(interval);
    }, [isDownloading]);

    const handleDownload = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDownloading(true);
        setDownloadProgress(0);

        // Simulate download completion
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = pdfPath;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.click();
        }, 2200);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl max-w-6xl w-full">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-2">
                            <span className="block">SAROJ INSTITUTE OF TECHNOLOGY & MANAGEMENT</span>
                            <span className="block">(SITM), LUCKNOW</span>
                            <span className="block text-blue-600 text-2xl mt-4">Fee Structure for Session 2025-2026</span>
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Ahimamau P.O. Arjunganj Sultanpur Road Lucknow | Phone: (0522) 2812731, 3092050, 2812760
                        </p>
                    </div>

                     
                        {/* Left Column - Quick Overview */}
                        <div className=" space-y-6">
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Overview</h3>
                            </div>
                            
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-r border-gray-300">COURSE</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-r border-gray-300">TOTAL FEES</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">TUITION FEES</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr className="hover:bg-gray-50"><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">B.Pharma</td><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">₹1,08,000</td><td className="px-4 py-3 text-sm text-gray-900">₹80,000</td></tr>
                                        <tr className="hover:bg-gray-50"><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">B.Pharma Lateral</td><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">₹60,000</td><td className="px-4 py-3 text-sm text-gray-900">₹60,000</td></tr>
                                        <tr className="hover:bg-gray-50"><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">D.Pharma</td><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">₹60,000</td><td className="px-4 py-3 text-sm text-gray-900">₹60,000</td></tr>
                                        <tr className="hover:bg-gray-50"><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">Diploma</td><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">₹40,000</td><td className="px-4 py-3 text-sm text-gray-900">₹40,000</td></tr>
                                        <tr className="hover:bg-gray-50"><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">BBA</td><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">₹60,000</td><td className="px-4 py-3 text-sm text-gray-900">₹45,000</td></tr>
                                        <tr className="hover:bg-gray-50"><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">BCA</td><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">₹60,000</td><td className="px-4 py-3 text-sm text-gray-900">₹45,000</td></tr>
                                        <tr className="hover:bg-gray-50"><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">B.Tech</td><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">₹65,000</td><td className="px-4 py-3 text-sm text-gray-900">₹60,000</td></tr>
                                        <tr className="hover:bg-gray-50"><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">B.Tech Lateral</td><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">₹85,000</td><td className="px-4 py-3 text-sm text-gray-900">₹60,000</td></tr>
                                        <tr className="hover:bg-gray-50"><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">M.Tech</td><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">₹60,000</td><td className="px-4 py-3 text-sm text-gray-900">₹40,000</td></tr>
                                        <tr className="hover:bg-gray-50"><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">MBA</td><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">₹60,000</td><td className="px-4 py-3 text-sm text-gray-900">₹40,000</td></tr>
                                        <tr className="hover:bg-gray-50"><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">MCA</td><td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">₹60,000</td><td className="px-4 py-3 text-sm text-gray-900">₹40,000</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                <h4 className="font-semibold text-blue-800 mb-2">Important Notes:</h4>
                                <ul className="text-sm text-blue-700 space-y-1">
                                    <li>• Fees once deposited are non-refundable.</li>
                                    <li>• Examination, form, and enrollment fees are to be paid directly to the university.</li>
                                    <li>• Does and transportation charges are separate (if availed).</li>
                                    <li>• Hostel fee is ₹60,000/year, inclusive of mess facility.</li>
                                    <li>• 10% of the total fee will be charged as a Development Fee.</li>
                                </ul>
                            </div>

                            <div className="text-center pt-4">
                                <button
                                    onClick={handleDownload}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    disabled={isDownloading}
                                    className={`inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform ${isHovered ? 'scale-105' : 'scale-100'
                                        } ${isDownloading ? 'opacity-75 cursor-not-allowed' : ''}`}
                                >
                                    {isDownloading ? (
                                        <span className="flex items-center">
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Downloading...
                                        </span>
                                    ) : (
                                        <>
                                            <svg
                                                className="-ml-1 mr-3 h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                            </svg>
                                            Download PDF
                                        </>
                                    )}
                                </button>

                                {isDownloading && (
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
                                            style={{ width: `${downloadProgress}%` }}
                                        ></div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column - PDF Viewer */}
                        {/* <div className="lg:w-3/5">
                            <div className="h-[600px] bg-gray-100 rounded-lg overflow-hidden shadow-inner border border-gray-300">
                                <iframe
                                    src={`${pdfPath}#toolbar=0&navpanes=0`}
                                    width="100%"
                                    height="100%"
                                    className="border-0"
                                    title="Fee Structure PDF Viewer"
                                >
                                    <p className="p-4 text-gray-600">
                                        Your browser does not support PDFs.
                                        <a href={pdfPath} className="text-blue-600 hover:underline ml-1">
                                            Download the PDF instead.
                                        </a>
                                    </p>
                                </iframe>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
         
    );
};

export default FeeStructure;