import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft } from "lucide-react";

export default function Book() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate() {
    const e: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) e.name = "Name is required.";
    if (!email.trim()) e.email = "Email is required.";
    else {
      // simple email regex
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) e.email = "Enter a valid email.";
    }
    if (!message.trim()) e.message = "Please include a short message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    setFormError(null);
    if (!validate()) return;
    setSubmitting(true);

    try {
      const resp = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!resp.ok) {
        const body = await resp.text();
        throw new Error(body || "Server error");
      }

      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch (err: any) {
      console.error("Failed to send booking:", err);
      setFormError(
        "Could not send the request automatically. You can try again or send an email to rob.pevny@gmail.com",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-orange-50 to-yellow-100">
      <Helmet>
        <title>Book a Coaching Session | Robert Pevny Coaching</title>
        <meta name="description" content="Book a personalized mountain biking or cross-country skiing coaching session with Robert Pevny." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Coaching Session",
          "provider": { "@type": "Person", "name": "Robert Pevny" },
          "serviceType": "Sports Coaching",
          "description": "Personalized mountain biking and cross-country skiing coaching sessions."
        })}</script>
      </Helmet>
      <header className="absolute top-0 left-0 right-0 z-20 p-8 bg-gradient-to-b from-white/60 to-transparent backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-gray-800 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft size={32} />
          </Link>
          <h1 className="text-3xl text-gray-800 font-nunito">
            Book a Coaching Session
          </h1>
        </div>
      </header>

      <main className="absolute inset-0 pt-32 pb-24 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-8">
          <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
              Schedule a Session
            </h2>
            <p className="text-gray-700 mb-6">
              Use this
              form to request a coaching session and I'll get back to you with
              available times.
            </p>

            {success ? (
              <div className="mb-6 p-4 rounded-md bg-green-50 border border-green-200 text-green-800">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <strong className="block">Request received</strong>
                    <div className="text-sm">
                      Thanks — I'll be in touch to schedule your coaching
                      session.
                    </div>
                  </div>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-green-800 hover:underline"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            ) : null}

            {formError ? (
              <div className="mb-6 p-4 rounded-md bg-red-50 border border-red-200 text-red-800">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <strong className="block">Submission failed</strong>
                    <div className="text-sm">{formError}</div>
                  </div>
                  <a
                    className="text-red-800 hover:underline"
                    href={`mailto:rob.pevny@gmail.com?subject=${encodeURIComponent("Coaching request from " + name)}&body=${encodeURIComponent(message + "\n\nContact: " + email)}`}
                  >
                    Send by email
                  </a>
                </div>
              </div>
            ) : null}

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full p-3 rounded-md border ${errors.name ? "border-red-300 bg-red-50" : "border-gray-200"}`}
                  placeholder="Your name"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <div className="mt-1 text-sm text-red-600">{errors.name}</div>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-3 rounded-md border ${errors.email ? "border-red-300 bg-red-50" : "border-gray-200"}`}
                  placeholder="you@example.com"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <div className="mt-1 text-sm text-red-600">
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full p-3 rounded-md border ${errors.message ? "border-red-300 bg-red-50" : "border-gray-200"}`}
                  rows={5}
                  placeholder="Tell me about your goals or availability"
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <div className="mt-1 text-sm text-red-600">
                    {errors.message}
                  </div>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`px-6 py-2 rounded-md text-white ${submitting ? "bg-orange-400" : "bg-orange-600 hover:bg-orange-700"} transition`}
                >
                  {submitting ? "Requesting..." : "Request"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
