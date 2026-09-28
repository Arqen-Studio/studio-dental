import { cloneElement, type InputHTMLAttributes, type ReactElement } from "react";
import { Check, ChevronDown, TriangleAlert } from "lucide-react";

type ControlProps = InputHTMLAttributes<HTMLElement>;

/** Labelled control with hint and error (design system, Field). Pass the bare
 *  <input>, <select> or <textarea> as the child; Field wires up id, class and ARIA. */
export function Field({
  id,
  label,
  optional,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  hint?: string;
  /** Say how to fix it: "Enter an email address like name@example.com". */
  error?: string;
  children: ReactElement<ControlProps>;
}) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const control = cloneElement(children, {
    id,
    className: "sd-field__control",
    "aria-invalid": error ? true : undefined,
    "aria-describedby": [hintId, errorId].filter(Boolean).join(" ") || undefined,
  });

  return (
    <div className={error ? "sd-field sd-field--error" : "sd-field"}>
      <label htmlFor={id} className="sd-field__label">
        {label}
        {optional && <span className="sd-field__optional"> (optional)</span>}
      </label>
      {children.type === "select" ? (
        <span className="sd-field__select">
          {control}
          <ChevronDown className="sd-icon" size={18} strokeWidth={1.75} aria-hidden />
        </span>
      ) : (
        control
      )}
      {hint && (
        <p id={hintId} className="sd-field__hint">
          {hint}
        </p>
      )}
      {error && <FieldError id={errorId!} message={error} />}
    </div>
  );
}

/** Checkbox with a visible label (design system, Checkbox). */
export function Checkbox({
  id,
  name,
  label,
  error,
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
}) {
  const errorId = error ? `${id}-error` : undefined;
  return (
    <div className="flex flex-col gap-2">
      <div className="sd-check">
        <input
          type="checkbox"
          id={id}
          name={name}
          className="sd-check__input"
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
        />
        <span className="sd-check__box" aria-hidden="true">
          <Check className="sd-icon" size={14} strokeWidth={2.5} aria-hidden />
        </span>
        <label htmlFor={id} className="sd-check__label">
          {label}
        </label>
      </div>
      {error && <FieldError id={errorId!} message={error} />}
    </div>
  );
}

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="sd-field__error">
      <TriangleAlert className="sd-icon" size={16} strokeWidth={1.75} aria-hidden />
      {message}
    </p>
  );
}
