import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Languages,
  Layers3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  type LucideIcon
} from "lucide-react";

import { BlurText } from "@/components/animations/blur-text";
import { CountUp } from "@/components/animations/count-up";
import { Magnet } from "@/components/animations/magnet";
import { SpotlightCard } from "@/components/animations/spotlight-card";
import { TiltedCard } from "@/components/animations/tilted-card";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  navItems,
  portfolio,
  type EducationEntry,
  type ProjectEntry
} from "@/lib/portfolio";

const focusIcons = [Code2, ShieldCheck, Sparkles] as const;
const skillIcons = [Layers3, GraduationCap, Languages] as const;

export function PortfolioPage() {
  return (
    <main className="pb-20">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black_42%,transparent_92%)]"
      />

      <header className="sticky top-4 z-50">
        <div className="mx-auto flex w-[min(1100px,calc(100%-1.5rem))] items-center justify-between gap-4 rounded-full border border-white/70 bg-white/80 px-5 py-3 shadow-[0_22px_60px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl">
          <Link
            href="#home"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-950"
          >
            AS
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button asChild className="rounded-full">
            <Link href={`mailto:${portfolio.email}`}>Let&apos;s talk</Link>
          </Button>
        </div>
      </header>

      <div className="mx-auto flex w-[min(1100px,calc(100%-1.5rem))] flex-col gap-24 pb-20 pt-10 md:pt-16">
        <section
          id="home"
          className="grid scroll-mt-24 gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
        >
          <div className="space-y-8">
            <Badge
              variant="outline"
              className="border-white/80 bg-white/70 px-4 py-1.5 text-slate-700"
            >
              {portfolio.role}
            </Badge>

            <div className="space-y-5">
              <BlurText
                as="h1"
                text={portfolio.name}
                className="text-[clamp(3rem,11vw,5rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-slate-950 sm:text-[4.4rem] lg:text-[4.85rem] lg:whitespace-nowrap xl:text-[5.35rem]"
              />

              <p className="max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
                Building thoughtful web interfaces while growing deeper in{" "}
                <span className="font-semibold text-slate-950">
                  machine learning and cloud security
                </span>
                . I like work that mixes clean UI, practical engineering, and
                steady learning.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2">
                <MapPin className="size-4 text-primary" />
                {portfolio.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2">
                <GraduationCap className="size-4 text-primary" />
                Haldia Institute of Technology
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2">
                <BriefcaseBusiness className="size-4 text-primary" />
                Open to internships
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <Magnet padding={90} magnetStrength={3}>
                <Button asChild size="lg" className="rounded-full">
                  <Link href="#projects">View projects</Link>
                </Button>
              </Magnet>

              <Magnet padding={90} magnetStrength={3}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-slate-200 bg-white/[0.85]"
                >
                  <Link href={`mailto:${portfolio.email}`}>Email me</Link>
                </Button>
              </Magnet>
            </div>

            <div className="flex flex-wrap gap-2">
              {portfolio.skills.slice(0, 8).map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="border-slate-200 bg-white/70 px-3 py-1 text-slate-700"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {portfolio.metrics.map((metric) => (
                <StatCard
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                  suffix={metric.suffix}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(110,231,214,0.28),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(244,162,97,0.24),transparent_48%)] blur-3xl" />

            <TiltedCard
              imageSrc="/anushka-portrait.jpeg"
              altText="Portrait of Anushka Sahani"
              captionText="Anushka Sahani"
              imageClassName="object-[center_18%]"
              priority
              overlay={
                <div className="flex h-full flex-col justify-between p-5">
                  <Badge className="w-fit border-white/60 bg-white/88 text-slate-900 shadow-sm">
                    Portfolio Portrait
                  </Badge>
                  <div className="w-fit rounded-3xl border border-white/45 bg-slate-950/35 px-4 py-3 text-white backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.26em] text-white/75">
                      Available for
                    </p>
                    <p className="mt-1 text-base font-semibold">
                      Internships & collaborations
                    </p>
                  </div>
                </div>
              }
            />

            <Card className="mt-5 border-white/80 bg-white/90 lg:absolute lg:-bottom-8 lg:left-6 lg:mt-0 lg:max-w-sm">
              <CardHeader className="space-y-3">
                <Badge variant="secondary" className="w-fit">
                  Current experience
                </Badge>
                <CardTitle className="text-2xl text-slate-950">
                  {portfolio.experience.role}
                </CardTitle>
                <CardDescription>
                  {portfolio.experience.company} | {portfolio.experience.timeframe}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-7 text-muted-foreground">
                <p>
                  Blending data-driven anomaly detection with practical cloud
                  security learning.
                </p>
                <p>
                  Focused on Python, machine learning concepts, and how
                  security automation can become more intelligent.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="bg-slate-200/70" />

        <section id="about" className="scroll-mt-24 space-y-8">
          <SectionHeading
            eyebrow="About"
            title="A portfolio built around curiosity, consistency, and product-minded growth."
            description={portfolio.availability}
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {portfolio.strengths.map((strength, index) => {
              const Icon = focusIcons[index];

              return (
                <SpotlightCard
                  key={strength.title}
                  spotlightColor={strength.spotlightColor}
                  className="h-full"
                >
                  <div className="flex h-full flex-col gap-5">
                    <Badge variant="secondary" className="w-fit">
                      {strength.kicker}
                    </Badge>
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                        {strength.title}
                      </h3>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {strength.description}
                      </p>
                    </div>
                    <p className="mt-auto text-sm font-medium leading-7 text-slate-700">
                      {strength.highlight}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        <Separator className="bg-slate-200/70" />

        <section id="experience" className="scroll-mt-24 space-y-8">
          <SectionHeading
            eyebrow="Experience"
            title="Recent experience and the academic path behind it."
            description="My resume is still early-career, but it already shows a clear direction: frontend execution, stronger engineering fundamentals, and a growing focus on ML-enabled security work."
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <Card className="h-full border-white/80 bg-white/[0.85]">
              <CardHeader className="space-y-3">
                <Badge variant="secondary" className="w-fit">
                  Internship
                </Badge>
                <CardTitle className="text-2xl text-slate-950">
                  {portfolio.experience.role}
                </CardTitle>
                <CardDescription>
                  {portfolio.experience.company} | {portfolio.experience.timeframe}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-sm leading-7 text-muted-foreground">
                  {portfolio.experience.summary}
                </p>
                <div className="space-y-3">
                  {portfolio.experience.bullets.map((bullet) => (
                    <div key={bullet} className="flex gap-3">
                      <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Sparkles className="size-3.5" />
                      </div>
                      <p className="text-sm leading-7 text-slate-700">{bullet}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {portfolio.education.map((entry) => (
                <EducationCard key={entry.institution} entry={entry} />
              ))}
            </div>
          </div>
        </section>

        <Separator className="bg-slate-200/70" />

        <section id="projects" className="scroll-mt-24 space-y-8">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work built from hands-on practice."
            description="These projects show the themes I am leaning into right now: responsive UI, practical frontend structure, and purposeful user flows."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {portfolio.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <Separator className="bg-slate-200/70" />

        <section id="skills" className="scroll-mt-24 space-y-8">
          <SectionHeading
            eyebrow="Skills"
            title="The toolkit I use now, plus the areas I am actively stretching into."
            description="I like pairing strong fundamentals with practical frontend output. That mix is what gives me momentum right now."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {portfolio.skillGroups.map((group, index) => {
              const Icon = skillIcons[index];

              return (
                <Card
                  key={group.title}
                  className="border-white/80 bg-white/[0.85]"
                >
                  <CardHeader className="space-y-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-2xl text-slate-950">
                      {group.title}
                    </CardTitle>
                    <CardDescription>{group.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="border-slate-200 bg-white px-3 py-1 text-slate-700"
                      >
                        {item}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <SpotlightCard
            spotlightColor="rgba(255, 255, 255, 0.14)"
            className="overflow-hidden rounded-[2rem] border-slate-800/10 bg-[linear-gradient(135deg,rgba(20,33,61,0.96),rgba(40,63,96,0.96))] text-white"
          >
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div className="space-y-6">
                <Badge className="w-fit bg-white/[0.12] text-white">
                  Contact
                </Badge>
                <div className="space-y-4">
                  <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">
                    Interested in collaborating on frontend, ML, or security-aware projects?
                  </h2>
                  <p className="max-w-xl text-base leading-8 text-slate-200">
                    I am based in {portfolio.location}, fluent in{" "}
                    {portfolio.languages.join(" and ")}, and looking for work that
                    helps me keep building across product interfaces and
                    emerging security-focused systems.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Magnet padding={90} magnetStrength={3}>
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-white text-slate-950 hover:bg-slate-100"
                    >
                      <Link href={`mailto:${portfolio.email}`}>Write an email</Link>
                    </Button>
                  </Magnet>

                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="rounded-full border border-white/15 bg-white/10 text-white hover:bg-white/15"
                  >
                    <Link href={portfolio.phoneHref}>Call {portfolio.phone}</Link>
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <ContactTile
                  icon={Mail}
                  label="Primary email"
                  value={portfolio.email}
                  href={`mailto:${portfolio.email}`}
                />
                <ContactTile
                  icon={Phone}
                  label="Phone"
                  value={portfolio.phone}
                  href={portfolio.phoneHref}
                />
                <ContactTile
                  icon={MapPin}
                  label="Location"
                  value={portfolio.location}
                />
              </div>
            </div>
          </SpotlightCard>
        </section>

        <footer className="flex flex-col gap-3 border-t border-slate-200/70 pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            Designed with Next.js, shadcn/ui patterns, and React Bits-inspired
            motion components.
          </p>
          <p>Secondary email: {portfolio.secondaryEmail}</p>
        </footer>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  suffix
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  return (
    <Card className="gap-0 border-white/80 bg-white/[0.78] py-0">
      <CardContent className="p-5">
        <div className="flex items-end gap-1 text-3xl font-semibold tracking-tight text-slate-950">
          <CountUp to={value} duration={1.8} />
          {suffix ? <span className="text-lg text-slate-500">{suffix}</span> : null}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}

function EducationCard({ entry }: { entry: EducationEntry }) {
  return (
    <Card className="border-white/80 bg-white/[0.82]">
      <CardHeader className="space-y-2">
        <CardDescription>{entry.timeframe}</CardDescription>
        <CardTitle className="text-xl text-slate-950">{entry.institution}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <p className="font-medium text-slate-800">{entry.credential}</p>
        <p className="text-muted-foreground">{entry.score}</p>
        <p className="text-muted-foreground">{entry.location}</p>
      </CardContent>
    </Card>
  );
}

function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <SpotlightCard
      spotlightColor="rgba(41, 98, 255, 0.16)"
      className="h-full bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(245,248,255,0.94))]"
    >
      <div className="flex h-full flex-col gap-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-primary/80">{project.timeframe}</p>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
              {project.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="border-slate-200 bg-white">
              Team size {project.teamSize}
            </Badge>
            <Badge variant="outline" className="border-slate-200 bg-white">
              Mentor: {project.mentor}
            </Badge>
          </div>
        </div>

        <p className="text-sm leading-7 text-muted-foreground">{project.summary}</p>

        <div className="space-y-3">
          {project.bullets.map((bullet) => (
            <div key={bullet} className="flex gap-3">
              <div className="mt-1.5 size-2 rounded-full bg-primary" />
              <p className="text-sm leading-7 text-slate-700">{bullet}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="bg-secondary/80 text-secondary-foreground"
            >
              {item}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          <Button asChild className="rounded-full">
            <Link href={project.href} target="_blank" rel="noreferrer">
              {project.ctaLabel}
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-slate-200 bg-white/80"
          >
            <Link href="#contact">Let&apos;s collaborate</Link>
          </Button>
        </div>
      </div>
    </SpotlightCard>
  );
}

function ContactTile({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="rounded-[1.35rem] border border-white/[0.12] bg-white/[0.08] p-4 backdrop-blur">
      <div className="mb-3 flex size-10 items-center justify-center rounded-2xl bg-white/[0.12] text-white">
        <Icon className="size-4" />
      </div>
      <p className="text-sm text-slate-300">{label}</p>
      <p className="mt-1 text-sm font-medium text-white">{value}</p>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="transition-transform hover:-translate-y-0.5">
      {content}
    </Link>
  );
}
