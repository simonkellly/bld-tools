export type FixedSizeArray<T, N extends number> = {readonly 0: T, readonly length: N } & ReadonlyArray<T>
