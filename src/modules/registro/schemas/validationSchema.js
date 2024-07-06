import * as yup from 'yup';

export const schema = yup.object({
    nombre: yup.string().required('El nombre es requerido'),
    email: yup.string().email('El correo no es válido').required('El correo es requerido'),
})