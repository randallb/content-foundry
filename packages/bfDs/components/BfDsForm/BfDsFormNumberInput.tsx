import {
  type BfDsFormValue,
  useBfDsFormContext,
} from "packages/bfDs/components/BfDsForm/BfDsForm.tsx";
import { BfDsInput } from "packages/bfDs/components/BfDsInput.tsx";

// TODO: Implement all props:
// autoFocus, autoSelect, disabled, label, value, onBlur, onChange, onFocus, onKeyDown, placeholder, type, className, meta, name, numberAttributes, pattern, required, readonly, showSpinner, testId, xstyle

export function BfDsFormNumberInput(
  { id, title }: { id: string; title: string },
) {
  const { data, onChange } = useBfDsFormContext() as BfDsFormValue;
  if (!data) return null;
  return (
    <BfDsInput
      label={title}
      type="number"
      name={id}
      value={data[id]}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange?.({ ...data, [id]: e.target.value })}
    />
  );
}
