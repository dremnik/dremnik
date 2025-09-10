import { cn } from "@/lib/utils";
import Image from "next/image";

// PROJECTS

export const PROJECT_ICONS = {
  kernl: <IconKernl className="size-9" />,
  microprojects: <IconMicroprojects className="size-9" />,
  reverie: <IconReverie className="size-6" />,
  emblem: <IconEmblem height={40} width={40} />,
  propics: <IconPropics height={40} width={40} />,
  esonut: <IconEsonut className="size-10" />,
} as const;

export function IconKernl({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 30 41"
      fill="none"
      className={cn("size-4", className)}
      {...props}
    >
      <g clipPath="url(#clip0_52_1359)">
        <path
          d="M10.3139 20.4823C11.6182 20.4366 12.9007 20.1276 14.0876 19.5734C15.2745 19.0192 16.3423 18.2305 17.2296 17.2529C18.1168 16.2753 18.8061 15.1284 19.2574 13.8776C19.7087 12.6268 19.9128 11.2974 19.8589 9.9655C19.8589 2.96859 13.896 0.7572 10.3139 0.00646973C14.6544 0.00646973 29.8939 4.828 30.0008 20.4861C30.1077 36.1442 15.7578 40.9475 10.3139 41.0068C8.95291 41.0113 7.60446 40.7397 6.34704 40.2078C5.08963 39.6758 3.94831 38.894 2.989 37.9078C2.02968 36.9217 1.27164 35.751 0.758841 34.4633C0.246039 33.1756 -0.0113168 31.7964 0.00172307 30.4063C0.107657 23.8767 5.60499 20.4823 10.3139 20.4823Z"
          fill="#B5D1FF"
        />
        <path
          d="M9.91657 13.4385C11.6966 13.4385 13.1396 11.9645 13.1396 10.1464C13.1396 8.32817 11.6966 6.85425 9.91657 6.85425C8.13654 6.85425 6.69354 8.32817 6.69354 10.1464C6.69354 11.9645 8.13654 13.4385 9.91657 13.4385Z"
          fill="#B5D1FF"
        />
        <path
          d="M9.91657 34.1303C11.6966 34.1303 13.1396 32.6564 13.1396 30.8382C13.1396 29.0201 11.6966 27.5461 9.91657 27.5461C8.13654 27.5461 6.69354 29.0201 6.69354 30.8382C6.69354 32.6564 8.13654 34.1303 9.91657 34.1303Z"
          fill="#080909"
        />
      </g>
      <defs>
        <clipPath id="clip0_52_1359">
          <rect width="30" height="41" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconMicroprojects({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 37 34"
      fill="none"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 0.183716L18.9109 0.39738L26.3328 4.25675L26.8125 4.50621V5.04693V13.9532V14.4938L26.3328 14.7433L18.9109 18.6027L18.5 18.8163L18.0891 18.6027L10.6672 14.7433L10.1875 14.4938V13.9532V5.04693V4.50621L10.6672 4.25675L18.0891 0.39738L18.5 0.183716ZM11.9688 13.4125V6.46074L17.6094 9.28107V16.3456L11.9688 13.4125ZM19.3906 16.3456L25.0312 13.4125V6.46072L19.3906 9.28103V16.3456ZM18.5 2.19139L23.9347 5.01747L18.5 7.73486L13.0652 5.01748L18.5 2.19139Z"
        fill="#F9F7F5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.5 15.1837L27.9109 15.3974L35.3328 19.2568L35.8125 19.5062V20.0469V28.9532V29.4938L35.3328 29.7433L27.9109 33.6027L27.5 33.8163L27.0891 33.6027L19.6672 29.7433L19.1875 29.4938V28.9532V20.0469V19.5062L19.6672 19.2568L27.0891 15.3974L27.5 15.1837ZM20.9688 28.4125V21.4607L26.6094 24.2811V31.3456L20.9688 28.4125ZM28.3906 31.3456L34.0312 28.4125V21.4607L28.3906 24.281V31.3456ZM27.5 17.1914L32.9347 20.0175L27.5 22.7349L22.0652 20.0175L27.5 17.1914Z"
        fill="#F9F7F5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 15.1837L9.91089 15.3974L17.3328 19.2568L17.8125 19.5062V20.0469V28.9532V29.4938L17.3328 29.7433L9.91089 33.6027L9.5 33.8163L9.08911 33.6027L1.66724 29.7433L1.1875 29.4938V28.9532V20.0469V19.5062L1.66724 19.2568L9.08911 15.3974L9.5 15.1837ZM2.96875 28.4125V21.4607L8.60938 24.2811V31.3456L2.96875 28.4125ZM10.3906 31.3456L16.0312 28.4125V21.4607L10.3906 24.281V31.3456ZM9.5 17.1914L14.9347 20.0175L9.49998 22.7349L4.06523 20.0175L9.5 17.1914Z"
        fill="#F9F7F5"
      />
    </svg>
  );
}

export function IconReverie({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn("size-4", className)}
      {...props}
    >
      <g clipPath="url(#clip0_55_1465)">
        <path
          d="M18.5547 16.276C12.066 16.276 7.91605 12.2099 7.91605 5.70917C7.91605 4.22191 8.23988 2.41082 8.67167 1.41531C8.77962 1.13945 8.80361 0.959543 8.80361 0.851596C8.80361 0.539752 8.56373 0.179932 8.08396 0.179932C7.95203 0.179932 7.66417 0.203921 7.38831 0.311866C2.97452 2.07498 0 6.72867 0 11.5982C0 18.4468 5.55322 24 12.4019 24C17.5712 24 21.901 20.8696 23.4243 16.9835C23.5323 16.6957 23.5563 16.3958 23.5563 16.2879C23.5563 15.8321 23.1964 15.5442 22.8606 15.5442C22.7046 15.5442 22.5727 15.5802 22.3449 15.6522C21.4093 15.9521 20.03 16.276 18.5547 16.276Z"
          fill="#B5D1FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_55_1465">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconEmblem({
  className,
  height = 40,
  width = 40,
  ...props
}: {
  className?: string;
  height?: number;
  width?: number;
}) {
  return (
    <Image
      src="/logo-emblem.png"
      alt="Emblem"
      height={height}
      width={width}
      className={className}
    />
  );
}

export function IconPropics({
  className,
  height = 40,
  width = 40,
  ...props
}: {
  className?: string;
  height?: number;
  width?: number;
}) {
  return (
    <Image
      src="/logo-propics.png"
      alt="ProPics"
      height={height}
      width={width}
      className={className}
    />
  );
}

export function IconEsonut({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={cn("size-4", className)}
      {...props}
    >
      <g clipPath="url(#clip0_54_1450)">
        <path
          d="M24.693 32.5075C30.9502 26.4647 25.9908 20 25.9908 20C16.1925 7.87881 30.1304 3.03032 30.1304 3.03032C30.9502 7.87881 32.59 8.68689 34.2297 10.303C41.6086 16.7677 38.8809 25.6307 38.8809 25.6307C37.7444 29.6176 35.3086 33.1252 31.9492 35.6125C28.5898 38.0998 24.4934 39.4286 20.2919 39.394C15.0732 39.394 10.0683 37.3507 6.37815 33.7136C2.68801 30.0765 0.614906 25.1436 0.614906 20C0.614906 14.8564 2.68801 9.9235 6.37815 6.28643C10.0683 2.64936 15.0732 0.606079 20.2919 0.606079"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.33894 35.4028C10.4534 32.9293 13.7329 33.7373 14.5528 33.7373C12.0931 30.505 12.913 27.2727 12.913 25.6565C15.3726 18.3838 24.4134 19.1919 26.031 20"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M22.6261 10.6101C21.9316 7.07071 17.8323 3.83838 17.8323 3.83838C16.1925 4.64646 16.0121 6.26262 15.6924 6.66666C12.0931 6.26262 5.53415 12.7273 5.53415 15.1515C12.0931 20.8081 17.0124 15.1515 17.0124 15.1515"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M12.913 25.6566C12.913 25.6566 7.1739 26.4647 5.53415 23.2324C9.63352 22.4243 12.1513 17.7689 12.1513 17.7689"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_54_1450">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

// BRAND LOGOS

export function IconTwitterX({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function IconLinkedIn({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 2C2.67157 2 2 2.67157 2 3.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V3.5C14 2.67157 13.3284 2 12.5 2H3.5ZM4.74556 5.5C5.21057 5.5 5.5 5.16665 5.5 4.75006C5.49133 4.3241 5.21057 4 4.75438 4C4.29824 4 4 4.3241 4 4.75006C4 5.16665 4.28937 5.5 4.73687 5.5H4.74556ZM5.5 6.5V12H4V6.5H5.5ZM7 12H8.5V8.89479C8.5 8.89479 8.60415 7.78962 9.55208 7.78962C10.5 7.78962 10.5 9.02275 10.5 9.02275V12H12V8.8133C12 7.13837 11.25 6.5025 10.125 6.5025C9 6.5025 8.5 7.27778 8.5 7.27778V6.5025H7.00005C7.02383 7.01418 7 12 7 12Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function IconGithub({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <g clipPath="url(#clip0_872_3147)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z"
          fill="currentColor"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_872_3147">
          <rect width="16" height="16" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

export function IconSun({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.75 0.75V0H7.25V0.75V2V2.75H8.75V2V0.75ZM11.182 3.75732L11.7123 3.22699L12.0659 2.87344L12.5962 2.34311L13.6569 3.40377L13.1265 3.9341L12.773 4.28765L12.2426 4.81798L11.182 3.75732ZM8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12ZM13.25 7.25H14H15.25H16V8.75H15.25H14H13.25V7.25ZM0.75 7.25H0V8.75H0.75H2H2.75V7.25H2H0.75ZM2.87348 12.0659L2.34315 12.5962L3.40381 13.6569L3.93414 13.1265L4.28769 12.773L4.81802 12.2426L3.75736 11.182L3.22703 11.7123L2.87348 12.0659ZM3.75735 4.81798L3.22702 4.28765L2.87347 3.9341L2.34314 3.40377L3.4038 2.34311L3.93413 2.87344L4.28768 3.22699L4.81802 3.75732L3.75735 4.81798ZM12.0659 13.1265L12.5962 13.6569L13.6569 12.5962L13.1265 12.0659L12.773 11.7123L12.2426 11.182L11.182 12.2426L11.7123 12.773L12.0659 13.1265ZM8.75 13.25V14V15.25V16H7.25V15.25V14V13.25H8.75Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function IconMoon({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 8.00005C1.5 5.53089 2.99198 3.40932 5.12349 2.48889C4.88136 3.19858 4.75 3.95936 4.75 4.7501C4.75 8.61609 7.88401 11.7501 11.75 11.7501C11.8995 11.7501 12.048 11.7454 12.1953 11.7361C11.0955 13.1164 9.40047 14.0001 7.5 14.0001C4.18629 14.0001 1.5 11.3138 1.5 8.00005ZM6.41706 0.577759C2.78784 1.1031 0 4.22536 0 8.00005C0 12.1422 3.35786 15.5001 7.5 15.5001C10.5798 15.5001 13.2244 13.6438 14.3792 10.9921L13.4588 9.9797C12.9218 10.155 12.3478 10.2501 11.75 10.2501C8.71243 10.2501 6.25 7.78767 6.25 4.7501C6.25 3.63431 6.58146 2.59823 7.15111 1.73217L6.41706 0.577759ZM13.25 1V1.75V2.75L14.25 2.75H15V4.25H14.25H13.25V5.25V6H11.75V5.25V4.25H10.75L10 4.25V2.75H10.75L11.75 2.75V1.75V1H13.25Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function IconLeaf({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        d="M8.24998 15C6.93303 15.004 5.66267 14.5129 4.69087 13.6241C3.71907 12.7352 3.11681 11.5137 3.00354 10.2016C2.89026 8.8895 3.27425 7.58277 4.07935 6.54056C4.88444 5.49834 6.05183 4.79678 7.34998 4.575C11.625 3.75 12.75 3.36 14.25 1.5C15 3 15.75 4.635 15.75 7.5C15.75 11.625 12.165 15 8.24998 15Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M1.5 15.75C1.5 13.5 2.8875 11.73 5.31 11.25C7.125 10.89 9 9.75 9.75 9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function IconArrowUpDiagonalScale({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.74944 1H8.99944V2.5H9.74944H12.4388L9.46911 5.46967L8.93878 6L9.99944 7.06066L10.5298 6.53033L13.4983 3.56182V6.25V7H14.9983V6.25V2C14.9983 1.44772 14.5506 1 13.9983 1H9.74944ZM2.50195 12.4382V9.75V9H1.00195V9.75V14C1.00195 14.5523 1.44967 15 2.00195 15H6.25079H7.00079V13.5H6.25079H3.56145L6.53112 10.5303L7.06145 10L6.00079 8.93934L5.47046 9.46967L2.50195 12.4382Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function IconChevronUpDown({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.7071 2.39644C8.31658 2.00592 7.68341 2.00592 7.29289 2.39644L4.46966 5.21966L3.93933 5.74999L4.99999 6.81065L5.53032 6.28032L7.99999 3.81065L10.4697 6.28032L11 6.81065L12.0607 5.74999L11.5303 5.21966L8.7071 2.39644ZM5.53032 9.71966L4.99999 9.18933L3.93933 10.25L4.46966 10.7803L7.29289 13.6035C7.68341 13.9941 8.31658 13.9941 8.7071 13.6035L11.5303 10.7803L12.0607 10.25L11 9.18933L10.4697 9.71966L7.99999 12.1893L5.53032 9.71966Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function IconChevronDownSmall({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function IconChevronUpSmall({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.93933 9.24999L4.46966 8.71966L7.29288 5.89644C7.68341 5.50592 8.31657 5.50592 8.7071 5.89644L11.5303 8.71966L12.0607 9.24999L11 10.3107L10.4697 9.78032L7.99999 7.31065L5.53032 9.78032L4.99999 10.3107L3.93933 9.24999Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function IconChevronLeft({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 14.0607L9.96966 13.5303L5.14644 8.7071C4.75592 8.31658 4.75592 7.68341 5.14644 7.29289L9.96966 2.46966L10.5 1.93933L11.5607 2.99999L11.0303 3.53032L6.56065 7.99999L11.0303 12.4697L11.5607 13L10.5 14.0607Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function IconChevronRight({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.50001 1.93933L6.03034 2.46966L10.8536 7.29288C11.2441 7.68341 11.2441 8.31657 10.8536 8.7071L6.03034 13.5303L5.50001 14.0607L4.43935 13L4.96968 12.4697L9.43935 7.99999L4.96968 3.53032L4.43935 2.99999L5.50001 1.93933Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function IconChevronLeftSmall({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.24996 12.0607L8.71963 11.5303L5.89641 8.7071C5.50588 8.31657 5.50588 7.68341 5.89641 7.29288L8.71963 4.46966L9.24996 3.93933L10.3106 4.99999L9.78029 5.53032L7.31062 7.99999L9.78029 10.4697L10.3106 11L9.24996 12.0607Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function IconBox({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0.154663L8.34601 0.334591L14.596 3.58459L15 3.79466V4.25V11.75V12.2053L14.596 12.4154L8.34601 15.6654L8 15.8453L7.65399 15.6654L1.40399 12.4154L1 12.2053V11.75V4.25V3.79466L1.40399 3.58459L7.65399 0.334591L8 0.154663ZM2.5 11.2947V5.44058L7.25 7.81559V13.7647L2.5 11.2947ZM8.75 13.7647L13.5 11.2947V5.44056L8.75 7.81556V13.7647ZM8 1.84534L12.5766 4.22519L7.99998 6.51352L3.42335 4.2252L8 1.84534Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function IconPlus({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 8.75,1 H7.25 V7.25 H1.5 V8.75 H7.25 V15 H8.75 V8.75 H14.5 V7.25 H8.75 V1.75 Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function IconMenu({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 3.25C1.5 2.83579 1.83579 2.5 2.25 2.5H13.75C14.1642 2.5 14.5 2.83579 14.5 3.25C14.5 3.66421 14.1642 4 13.75 4H2.25C1.83579 4 1.5 3.66421 1.5 3.25ZM1.5 8C1.5 7.58579 1.83579 7.25 2.25 7.25H13.75C14.1642 7.25 14.5 7.58579 14.5 8C14.5 8.41421 14.1642 8.75 13.75 8.75H2.25C1.83579 8.75 1.5 8.41421 1.5 8ZM2.25 12C1.83579 12 1.5 12.3358 1.5 12.75C1.5 13.1642 1.83579 13.5 2.25 13.5H13.75C14.1642 13.5 14.5 13.1642 14.5 12.75C14.5 12.3358 14.1642 12 13.75 12H2.25Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function IconSearch({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function IconCheck({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      className={cn("size-4", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
