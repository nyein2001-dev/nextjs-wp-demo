"use client"

import { generatePDF } from '../../components/generatePDF'
import Link from 'next/link'

export default function OutputPage() {

    return (
        <div className="w-full min-h-screen py-20 lg:py-16 relative bg-[#f7f7f7] shadow">
            <div
                id="pdf-content"
                className="min-h-screen py-8 px-4 sm:px-6 lg:px-8"
            >
                <div className="max-w-5xl  px-2 md:px-4 mx-auto overflow-hidden">
                    <div className="flex justify-between items-center">
                         <img
                            src="/logo-prubsn.png"
                            alt="Logo"
                            className="h-12"
                        />
                        <div className="text-right w-[160px]">
                            <h1 className="text-xl font-bold text-gray-800">PruBSN Takaful Coverage Assessment Report</h1>
                            <div className="text-sm text-gray-600">Date: {new Date().toLocaleDateString()}</div>
                            <div className="text-sm text-gray-600">Reference: TKF-00000000000</div>
                        </div>
                    </div>
                    <hr className='p-0 m-0 mt-4' style={{ border: '1px solid black' }} />
                    <div className="bg-gray-50 rounded-lg px-6 pb-6 mb-40 print:bg-white print:p-0">
                        <div className="text-lg font-semibold text-gray-700 mb-3">Input Summary</div>

                    </div>

                    <div className="bg-gray-100 shadow-sm p-4 rounded-lg border-gray-200  mb-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Takaful Coverage Recommendations</h2>
                        <div className=" p-4 space-y-4">

                        </div>
                    </div>
                    <div className="w-full max-w-xl mx-auto px-4 flex flex-col gap-4">
                        <h2 className="text-lg font-semibold text-black">Notes</h2>
                        <ol className="w-full flex flex-col gap-4">
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-sm mt-3"></div>
                                <div className="text-medium text-gray-700 leading-normal">
                                    Based on your input, this calculator estimates your budget and recommended additional Term, Critical Illness and Medical Takaful coverage.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-sm mt-3"></div>
                                <div className="text-medium text-gray-700 leading-normal">
                                    The estimated additional Critical Illness Takaful coverage is intended as income replacement.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-sm mt-3"></div>
                                <div className="text-medium text-gray-700 leading-normal">
                                    If you lack sufficient Critical Illness coverage for treatment costs, you may consider getting Medical Takaful.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-sm mt-3"></div>
                                <div className="text-medium text-gray-700 leading-normal">
                                    It is advisable for you to participate in Takaful protection that fits within your budget.
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-4xl mx-auto px-4 py-12 bg-white rounded-lg shadow flex flex-col items-center gap-7">
                <div className="w-full flex justify-center">
                    <Link
                        href="#"
                        onClick={(e) => { e.preventDefault(); generatePDF(); }}
                        className="px-8 py-3 bg-[#ed1b2e] text-white text-lg font-semibold rounded-full hover:bg-red-600 transition-all">
                        Download Report
                    </Link>
                </div>
                <div className="w-full flex flex-col items-center gap-3 text-center">
                    <p className="text-sm text-gray-600 leading-normal">
                        Now that you know your budget and how much Takaful coverage you need, you may want to{' '}
                        <a href="#" className="text-[#ed1b2e] font-semibold hover:underline">
                            Find an Agent
                        </a>{' '}
                        or{' '}
                        <a href="#" className="text-[#ed1b2e] font-semibold hover:underline">
                            Get FREE Takaful
                        </a>{' '}
                        Consultation below for further advice.
                    </p>
                    <p className="text-sm text-gray-600 leading-normal">
                        Alternatively, you can also check out our plans that you can{' '}
                        <a href="#" className="text-[#ed1b2e] font-semibold hover:underline">
                            get it direct
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}
