export {};

declare global {
  declare type Nullable<T> = T | null;
  declare type BaseRespond = Promise<'success' | 'error'>;
  declare type Respond<T> = Promise<{
    data: T;
    message: string;
  }>;
}
