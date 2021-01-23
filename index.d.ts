interface ImageData {
  width: number;
  height: number;
  data: Uint8Array | Uint8ClampedArray | number[];
}

export function blockhashData(
  imgData: ImageData,
  bits: number,
  method: 1 | 2
): string;

export function hammingDistance(hash1: string, hash2: string): number;
