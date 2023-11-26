import { postLogin } from '@/apis/client/postLogin';
import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function useOauthPage() {
  const router = useRouter();

  useEffect(() => {
    const way = new URL(window.location.href).searchParams.get('way');

    if (way === 'login') {
      const code = new URL(window.location.href).searchParams.get('code');
      (async () => {
        if (code) {
          console.log(code);
          await postLogin(code).then((response) => {
            const { data } = response;
            setCookie('auth', data);
            router.push('/home');
          });
        }
      })();
    } else if (way === 'logout') {
      deleteCookie('auth');
      router.push('/login');
    }
  }, [router]);
}
