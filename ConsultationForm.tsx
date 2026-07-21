import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { categories, studio } from "../lib/data";

const inputClass =
  "w-full border-b border-espresso/20 bg-transparent py-2.5 text-[0.95rem] text-espresso placeholder:text-espresso/35 outline-none transition-colors focus:border-brass";

const labelClass =
  "block text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-espresso/55";

interface ConsultationFormProps {
  heading?: string;
  sub?: string;
}

export default function ConsultationForm({
  heading = "Book your free consultation",
  sub = "Share a few details and we will call you back within one working day to schedule your session.",
}: ConsultationFormProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    type: "Residential",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (form.name.trim().length < 2) next.name = "Please tell us your name.";
    if (form.phone.replace(/\D/g, "").length < 8)
      next.phone = "Please share a reachable phone number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "That email doesn’t look right.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center border rule bg-[#FBF7EF] px-8 py-16 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-brass/15 text-brass-deep">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-medium tracking-tight sm:text-3xl">
          Thank you, {form.name.split(" ")[0]}.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-espresso/65">
          Your request for a{" "}
          <span className="font-medium text-espresso">{form.type}</span>{" "}
          consultation is with our studio desk. Expect a call from{" "}
          <span className="font-medium text-espresso">{studio.phone}</span>{" "}
          within one working day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-terracotta transition-colors hover:text-clay"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="border rule bg-[#FBF7EF] p-6 shadow-[0_30px_70px_-35px_rgba(30,24,20,0.35)] sm:p-9">
      <h3 className="font-display text-2xl font-medium tracking-tight sm:text-[1.7rem]">
        {heading}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-espresso/60">{sub}</p>

      <form onSubmit={handleSubmit} noValidate className="mt-8">
        <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className={labelClass}>
              Full name *
            </label>
            <input
              id="cf-name"
              type="text"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Ananya Sharma"
              className={inputClass}
            />
            {errors.name && <p className="mt-1.5 text-xs text-clay">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="cf-phone" className={labelClass}>
              Phone *
            </label>
            <input
              id="cf-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="+91 98XXX XXXXX"
              className={inputClass}
            />
            {errors.phone && <p className="mt-1.5 text-xs text-clay">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="cf-email" className={labelClass}>
              Email
            </label>
            <input
              id="cf-email"
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="you@example.com"
              className={inputClass}
            />
            {errors.email && <p className="mt-1.5 text-xs text-clay">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="cf-city" className={labelClass}>
              City
            </label>
            <input
              id="cf-city"
              type="text"
              value={form.city}
              onChange={(e) => set("city", e.target.value)}
              placeholder="New Delhi"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="cf-type" className={labelClass}>
              Project type
            </label>
            <select
              id="cf-type"
              value={form.type}
              onChange={(e) => set("type", e.target.value)}
              className={`${inputClass} cursor-pointer bg-transparent`}
            >
              {categories.map((c) => (
                <option key={c.slug} value={c.label}>
                  {c.label}
                </option>
              ))}
              <option value="Something else">Something else</option>
            </select>
          </div>
          <div>
            <label htmlFor="cf-budget" className={labelClass}>
              Indicative budget
            </label>
            <select
              id="cf-budget"
              value={form.budget}
              onChange={(e) => set("budget", e.target.value)}
              className={`${inputClass} cursor-pointer bg-transparent`}
            >
              <option value="">Prefer to discuss</option>
              <option value="Under ₹10 lakh">Under ₹10 lakh</option>
              <option value="₹10 – 25 lakh">₹10 – 25 lakh</option>
              <option value="₹25 – 60 lakh">₹25 – 60 lakh</option>
              <option value="₹60 lakh – 1.5 crore">₹60 lakh – 1.5 crore</option>
              <option value="Above ₹1.5 crore">Above ₹1.5 crore</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="cf-message" className={labelClass}>
              About your space
            </label>
            <textarea
              id="cf-message"
              rows={3}
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="A 3BHK in Vasant Kunj, east-facing, we host often…"
              className={`${inputClass} resize-none`}
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[16rem] text-[0.68rem] leading-relaxed text-espresso/45">
            No obligation, no sales choreography. Your details stay with the
            studio.
          </p>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-espresso px-8 py-4 text-sm font-semibold tracking-wide text-ivory transition-colors duration-300 hover:bg-brass hover:text-ink"
          >
            Request a Callback
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </form>
    </div>
  );
}
