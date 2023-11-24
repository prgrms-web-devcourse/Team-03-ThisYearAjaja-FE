import { postLogin } from '@/apis/client/postLogin';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function useOauthPage() {
  const router = useRouter();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');

    (async () => {
      if (code) {
        await postLogin(code)
          .then((response) => {
            const { data } = response;
            setCookie('auth', data);
          })
          .catch((error) => {
            console.log('로그인 실패' + error);
          })
          .finally(() => {
            // router.push('/home');
          });
      }
    })();
  }, [router]);
}
