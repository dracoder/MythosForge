import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

const LabeledCheckbox = React.forwardRef(({ label, className,errors, ...props }, ref) => (
    <React.Fragment>
    <label className={cn("flex items-center text-base gap-2", className)} ref={ref}>
        <Checkbox {...props} />
        <span className="text-sm">{label}</span>
    </label>
    {
        errors && errors[props.name] && (
            <p className="text-red-500 text-sm font-normal">
                {errors[props.name].message || `${props.name.charAt(0).toUpperCase()}${props.name.slice(1)} is required.`}
            </p>
        )
    }
    </React.Fragment>
));
LabeledCheckbox.displayName = "LabeledCheckbox";

export { Checkbox, LabeledCheckbox };
