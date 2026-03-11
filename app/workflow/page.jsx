"use client"

import React from "react"
import { ArrowRight, FileText, Calculator, Building2, CheckCircle } from "lucide-react"
import { ReactLenis } from '@studio-freight/react-lenis'

const steps = [
    {
        id: "01",
        title: "Initial Consultation",
        description:
            "Every engagement begins with a discussion. We understand your business, your current financial structure, and the challenges you are facing with taxation, compliance, or funding.",
        icon: <Building2 size={22} />,
    },
    {
        id: "02",
        title: "Document Review",
        description:
            "Once we understand your requirements, we review financial documents such as GST records, income statements, company registration details, and previous filings.",
        icon: <FileText size={22} />,
    },
    {
        id: "03",
        title: "Financial Analysis",
        description:
            "Our team analyses your financial data to identify tax liabilities, compliance gaps, and opportunities for better financial planning.",
        icon: <Calculator size={22} />,
    },
    {
        id: "04",
        title: "Execution & Filing",
        description:
            "After analysis, we prepare and file necessary documents such as GST returns, income tax returns, ROC filings, or project reports required for funding.",
        icon: <CheckCircle size={22} />,
    },
    {
        id: "05",
        title: "Ongoing Compliance",
        description:
            "We continue to support your business with regular compliance updates, audit preparation, and advisory services to ensure everything stays up to date.",
        icon: <CheckCircle size={22} />,
    },
]

const WorkflowPage = () => {
    return (
        <ReactLenis root>
            <div className="w-full bg-white text-black px-6 md:px-[4vw] py-24">

                {/* HERO SECTION */}
                <div className="grid md:grid-cols-12 gap-10 mb-24">

                    <div className="md:col-span-7">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-indigo-600 font-bold mb-6">
                            How We Work
                        </p>

                        <h1 className="text-[12vw] md:text-[6vw] leading-[0.9] font-bold tracking-tight">
                            Our <br />
                            <span className="text-black/30 font-light italic">Workflow</span>
                        </h1>
                    </div>

                    <div className="md:col-span-5 flex items-end">
                        <p className="text-sm md:text-base text-black/60 leading-relaxed">
                            We follow a structured process to help businesses handle taxation,
                            audits, compliance, and financial planning smoothly. Our workflow
                            ensures transparency, accuracy, and timely execution.
                        </p>
                    </div>

                </div>


                {/* WORKFLOW TIMELINE */}
                <div className="space-y-16 max-w-[900px]">

                    {steps.map((step, index) => (
                        <div key={step.id} className="flex gap-8 group">

                            {/* STEP NUMBER */}
                            <div className="flex flex-col items-center">

                                <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center">
                                    {step.icon}
                                </div>

                                {index !== steps.length - 1 && (
                                    <div className="w-[1px] bg-black/10 flex-1 mt-4"></div>
                                )}
                            </div>


                            {/* CONTENT */}
                            <div className="pb-12">

                                <p className="text-[10px] uppercase tracking-widest text-indigo-600 mb-2">
                                    Step {step.id}
                                </p>

                                <h3 className="text-2xl font-bold mb-4">
                                    {step.title}
                                </h3>

                                <p className="text-black/60 leading-relaxed max-w-[600px]">
                                    {step.description}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>


                {/* SERVICES EXPLAINED */}
                <div className="mt-32">

                    <h2 className="text-[10vw] md:text-[4vw] font-bold mb-10">
                        Services We Provide
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">

                        <div className="p-8 border border-black/10">
                            <h3 className="text-xl font-bold mb-3">GST & Income Tax Services</h3>
                            <p className="text-black/60">
                                We help businesses file GST returns, manage income tax
                                compliance, and plan taxes efficiently.
                            </p>
                        </div>

                        <div className="p-8 border border-black/10">
                            <h3 className="text-xl font-bold mb-3">Audit & Financial Review</h3>
                            <p className="text-black/60">
                                Our audit services ensure that financial records are accurate and
                                compliant with statutory requirements.
                            </p>
                        </div>

                        <div className="p-8 border border-black/10">
                            <h3 className="text-xl font-bold mb-3">Project Reports & Financing</h3>
                            <p className="text-black/60">
                                We prepare detailed project reports and financial analysis
                                required for bank loans and investment proposals.
                            </p>
                        </div>

                        <div className="p-8 border border-black/10">
                            <h3 className="text-xl font-bold mb-3">Company Registration & Compliance</h3>
                            <p className="text-black/60">
                                We assist with company registration, ROC filings, and regulatory
                                compliance for businesses.
                            </p>
                        </div>

                    </div>

                </div>


                {/* CTA */}
                <div className="mt-32 text-center">

                    <h3 className="text-3xl font-bold mb-6">
                        Start Your Financial Journey With Us
                    </h3>

                    <p className="text-black/60 max-w-[600px] mx-auto mb-8">
                        Whether you need help with taxation, audit, or business compliance,
                        our team is ready to support your growth.
                    </p>

                    <button className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm uppercase tracking-widest">
                        Contact Us
                        <ArrowRight size={18} />
                    </button>

                </div>

            </div>
        </ReactLenis>
    )
}

export default WorkflowPage