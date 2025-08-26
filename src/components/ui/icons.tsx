import { cn } from "@/lib/utils";

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
