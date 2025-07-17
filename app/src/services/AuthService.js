import AuthModule from '@/modules/AuthModule';

const AuthService = {
    login: async ({data, onSuccess = () => {}, onError = () => {}}) => {
        await AuthModule.login(data)
            .then(response => {
                onSuccess(response);
            })
            .catch(error => {
                onError(error);
            });
    },
    register: async ({data, onSuccess = () => {}, onError = () => {}}) => {
        await AuthModule.register(data)
            .then(response => {
                onSuccess(response);
            })
            .catch(error => {
                onError(error);
            });
    },
    recoverPassword: async ({data, onSuccess = () => {}, onError = () => {}}) => {
        await AuthModule.recoverPassword(data)
            .then(response => {
                onSuccess(response);
            })
            .catch(error => {
                onError(error);
            });
    },
    resetPassword: async ({data, onSuccess = () => {}, onError = () => {}}) => {
        await AuthModule.resetPassword(data)
            .then(response => {
                onSuccess(response);
            })
            .catch(error => {
                onError(error);
            });
    },
    // authenticated
    getProfile: async ({onSuccess = () => {}, onError = () => {}}) => {
        await AuthModule.getProfile()
            .then(response => {
                onSuccess(response);
            })
            .catch(error => {
                onError(error);
            });
    },
    updateProfile: async ({data, onSuccess = () => {}, onError = () => {}}) => {
        await AuthModule.updateProfile(data)
            .then(response => {
                onSuccess(response);
            })
            .catch(error => {
                onError(error);
            });
    },
    updatePassword: async ({data, onSuccess = () => {}, onError = () => {}}) => {
        await AuthModule.updatePassword(data)
            .then(response => {
                onSuccess(response);
            })
            .catch(error => {
                onError(error);
            });
    },
    logout: async ({onSuccess = () => {}, onError = () => {}}) => {
        await AuthModule.logout()
            .then(response => {
                onSuccess(response);
            })
            .catch(error => {
                onError(error);
            });
    },
}

export default AuthService;
