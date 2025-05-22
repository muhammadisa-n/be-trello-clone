import { z, ZodType } from "zod";

export class TodoValidation {
  static readonly CREATE: ZodType = z.object({
    name: z.preprocess(
      (v) => (v === null ? undefined : v),
      z
        .string({
          required_error: "Name Wajib Diisi",
        })
        .min(1, { message: "Name Tidak Boleh Kosong" })
    ),
  });
  static readonly UPDATE: ZodType = z.object({
    name: z.preprocess(
      (v) => (v === null ? undefined : v),
      z
        .string({
          required_error: "Name Wajib Diisi",
        })
        .min(1, { message: "Name Tidak Boleh Kosong" })
    ),
  });
}
