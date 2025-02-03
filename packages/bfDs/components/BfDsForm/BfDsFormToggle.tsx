import {
  type BfDsFormElementProps,
  useBfDsFormContext,
} from "packages/bfDs/components/BfDsForm/BfDsForm.tsx";
import { BfDsToggle } from "packages/bfDs/components/BfDsToggle.tsx";

// TODO: Implement all props:
// disabled, label, value, onChange, className, meta, name, required, readonly, size, testId

export function BfDsFormToggle({ id, title }: BfDsFormElementProps) {
  const { data, onChange } = useBfDsFormContext();
  if (!data) return null;
  return (
    <BfDsToggle
      label={title}
      name={id}
      // @ts-ignore: TODO @george, need to figure out typing
      value={data[id] === true}
      onChange={(checked) => onChange?.({ ...data, [id]: checked })}
    />
  );
}
