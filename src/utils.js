export const MASTER_USERNAME = 'test@luxpmsoft.com';
export const MASTER_PASSWORD = 'test1234!';
export const checkPasswordCombination = (text) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*)(+=._-]).+$/
    return passwordRegex.test(text);
}
