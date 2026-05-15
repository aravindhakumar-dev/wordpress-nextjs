import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-spacing"
    >
      <div className="container-width">
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 md:p-16">
          <SectionTitle
            label="Contact"
            title="Let’s build something great together."
            description="Open to freelance projects, agency collaborations, and remote full-stack developer opportunities."
          />

          <div className="flex flex-wrap gap-4">
            <Button href="mailto:aravindhakumar.dev@gmail.com">
              Email Me
            </Button>

            <Button
              href="https://github.com/aravindhakumar-dev"
              variant="secondary"
            >
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}