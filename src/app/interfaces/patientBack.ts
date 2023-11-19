export interface PatientBack {
    name: string,
    email: string,
    password: string,
    dni: string,
    age?: number,
    height?: number,
    weight?: number,
    bmi?: number,
    birthDate: string,
    phoneNumber: string,
    photo?: string,
    allergies?: Array<string>
}
