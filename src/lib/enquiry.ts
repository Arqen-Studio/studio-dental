/** Sends a form's fields to /api/enquiry; throws with the server's message on failure. */
export async function postEnquiry(data: Record<string, FormDataEntryValue>) {
  const res = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || "The enquiry could not be sent.");
  }
}

export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

/** Focuses the first field named in `errors`, in the order they were added. */
export function focusFirstError(form: HTMLFormElement, errors: Record<string, string>) {
  const first = Object.keys(errors)[0];
  if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus();
}
