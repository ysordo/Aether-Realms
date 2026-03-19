import { useForm, useToast } from "@shared/hooks";
import { Card } from "@shared/ui/Card";
import { Button } from "@shared/ui/Button";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { GiHourglass, GiMailbox } from "react-icons/gi";

interface NewsletterFormValues extends Record<string, unknown> {
  email: string;
}

export function NewsletterSection() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const toast = useToast();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
    resetForm,
  } = useForm<NewsletterFormValues>({
    initialValues: { email: "" },
    validate: (values) => {
      const errors: Partial<Record<keyof NewsletterFormValues, string>> = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    },
    onSubmit: async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const subscribedEmails = JSON.parse(
        localStorage.getItem("newsletter-subscribers") || "[]",
      );
      if (subscribedEmails.includes(values.email)) {
        toast.error("This email is already subscribed!");
        return;
      }
      subscribedEmails.push(values.email);
      localStorage.setItem(
        "newsletter-subscribers",
        JSON.stringify(subscribedEmails),
      );
      setIsSubscribed(true);
      toast.success("Thanks for subscribing!");
      resetForm();
      setTimeout(() => setIsSubscribed(false), 5000);
    },
  });

  return (
    <section className="bg-base-100 py-24! px-6! lg:px-40!">
      <div className="max-w-2xl mx-auto!">
        <Card variant="elevated" padding="lg" className="text-center space-y-6!">
          <GiMailbox name="mail" className="text-primary text-5xl mx-auto!" />
          <h3 className="text-2xl md:text-3xl font-black text-base-content uppercase italic">
            Join the Newsletter
          </h3>
          <p className="text-base-content/60">
            Get exclusive updates, early access to new features, and special
            offers.
          </p>
          {isSubscribed ? (
            <div className="flex items-center justify-center gap-2 text-success">
              <CheckCircle name="check_circle" className="text-success" />
              <span className="text-success font-bold">
                Thanks for subscribing!
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex-1 relative">
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleChange}
                  placeholder="Enter your email"
                  className={`w-full px-4! py-3! rounded-full bg-base-100 border ${touched.email && errors.email ? "border-error focus:border-error" : "border-base-content/10 focus:border-primary"} text-base-content placeholder:text-base-content/60 focus:outline-none transition-colors`}
                  disabled={isSubmitting}
                />
                {touched.email && errors.email && (
                  <p className="text-error text-xs text-left mt-1! ml-4!">
                    {errors.email}
                  </p>
                )}
              </div>
              <Button type="submit" size="md" className="p-3! h-fit mt-1!" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <GiHourglass
                      name="hourglass_empty"
                      className="text-sm animate-spin"
                    />
                    Subscribing...
                  </span>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
