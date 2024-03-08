import {z} from 'zod'

export const cepFormSchema = z.object({ //faz com que o cliente nn consiga digitar menos de 8 digitos
    cep: z
    .string()
    .min(8, 'CEP deve ter 8 dígitos')
    .refine((cep) => /^\d{5}\d{3}$/.test (cep),{
        message: "CEP inválido, deve ter o formato 12345678"
    })
})
