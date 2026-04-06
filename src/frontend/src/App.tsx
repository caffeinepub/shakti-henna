import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import {
  Award,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
  Globe,
  Leaf,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Package,
  Phone,
  Shield,
  Sprout,
  Star,
  TrendingUp,
  Truck,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { useActor } from "./hooks/useActor";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Quality", href: "#quality" },
    { label: "Export", href: "#export" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-forest-900/95 backdrop-blur-sm border-b border-forest-800">
      <div className="container-max px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2"
            data-ocid="nav.link"
          >
            <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
              <Leaf className="w-4 h-4 text-forest-900" />
            </div>
            <span className="font-display text-xl font-bold text-cream-50">
              Shakti Henna
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid="nav.link"
                className="text-cream-200 hover:text-gold-400 transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gold-500 hover:bg-gold-600 text-forest-900 font-semibold px-5"
              data-ocid="nav.primary_button"
            >
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden text-cream-50 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-forest-900 border-t border-forest-800 px-4 pb-4"
          >
            <nav className="flex flex-col gap-3 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-ocid="nav.link"
                  className="text-cream-100 hover:text-gold-400 transition-colors py-1 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="bg-gold-500 hover:bg-gold-600 text-forest-900 font-semibold mt-2"
                data-ocid="nav.primary_button"
                onClick={() => {
                  setMenuOpen(false);
                  window.location.hash = "contact";
                }}
              >
                Get a Quote
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/generated/henna-powder-hero.dim_1200x700.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-900/90 via-forest-900/75 to-forest-800/60" />

      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, oklch(0.97 0.008 80) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container-max px-4 md:px-8 lg:px-16 text-center pt-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-400 text-sm font-medium px-4 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              Rajasthan, India — Since 2008
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream-50 leading-tight mb-6"
          >
            Pure Natural Henna
            <span className="block text-gold-400">&amp; Multani Mitti</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-cream-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Straight from the farms of Rajasthan — ISO-certified bulk exporter
            supplying premium natural ingredients to cosmetic manufacturers in
            30+ countries.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gold-500 hover:bg-gold-600 text-forest-900 font-semibold text-base px-8"
              data-ocid="hero.primary_button"
            >
              <a href="#products">
                Explore Products
                <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cream-100/40 text-cream-50 hover:bg-cream-50/10 hover:text-cream-50 hover:border-cream-50/60 text-base px-8"
              data-ocid="hero.secondary_button"
            >
              <a href="#contact">Request Bulk Quote</a>
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "30+", label: "Countries" },
              { value: "500MT+", label: "Annual Capacity" },
              { value: "15+", label: "Years Export" },
              { value: "100%", label: "Natural & Pure" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-gold-400">
                  {stat.value}
                </div>
                <div className="text-cream-300 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-100/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gold-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-padding bg-cream-100">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src="/assets/generated/henna-farm.dim_1200x600.jpg"
                alt="Henna farms in Rajasthan, India"
                className="w-full h-80 lg:h-[460px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-cream-50">
                <p className="text-sm font-medium opacity-80">Our Farms</p>
                <p className="font-display text-xl font-semibold">
                  Rajasthan, India
                </p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-gold-500 text-forest-900 rounded-xl p-4 shadow-card">
              <div className="font-display text-2xl font-bold">15+</div>
              <div className="text-xs font-semibold mt-0.5">
                Years of Export
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.div variants={fadeUp}>
              <span className="text-gold-600 text-sm font-semibold tracking-widest uppercase">
                About Us
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-forest-900 mt-2 mb-6 leading-tight">
                Rooted in Rajasthan,
                <span className="text-forest-700 block">
                  Reaching the World
                </span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-foreground/70 text-lg leading-relaxed mb-6"
            >
              Established in 2008, Shakti Henna is a leading manufacturer and
              bulk exporter of premium natural henna powder and Multani Mitti
              (Fuller's Earth). We source directly from our own network of
              verified farms across the fertile henna-growing belt of Rajasthan.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-foreground/70 leading-relaxed mb-8"
            >
              Trusted by cosmetic brands, herbal product manufacturers, and
              distributors across Europe, the United States, Middle East, and
              Southeast Asia, we deliver consistent quality at scale — backed by
              international certifications and transparent supply chain
              documentation.
            </motion.p>

            <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Globe,
                  label: "30+ Countries",
                  sub: "Active export partnerships",
                },
                {
                  icon: Sprout,
                  label: "Farm-to-Ship",
                  sub: "Direct sourcing advantage",
                },
                {
                  icon: Award,
                  label: "ISO 9001:2015",
                  sub: "Quality management certified",
                },
                {
                  icon: Package,
                  label: "500MT+ Annual",
                  sub: "Production capacity",
                },
              ].map(({ icon: Icon, label, sub }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="flex items-start gap-3 bg-cream-50 rounded-xl p-4 shadow-xs border border-border"
                >
                  <div className="w-9 h-9 bg-forest-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-forest-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-forest-900 text-sm">
                      {label}
                    </div>
                    <div className="text-muted-foreground text-xs mt-0.5">
                      {sub}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  title,
  image,
  description,
  grades,
  packaging,
  ocid,
}: {
  title: string;
  image: string;
  description: string;
  grades: string[];
  packaging: string[];
  ocid: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-border"
      data-ocid={ocid}
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="bg-gold-500 text-forest-900 text-xs font-bold px-3 py-1 rounded-full">
            Premium Grade
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-forest-900 mb-3">
          {title}
        </h3>
        <p className="text-foreground/70 leading-relaxed mb-5">{description}</p>

        <div className="space-y-4 mb-6">
          <div>
            <div className="text-xs font-semibold text-forest-700 uppercase tracking-wide mb-2">
              Available Grades
            </div>
            <div className="flex flex-wrap gap-2">
              {grades.map((g) => (
                <span
                  key={g}
                  className="bg-forest-100 text-forest-800 text-xs px-3 py-1 rounded-full font-medium"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-forest-700 uppercase tracking-wide mb-2">
              Bulk Packaging
            </div>
            <div className="flex flex-wrap gap-2">
              {packaging.map((p) => (
                <span
                  key={p}
                  className="bg-cream-200 text-foreground/80 text-xs px-3 py-1 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Button
          asChild
          className="w-full bg-forest-800 hover:bg-forest-700 text-cream-50 font-semibold"
          data-ocid={`${ocid}.button`}
        >
          <a href="#contact">Request Quote</a>
        </Button>
      </div>
    </motion.div>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-cream-50">
      <div className="container-max">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="text-gold-600 text-sm font-semibold tracking-widest uppercase"
          >
            Our Products
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl lg:text-5xl font-bold text-forest-900 mt-2"
          >
            Natural Ingredients at Scale
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-foreground/60 text-lg mt-4 max-w-2xl mx-auto"
          >
            100% pure, lab-tested botanical ingredients for cosmetic, personal
            care, and wellness manufacturers worldwide.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <ProductCard
            title="Natural Henna Powder"
            image="/assets/generated/henna-powder-product.dim_800x600.jpg"
            description="100% pure Lawsonia inermis powder harvested from Rajasthan's finest henna farms. No additives, no fillers — just nature's purest staining botanical, processed under GMP conditions."
            grades={["Body Art Grade", "Hair Care Grade", "Export Grade"]}
            packaging={["25 KG", "50 KG", "100 KG", "1 MT+"]}
            ocid="products.henna.card"
          />
          <ProductCard
            title="Multani Mitti"
            image="/assets/generated/multani-mitti-product.dim_800x600.jpg"
            description="Premium Fuller's Earth clay sourced from mineral-rich deposits. Exceptional oil absorption and skin purification properties — ideal for face masks, scrubs, and cosmetic formulations."
            grades={[
              "Cosmetic Grade",
              "Industrial Grade",
              "Pharmaceutical Grade",
            ]}
            packaging={["25 KG", "50 KG", "1 MT+", "Custom"]}
            ocid="products.multani.card"
          />
        </motion.div>
      </div>
    </section>
  );
}

function QualitySection() {
  const certs = [
    { icon: Award, label: "ISO 9001:2015", sub: "Quality Management System" },
    { icon: Leaf, label: "USDA Organic", sub: "Certified organic processing" },
    { icon: Star, label: "Halal Certified", sub: "Global halal compliance" },
    { icon: FlaskConical, label: "Lab Tested", sub: "Third-party verified" },
    {
      icon: Shield,
      label: "No Added Chemicals",
      sub: "100% natural ingredient",
    },
    {
      icon: CheckCircle2,
      label: "GMP Compliant",
      sub: "Good manufacturing practice",
    },
  ];

  return (
    <section id="quality" className="section-padding bg-forest-900">
      <div className="container-max">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="text-gold-400 text-sm font-semibold tracking-widest uppercase"
          >
            Quality Assurance
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl lg:text-5xl font-bold text-cream-50 mt-2"
          >
            Certified. Tested. Trusted.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-cream-200/70 text-lg mt-4 max-w-2xl mx-auto"
          >
            Every batch undergoes rigorous quality control — from farm
            inspection through processing, packaging, and pre-shipment testing —
            ensuring consistent purity and potency.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-5"
        >
          {certs.map(({ icon: Icon, label, sub }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="bg-forest-800/60 border border-forest-700/50 rounded-2xl p-6 text-center hover:border-gold-500/40 hover:bg-forest-800 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gold-500/20 border border-gold-500/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-gold-400" />
              </div>
              <div className="font-display font-bold text-cream-50 text-lg mb-1">
                {label}
              </div>
              <div className="text-cream-300/60 text-sm">{sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ExportSection() {
  const stats = [
    { value: "30+", label: "Countries Exported", icon: Globe },
    { value: "500MT+", label: "Annual Capacity", icon: Package },
    { value: "15+", label: "Years Experience", icon: TrendingUp },
    { value: "100%", label: "Natural & Pure", icon: Leaf },
  ];

  const capabilities = [
    "MOQ from 100 KG — flexible for all order sizes",
    "Custom private label packaging available",
    "Flexible payment terms: LC (Letter of Credit) & TT (Telegraphic Transfer)",
    "Full export documentation: COA, MSDS, Phytosanitary Certificate",
    "FDA-compliant labeling for US market",
    "Air freight and sea freight shipping options",
  ];

  return (
    <section id="export" className="section-padding bg-cream-100">
      <div className="container-max">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="text-gold-600 text-sm font-semibold tracking-widest uppercase"
          >
            Export Capabilities
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl lg:text-5xl font-bold text-forest-900 mt-2"
          >
            Built for Global Trade
          </motion.h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14"
        >
          {stats.map(({ value, label, icon: Icon }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="text-center bg-cream-50 rounded-2xl p-6 shadow-card border border-border"
            >
              <div className="w-12 h-12 bg-forest-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-5 h-5 text-gold-400" />
              </div>
              <div className="font-display text-4xl font-bold text-forest-900">
                {value}
              </div>
              <div className="text-foreground/60 text-sm mt-1 font-medium">
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Capabilities */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-forest-900 rounded-3xl p-8 md:p-12"
        >
          <motion.h3
            variants={fadeUp}
            className="font-display text-2xl md:text-3xl font-bold text-cream-50 mb-8"
          >
            What We Offer
          </motion.h3>
          <motion.ul variants={stagger} className="grid md:grid-cols-2 gap-4">
            {capabilities.map((cap) => (
              <motion.li
                key={cap}
                variants={fadeUp}
                className="flex items-start gap-3 text-cream-200"
              >
                <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{cap}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const features = [
    {
      icon: Sprout,
      title: "Direct Farm Sourcing",
      description:
        "We work directly with verified henna farmers in Rajasthan, eliminating middlemen and ensuring traceable, consistent quality from field to shipment.",
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description:
        "Direct procurement and in-house processing allow us to offer market-competitive pricing on bulk orders without compromising on purity or quality.",
    },
    {
      icon: Truck,
      title: "Reliable Supply Chain",
      description:
        "With dedicated processing facilities and warehousing in Rajasthan, we maintain consistent inventory to fulfill large orders on schedule.",
    },
    {
      icon: Users,
      title: "Dedicated Export Team",
      description:
        "Our experienced international trade team handles all documentation, compliance, and logistics coordination for smooth, hassle-free delivery worldwide.",
    },
  ];

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-max">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="text-gold-600 text-sm font-semibold tracking-widest uppercase"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl lg:text-5xl font-bold text-forest-900 mt-2"
          >
            Your Trusted Supplier
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-forest-200"
            >
              <div className="w-12 h-12 bg-forest-900 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors">
                <Icon className="w-5 h-5 text-gold-400 group-hover:text-forest-900 transition-colors" />
              </div>
              <h3 className="font-display font-bold text-forest-900 text-xl mb-3">
                {title}
              </h3>
              <p className="text-foreground/65 text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [hennaPowder, setHennaPowder] = useState(false);
  const [multaniMitti, setMultaniMitti] = useState(false);
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const mutation = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error("Not connected");
      await actor.submitInquiry(
        name,
        company,
        country,
        hennaPowder,
        multaniMitti,
        message,
      );
    },
    onSuccess: () => {
      setName("");
      setCompany("");
      setCountry("");
      setHennaPowder(false);
      setMultaniMitti(false);
      setMessage("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <section id="contact" className="section-padding bg-forest-900">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeUp}
              className="text-gold-400 text-sm font-semibold tracking-widest uppercase"
            >
              Get in Touch
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl lg:text-5xl font-bold text-cream-50 mt-2 mb-6"
            >
              Get a Bulk Quote
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-cream-200/70 text-lg leading-relaxed mb-10"
            >
              Ready to source natural henna powder or Multani Mitti? Fill in
              your requirements and our export team will respond within 24 hours
              with pricing and samples availability.
            </motion.p>

            <motion.div variants={stagger} className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "info@shaktihenna.com" },
                {
                  icon: Phone,
                  label: "Phone / WhatsApp",
                  value: "+91-98290-XXXXX",
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "Sojat City, Rajasthan, India — 306104",
                },
              ].map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-gold-500/20 border border-gold-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-cream-300/60 text-xs font-medium uppercase tracking-wide">
                      {label}
                    </div>
                    <div className="text-cream-100 font-medium mt-0.5">
                      {value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-cream-50 rounded-3xl p-6 md:p-8">
              <AnimatePresence mode="wait">
                {mutation.isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                    data-ocid="contact.success_state"
                  >
                    <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-forest-700" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-forest-900 mb-2">
                      Inquiry Sent!
                    </h3>
                    <p className="text-foreground/60 leading-relaxed">
                      Thank you for reaching out. Our export team will respond
                      within 24 hours.
                    </p>
                    <Button
                      className="mt-6 bg-forest-800 hover:bg-forest-700 text-cream-50"
                      onClick={() => mutation.reset()}
                    >
                      Send Another Inquiry
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="name"
                          className="text-forest-900 font-medium text-sm"
                        >
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          data-ocid="contact.input"
                          className="border-border focus:border-forest-700 bg-white"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="company"
                          className="text-forest-900 font-medium text-sm"
                        >
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          placeholder="Your Company Ltd."
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="border-border focus:border-forest-700 bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="country"
                        className="text-forest-900 font-medium text-sm"
                      >
                        Country <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="country"
                        placeholder="United States"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                        className="border-border focus:border-forest-700 bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-forest-900 font-medium text-sm">
                        Product Interest
                      </Label>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="henna"
                            checked={hennaPowder}
                            onCheckedChange={(v) => setHennaPowder(!!v)}
                            data-ocid="contact.checkbox.1"
                            className="border-forest-700 data-[state=checked]:bg-forest-800"
                          />
                          <Label
                            htmlFor="henna"
                            className="text-foreground/80 cursor-pointer"
                          >
                            Natural Henna Powder
                          </Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id="multani"
                            checked={multaniMitti}
                            onCheckedChange={(v) => setMultaniMitti(!!v)}
                            data-ocid="contact.checkbox.2"
                            className="border-forest-700 data-[state=checked]:bg-forest-800"
                          />
                          <Label
                            htmlFor="multani"
                            className="text-foreground/80 cursor-pointer"
                          >
                            Multani Mitti
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="message"
                        className="text-forest-900 font-medium text-sm"
                      >
                        Message / Requirements
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your quantity requirements, intended use, packaging preferences, and any other details..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        data-ocid="contact.textarea"
                        rows={4}
                        className="border-border focus:border-forest-700 bg-white resize-none"
                      />
                    </div>

                    {mutation.isError && (
                      <div
                        className="bg-destructive/10 border border-destructive/30 rounded-lg px-4 py-3 text-destructive text-sm"
                        data-ocid="contact.error_state"
                      >
                        Failed to send inquiry. Please try again or email us
                        directly.
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={mutation.isPending}
                      className="w-full bg-forest-800 hover:bg-forest-700 text-cream-50 font-semibold py-3 text-base"
                      data-ocid="contact.submit_button"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          <span data-ocid="contact.loading_state">
                            Sending Inquiry...
                          </span>
                        </>
                      ) : (
                        "Send Bulk Inquiry"
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-forest-900 border-t border-forest-800">
      <div className="container-max px-4 md:px-8 lg:px-16 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                <Leaf className="w-4 h-4 text-forest-900" />
              </div>
              <span className="font-display text-xl font-bold text-cream-50">
                Shakti Henna
              </span>
            </div>
            <p className="text-cream-300/60 text-sm leading-relaxed">
              India's trusted manufacturer &amp; exporter of premium natural
              henna powder and Multani Mitti.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-semibold text-cream-100 mb-4 uppercase text-xs tracking-widest">
              Quick Links
            </div>
            <ul className="space-y-2">
              {["About", "Products", "Quality", "Export", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      data-ocid="footer.link"
                      className="text-cream-300/60 hover:text-gold-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="font-semibold text-cream-100 mb-4 uppercase text-xs tracking-widest">
              Contact
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-cream-300/60 text-sm">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                info@shaktihenna.com
              </li>
              <li className="flex items-center gap-2 text-cream-300/60 text-sm">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                +91-98290-XXXXX
              </li>
              <li className="flex items-start gap-2 text-cream-300/60 text-sm">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                Sojat City, Rajasthan, India — 306104
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-forest-800 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream-300/50">
          <span>&copy; {year} Shakti Henna. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-400 transition-colors"
          >
            Built with ♥ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <QualitySection />
        <ExportSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
