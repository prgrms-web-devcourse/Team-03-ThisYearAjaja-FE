import { KAKAO_LOGIN_URL } from '@/constants';
import { UNLOGIN_URL } from '@/constants/login';
import Image from 'next/image';
import Link from 'next/link';
import './index.scss';

export default function LoginPage() {
  //TODO 로그인페이지접속시 이전 페이지에 대한 정보를 저장해야한다. 로그인한 사람은 로그인 페이지에 접근할 수 없다 .
  return (
    <div className="wrapper">
      <div className="login">
        <Image
          className="login__logo"
          src="/this-year-ajaja-logo.svg"
          width={260}
          height={190}
          alt="thisYearAjajaLogo"
        />
        <div className="login__sentence color-origin-gray-300 font-size-2xl">
          <span className="login__sentence--text">
            올해의 신년 계획을 생성하고,
          </span>
          <span className="login__sentence--text">
            주기적으로 리마인드 받아보세요!!
          </span>
        </div>
        <div className="login__buttons">
          <Link className="login__buttons--kakaoLogin" href={KAKAO_LOGIN_URL}>
            <Image
              src="/kakao_login_large_narrow.png"
              width={230}
              height={60}
              alt="kakaoLogin"
            />
          </Link>
          <Link
            className="login__buttons--unAuth color-origin-gray-200"
            href={UNLOGIN_URL}>
            로그인 하지 않고 둘러보기
          </Link>
        </div>
      </div>
    </div>
  );
}
