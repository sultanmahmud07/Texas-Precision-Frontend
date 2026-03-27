import React from 'react';
import { Check } from 'lucide-react';

export default function TexasPrecisionPledge() {
  return (
    <section className="pt-6 font-san">
      <div className="main-container">
        
        {/* Guarantee Box */}
        <div className="
          bg-[linear-gradient(135deg,#fef2f4_0%,#fce7e9_100%)]
          border-[3px] border-[#c41e3a]
          rounded-[20px]
          px-6 py-10 md:px-10 md:py-[60px]
          text-center
          mb-[50px]
          shadow-[0_10px_40px_rgba(196,30,58,0.15)]
        ">
          
          {/* Guarantee Badge */}
          <div className="
            w-20 h-20 md:w-[110px] md:h-[110px]
            bg-[linear-gradient(135deg,#0f2744_0%,#1a365d_100%)]
            rounded-full
            flex items-center justify-center
            mx-auto mb-5 md:mb-[30px]
            text-[#c41e3a]
            shadow-[0_10px_35px_rgba(15,39,68,0.4)]
          ">
            {/* Using lucide-react Check to perfectly mimic the red checkmark */}
            <Check className="w-10 h-10 md:w-12 md:h-12" strokeWidth={3} />
          </div>

          {/* Headline */}
          <h2 className="text-[#0f2744] text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 md:mb-5 tracking-tight">
            The Texas Precision Pledge
          </h2>

          {/* Pledge Text */}
          <p className="text-[#0f2744]/80 text-sm md:text-lg leading-[2.75] max-w-4xl mx-auto font-medium">
            <strong className="text-[#0f2744] font-bold">
              No games. No gimmicks. Just great work at honest prices.
            </strong>{' '}
            Get a free roof inspection with honest assessment and detailed estimate—zero obligation. 
            I don&apos;t play pricing games, I don&apos;t use random subs, and I don&apos;t add commissions to your quote. 
            If your roof doesn&apos;t need replacing, I&apos;ll tell you. That&apos;s my pledge.
          </p>

        </div>
      </div>
    </section>
  );
}