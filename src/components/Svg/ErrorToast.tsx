import { SvgProps } from '@/types/Svg';

export default function ErrorToast({ width, height, color }: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 344 284"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M71.6667 260.333C63.7833 260.333 57.0347 258.016 51.4208 253.381C45.8069 248.747 43 243.175 43 236.667V71C43 64.4917 45.8069 58.9202 51.4208 54.2854C57.0347 49.6507 63.7833 47.3334 71.6667 47.3334H86V35.5C86 32.1472 87.3736 29.3368 90.1208 27.0688C92.8681 24.8007 96.2722 23.6667 100.333 23.6667C104.394 23.6667 107.799 24.8007 110.546 27.0688C113.293 29.3368 114.667 32.1472 114.667 35.5V47.3334H229.333V35.5C229.333 32.1472 230.707 29.3368 233.454 27.0688C236.201 24.8007 239.606 23.6667 243.667 23.6667C247.728 23.6667 251.132 24.8007 253.879 27.0688C256.626 29.3368 258 32.1472 258 35.5V47.3334H272.333C280.217 47.3334 286.965 49.6507 292.579 54.2854C298.193 58.9202 301 64.4917 301 71V236.667C301 243.175 298.193 248.747 292.579 253.381C286.965 258.016 280.217 260.333 272.333 260.333H71.6667ZM71.6667 236.667H272.333V118.333H71.6667V236.667Z"
        fill={color}
      />
      <path
        d="M172.001 218.5C169.342 218.5 167.067 217.553 165.174 215.66C163.281 213.767 162.334 211.492 162.334 208.833C162.334 206.175 163.281 203.899 165.174 202.006C167.067 200.113 169.342 199.167 172.001 199.167C174.659 199.167 176.935 200.113 178.828 202.006C180.721 203.899 181.667 206.175 181.667 208.833C181.667 211.492 180.721 213.767 178.828 215.66C176.935 217.553 174.659 218.5 172.001 218.5ZM172.001 189.5C169.342 189.5 167.067 188.553 165.174 186.66C163.281 184.767 162.334 182.492 162.334 179.833V141.167C162.334 138.508 163.281 136.233 165.174 134.34C167.067 132.447 169.342 131.5 172.001 131.5C174.659 131.5 176.935 132.447 178.828 134.34C180.721 136.233 181.667 138.508 181.667 141.167V179.833C181.667 182.492 180.721 184.767 178.828 186.66C176.935 188.553 174.659 189.5 172.001 189.5Z"
        fill={color}
      />
    </svg>
  );
}
