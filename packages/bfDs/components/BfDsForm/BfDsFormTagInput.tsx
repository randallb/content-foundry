import { useBfDsFormContext } from "packages/bfDs/components/BfDsForm/BfDsForm.tsx";
import { BfDsTagInput } from "packages/bfDs/components/BfDsTagInput.tsx";

export function BfDsFormTagInput(
  { id, title }: { id: string; title: string },
) {
  const { data, onChange } = useBfDsFormContext();
  if (!data) return null;
  return (
    <BfDsTagInput
      label={title}
      name={id}
      // @ts-ignore: TODO @george, need to figure out typing
      value={data[id] ?? []}
      onChange={(tags) => onChange?.({ ...data, [id]: tags })}
    />
  );
}
