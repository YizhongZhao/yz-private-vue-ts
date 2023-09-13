export {};

declare global {
  declare type Nullable<T> = T | null;
  declare type BaseRespond = Promise<'success' | 'error'>;
}
