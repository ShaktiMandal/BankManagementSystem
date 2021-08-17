export default interface ResetPasswordModel{    
    userEmail: string;
    password: string;
    confirmPassword: string;
    isPasswordSuccess: boolean;
    resetPasswordError: string;
}