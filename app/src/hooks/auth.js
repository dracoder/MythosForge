import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useParams, useRouter, usePathname } from 'next/navigation'
import AuthService from '@/services/AuthService'
import { toast } from 'react-hot-toast';

export const useAuth = ({ middleware, redirectIfAuthenticated, t } = {}) => {
    const router = useRouter()
    const params = useParams()
    const pathname = usePathname()

    const { data: user, error, mutate } = useSWR('/api/me', () =>
        axios
            .get('/api/me')
            .then(res => res.data.data)
            .catch(error => {
                if (error.response.status !== 409) throw error
            }),
        {
            revalidateOnMount: true,
            revalidateIfStale: true,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            refreshInterval: 120000,
        }
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const signup = async (data) => {
        await csrf()

        AuthService.register({
            data: data,
            onSuccess: () => {
                toast.success(t('pages.created', { name: t('pages.account') }));
                mutate()
            },
            onError: error => {
                if (error.response.data.message) toast.error(error.response.data.message)
            },
        })
    }

    const login = async (data) => {
        await csrf()

        AuthService.login({
            data: data,
            onSuccess: () => {
                toast.success(t('pages.logged_in'));
                mutate()
            },
            onError: error => {
                if (error.response.data.message) toast.error(error.response.data.message)
            },
        })
    }

    const forgotPassword = async (data, setLoading) => {
        await csrf()

        AuthService.recoverPassword({
            data: data,
            onSuccess: response => {
                toast.success(t('pages.reset_link_sent'));
                setLoading(false);
            },
            onError: error => {
                if (error.response.data.message) toast.error(error.response.data.message)
                setLoading(false);
            },
        })
    }

    const resetPassword = async (data) => {
        await csrf()

        AuthService.resetPassword({
            data: { token: params.token, ...data },
            onSuccess: response => router.push('/login?reset=' + btoa(response.data.status)),
            onError: error => {
                if (error.response.data.message) toast.error(error.response.data.message)
            },
        })
    }

    const logout = async () => {
        if (!error) {
            await AuthService.logout({
                onSuccess: () => mutate(),
                onError: (err) => console.log(err.response.data),
            })
        }

        router.push('/login')
    }

    useEffect(() => {
        // redirect if user is authenticated
        if (middleware === 'guest' && redirectIfAuthenticated && user && !error)
            router.push(redirectIfAuthenticated)

        // if error on getting the logged user, should logout
        if (middleware === 'auth' && user && error) logout()

        // redirect if user is not authenticated
        if (middleware === 'auth' && !user && error) router.push('/login')
    }, [user, error])

    useEffect(() => {
        if (middleware === 'auth' && user && !error) {
            // if the route has no restrictions, ignore
            if (pathname === '/dashboard' || pathname === '/profile') return;

            // check user.permissions and see if the route is in the list
            if (user.permissions && !user.permissions.includes(pathname.split('/')[1]+'_index')) {
                // if not, redirect to dashboard
                router.push('/dashboard')
            }
        }
    }, [user, pathname])

    return {
        user,
        signup,
        login,
        forgotPassword,
        resetPassword,
        logout,
    }
}
