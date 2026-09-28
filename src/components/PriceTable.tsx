import { PRICE_CLINICS, formatPrice, type PriceCategory, type PriceItem } from "../data/prices";

function Cell({ item, clinic }: { item: PriceItem; clinic: "dha" | "f7" }) {
  // An omitted branch is not offered there; `null` is offered with no rate given.
  if (!(clinic in item)) return <td className="sd-price__num sd-price__na">Not offered</td>;
  return <td className="sd-price__num">{formatPrice(item[clinic])}</td>;
}

/** One price category, both clinics side by side (design system, PriceTable). */
export default function PriceTable({
  category,
  id,
  note,
  level = 3,
}: {
  category: PriceCategory;
  id?: string;
  /** Shown under the table; pass it on the last table of a list. */
  note?: string;
  level?: 2 | 3;
}) {
  const Heading = `h${level}` as const;
  return (
    <div id={id} className="sd-price scroll-mt-[calc(var(--nav-h)+1rem)]">
      <Heading className="sd-price__title h4">{category.label}</Heading>
      <div className="sd-price__scroll">
        <table className="sd-price__table">
          <caption className="sd-visually-hidden">{category.label} prices by clinic</caption>
          <thead>
            <tr>
              <th scope="col">Treatment</th>
              {PRICE_CLINICS.map((c) => (
                <th key={c.id} scope="col" className="sd-price__num">
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {category.items.map((item) => (
              <tr key={item.name}>
                <th scope="row">{item.name}</th>
                <Cell item={item} clinic="dha" />
                <Cell item={item} clinic="f7" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="sd-price__note">{note}</p>}
    </div>
  );
}
