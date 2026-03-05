import React from 'react'

const page = () => {
    return (
        <section className="bg-[#0A0A0B] text-white py-32 px-[2vw]">
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-4 sticky top-32 h-fit">
                    <p className="text-indigo-500 font-semibold uppercase text-[10px] tracking-widest mb-4">03 — Workflow</p>
                    <h2 className="text-[5vw] font-semibold uppercase leading-none">How we <br /> protect you.</h2>
                </div>

                <div className="col-span-12 md:col-span-8 space-y-32">
                    <div className="process-step border-l border-white/20 pl-10">
                        <span className="text-indigo-500 font-mono text-sm">Step 01</span>
                        <h3 className="text-[3vw] font-semibold uppercase my-4">Diagnostic Phase</h3>
                        <p className="text-white/60 text-lg max-w-xl font-medium">
                            We begin with a 'Deep Scan' of your current financial records. We look for hidden liabilities and efficiency gaps that traditional accounting might miss. Our goal is to see the 'Why' behind your numbers.
                        </p>
                    </div>

                    <div className="process-step border-l border-white/20 pl-10">
                        <span className="text-indigo-500 font-mono text-sm">Step 02</span>
                        <h3 className="text-[3vw] font-semibold uppercase my-4">Architecture Design</h3>
                        <p className="text-white/60 text-lg max-w-xl font-medium">
                            We don't use templates. We build a custom compliance calendar and tax strategy mapped specifically to your industry—whether it's Tech-SaaS, Manufacturing, or Real Estate.
                        </p>
                    </div>

                    <div className="process-step border-l border-white/20 pl-10">
                        <span className="text-indigo-500 font-mono text-sm">Step 03</span>
                        <h3 className="text-[3vw] font-semibold uppercase my-4">Deployment & Oversight</h3>
                        <p className="text-white/60 text-lg max-w-xl font-medium">
                            Once the framework is live, we provide ongoing oversight. You get monthly clarity reports that translate complex accounting data into simple, actionable business intelligence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
