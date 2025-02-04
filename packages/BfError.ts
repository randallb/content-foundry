export class BfError extends Error {
  override message = this.constructor.name
};
export class BfErrorNotImplemented extends BfError {
  override message = "Not implemented";
};
export class BfErrorExampleImplementation extends BfErrorNotImplemented {
  override message = "Replace this example with your own";
}