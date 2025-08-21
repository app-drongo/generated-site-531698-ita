import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Testimonials from '@/components/Testimonials';
import Testimonials from '@/components/Testimonials';

export default function HomepagePage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="features" className="scroll-mt-16">
        <Features />
      </section>
      <section id="benefits" className="scroll-mt-16">
        <Benefits />
      </section>
      <section id="pricing" className="scroll-mt-16">
        <Benefits />
      </section>
      <section id="testimonials" className="scroll-mt-16">
        <Testimonials />
      </section>
      <section id="signup" className="scroll-mt-16">
        <Testimonials />
      </section>
      <section id="contact" className="scroll-mt-16">
        <Testimonials />
      </section>
    </main>
  );
}