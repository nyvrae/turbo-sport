import React from 'react'
import Link from 'next/link'

import './banner.css'

import VideoComponent from '@/ui/video/VideoComponent'

const Banner = () => {
    return (
        <section className='banner w-full'>
            <div className="banner__wrapper wrapper text-foreground">
                <div className="banner__wrapper__image">
                    <svg width="152" height="27" viewBox="0 0 152 27" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="banner">
                        <g clipPath="url(#clip0_341_1740)">
                            <path
                                d="M35.5946 25.1062C35.5946 26.1477 34.7425 26.9994 33.7032 26.9994H1.88873C0.847453 26.9994 -0.00195312 26.1477 -0.00195312 25.1062V1.89207C-0.00195312 0.851199 0.847453 -0.000488281 1.88873 -0.000488281H33.7032C34.7425 -0.000488281 35.5946 0.851199 35.5946 1.89207V25.1062Z"
                                className='fill-foreground' />
                            <path
                                d="M17.7913 11.3377C10.2245 9.41164 3.843 9.60151 3.27012 11.8629C2.97993 13.0253 4.26087 14.5177 6.57625 16.0202C6.40555 15.4493 6.37619 14.8933 6.50661 14.366C7.18463 11.6839 11.87 10.5645 17.7913 11.3377Z"
                                className='fill-background' />
                            <path
                                d="M30.6344 12.3222C29.0182 10.5779 25.3154 8.55484 20.7515 7.13628C14.2615 5.11668 8.42285 5.07775 7.89641 6.99012C7.75029 7.51602 8.01999 8.1471 8.62018 8.82462C10.0199 6.89996 15.2099 6.15482 20.602 7.82814C22.2885 8.31238 26.7773 10.2801 28.3573 12.538C29.1172 13.6315 29.2435 15.0309 27.8957 15.5439C28.5512 15.5452 29.9919 15.5302 30.8618 15.0945C32.1782 14.4292 31.3384 13.0817 30.6344 12.3222Z"
                                className='fill-background' />
                            <path
                                d="M27.7546 9.41186C29.2957 9.24043 30.3008 8.80264 30.4169 8.12579C30.6142 7.00569 28.4224 5.44301 25.1115 4.43219C23.7746 4.07499 22.2642 3.81955 20.661 3.70891C19.2906 3.61807 17.9721 3.63241 16.7588 3.74989C18.25 3.73076 19.5863 3.87624 20.885 4.08933C22.5694 4.35843 26.3638 5.4717 27.799 7.11634C28.4347 7.84509 28.6812 8.85659 27.7546 9.41186Z"
                                className='fill-background' />
                            <path
                                d="M8.37023 21.6717L8.36613 19.8541L7.55633 21.3576H7.35285L6.54168 19.8787V21.6717H6.10742V18.9316H6.48569L7.46074 20.7445L8.42758 18.9316H8.80108L8.80859 21.6717H8.37023Z"
                                className='fill-background' />
                            <path
                                d="M11.3487 21.245V21.6717H9.49902V18.9316H11.2989V19.357H9.9565V20.0706H11.1487V20.4891H9.9565V21.245H11.3487Z"
                                className='fill-background' />
                            <path d="M13.535 19.3611H12.3114L12.3162 21.6717H11.8662V18.9316H13.5391L13.535 19.3611Z" fill="white"
                                className='fill-background' />
                            <path
                                d="M14.9293 20.638L14.4643 19.4403L14.0034 20.638H14.9293ZM15.0815 21.0374H13.8491L13.6053 21.6724H13.1328L14.2437 18.9316H14.6937L15.808 21.6724H15.328L15.0815 21.0374Z"
                                className='fill-background' />
                            <path
                                d="M16.6092 21.5301C16.4105 21.4079 16.2535 21.2393 16.1374 21.0262C16.0241 20.8132 15.9688 20.5708 15.9688 20.3025C15.9688 20.0328 16.0241 19.7917 16.1395 19.5773C16.2542 19.3636 16.4119 19.195 16.6133 19.0741C16.8147 18.9532 17.0401 18.8911 17.2886 18.8911C17.49 18.8911 17.6764 18.9321 17.8417 19.0106C18.009 19.0884 18.1496 19.2011 18.2643 19.35L17.9687 19.6599C17.7898 19.4449 17.5706 19.3397 17.3084 19.3397C17.1391 19.3397 16.9882 19.3814 16.855 19.4613C16.7219 19.5439 16.6174 19.6586 16.5423 19.8047C16.4665 19.9508 16.4283 20.1167 16.4283 20.3025C16.4283 20.4875 16.4665 20.6527 16.5423 20.7982C16.6174 20.945 16.7219 21.0611 16.855 21.1416C16.9882 21.2242 17.1391 21.2652 17.3084 21.2652C17.5706 21.2652 17.7898 21.156 17.9687 20.9409L18.2643 21.2529C18.1496 21.4018 18.009 21.5158 17.8403 21.5943C17.673 21.6722 17.4859 21.7125 17.2845 21.7125C17.036 21.7125 16.8106 21.6496 16.6092 21.5301Z"
                                className='fill-background' />
                            <path d="M20.8738 18.9316V21.6717H20.4239V19.3611H19.1443V21.6717H18.6943V18.9316H20.8738Z" fill="white"
                                className='fill-background' />
                            <path
                                d="M23.1554 21.1416C23.2858 21.0611 23.3916 20.9443 23.466 20.7961C23.5398 20.65 23.5794 20.4841 23.5794 20.3025C23.5794 20.1181 23.5398 19.9542 23.466 19.8068C23.3916 19.6586 23.2858 19.5439 23.1554 19.4613C23.0236 19.3807 22.8761 19.3397 22.7122 19.3397C22.5456 19.3397 22.3975 19.3807 22.267 19.4613C22.1373 19.5439 22.0315 19.6586 21.957 19.8068C21.8833 19.9542 21.8437 20.1181 21.8437 20.3025C21.8437 20.4841 21.8833 20.65 21.957 20.7961C22.0315 20.9443 22.1373 21.0611 22.267 21.1416C22.3975 21.2242 22.5456 21.2652 22.7122 21.2652C22.8761 21.2652 23.0236 21.2242 23.1554 21.1416ZM22.0315 21.5301C21.8287 21.4079 21.6696 21.2386 21.5556 21.0235C21.4388 20.8084 21.3828 20.5667 21.3828 20.3025C21.3828 20.0362 21.4388 19.7938 21.5556 19.5794C21.6696 19.3643 21.8287 19.1943 22.0315 19.0741C22.2329 18.9532 22.4589 18.8911 22.7122 18.8911C22.9615 18.8911 23.1895 18.9532 23.3916 19.0741C23.5937 19.1943 23.7515 19.3636 23.8689 19.5766C23.9822 19.791 24.0403 20.0328 24.0403 20.3025C24.0403 20.5708 23.9822 20.8132 23.8689 21.0262C23.7515 21.2393 23.5937 21.4079 23.3916 21.5301C23.1895 21.6496 22.9615 21.7118 22.7122 21.7118C22.4589 21.7118 22.2329 21.6496 22.0315 21.5301Z"
                                className='fill-background' />
                            <path
                                d="M25.9971 20.3095C26.0995 20.2153 26.1527 20.0815 26.1527 19.9053C26.1527 19.7305 26.0995 19.5981 25.9971 19.5025C25.8939 19.4089 25.7424 19.3618 25.5423 19.3618H25.007V20.4516H25.5423C25.7424 20.4516 25.8939 20.4044 25.9971 20.3095ZM26.1213 19.0491C26.2797 19.1269 26.402 19.2389 26.4859 19.385C26.572 19.5318 26.6129 19.7053 26.6129 19.9053C26.6129 20.104 26.572 20.2774 26.4859 20.4249C26.402 20.5731 26.2797 20.6858 26.1213 20.7629C25.9622 20.8414 25.7772 20.881 25.5628 20.881H25.007V21.6724H24.5488V18.9316H25.5628C25.7772 18.9316 25.9622 18.9712 26.1213 19.0491Z"
                                className='fill-background' />
                            <path d="M28.768 19.3611H27.9493V21.6717H27.4946V19.3611H26.6807V18.9316H28.768V19.3611Z" fill="white"
                                className='fill-background' />
                            <path
                                d="M7.24871 22.6514V24.0224H7.12308V22.9252L6.63897 23.849H6.5782L6.09204 22.9313V24.0224H5.96777V22.6514H6.07497L6.60961 23.6687L7.14151 22.6514H7.24871Z"
                                className='fill-background' />
                            <path
                                d="M8.47121 23.833C8.54905 23.7831 8.61118 23.7149 8.65625 23.6282C8.69995 23.5414 8.72248 23.4445 8.72248 23.3373C8.72248 23.2301 8.69995 23.1331 8.65625 23.0478C8.61118 22.9604 8.54905 22.8914 8.47121 22.8429C8.392 22.7945 8.30324 22.7699 8.20696 22.7699C8.10864 22.7699 8.02124 22.7945 7.94204 22.8429C7.86078 22.8914 7.79933 22.9604 7.75358 23.0478C7.7092 23.1331 7.68598 23.2301 7.68598 23.3373C7.68598 23.4445 7.7092 23.5414 7.75358 23.6282C7.79933 23.7149 7.86078 23.7831 7.94204 23.833C8.02124 23.8801 8.10864 23.9054 8.20696 23.9054C8.30324 23.9054 8.392 23.8801 8.47121 23.833ZM7.87512 23.9443C7.77475 23.8822 7.69827 23.7995 7.64092 23.693C7.5863 23.5892 7.55762 23.4691 7.55762 23.3373C7.55762 23.2062 7.5863 23.0867 7.64092 22.9815C7.69827 22.875 7.77475 22.7924 7.87512 22.7316C7.97344 22.6709 8.08406 22.6401 8.20696 22.6401C8.32918 22.6401 8.4398 22.6709 8.53676 22.7289C8.6344 22.7904 8.71224 22.8743 8.76891 22.9815C8.8249 23.0867 8.85358 23.2062 8.85358 23.3373C8.85358 23.4691 8.8249 23.5892 8.76891 23.6944C8.71224 23.8023 8.6344 23.8842 8.53676 23.9443C8.4398 24.0037 8.32918 24.0344 8.20696 24.0344C8.08406 24.0344 7.97344 24.0037 7.87512 23.9443Z"
                                className='fill-background' />
                            <path
                                d="M9.37298 23.9443C9.27397 23.8842 9.19954 23.8023 9.14219 23.6944C9.08688 23.5886 9.05957 23.4691 9.05957 23.3373C9.05957 23.2055 9.08688 23.0867 9.14219 22.9815C9.19954 22.8743 9.2767 22.7904 9.37298 22.7289C9.47267 22.6709 9.58465 22.6401 9.70618 22.6401C9.79768 22.6401 9.88166 22.6572 9.95882 22.692C10.0367 22.7248 10.1029 22.7747 10.1568 22.8395L10.0742 22.9317C9.97726 22.8245 9.8564 22.7699 9.70892 22.7699C9.61127 22.7699 9.52456 22.7951 9.44399 22.845C9.36342 22.8948 9.3006 22.9617 9.25758 23.0478C9.21115 23.1338 9.18794 23.2301 9.18794 23.3373C9.18794 23.4445 9.21115 23.5414 9.25758 23.6282C9.3006 23.7142 9.36342 23.7811 9.44399 23.8309C9.52456 23.8801 9.61127 23.9054 9.70892 23.9054C9.85708 23.9054 9.97931 23.8507 10.0742 23.7408L10.1568 23.8337C10.1029 23.8992 10.0367 23.9484 9.95814 23.9839C9.88098 24.0174 9.79495 24.0344 9.70345 24.0344C9.5826 24.0344 9.47267 24.0037 9.37298 23.9443Z"
                                className='fill-background' />
                            <path
                                d="M10.8341 23.3943H10.5535V24.0224H10.4258V22.6514H10.5535V23.2666H10.8341L11.254 22.6514H11.3947L10.9358 23.3178L11.4213 24.0224H11.2704L10.8341 23.3943Z"
                                className='fill-background' />
                            <path
                                d="M12.4859 23.6421C12.4859 23.47 12.3808 23.384 12.167 23.384H11.7492V23.907H12.167C12.3808 23.907 12.4859 23.8183 12.4859 23.6421ZM11.7492 23.2727H12.1281C12.221 23.2727 12.2947 23.2515 12.3466 23.2072C12.3965 23.1648 12.4231 23.102 12.4231 23.0208C12.4231 22.9381 12.3965 22.8746 12.3466 22.8323C12.2947 22.7886 12.221 22.7681 12.1281 22.7681H11.7492V23.2727ZM12.5474 23.4304C12.5924 23.4871 12.6143 23.5622 12.6143 23.6517C12.6143 23.7712 12.5767 23.864 12.5016 23.9275C12.4251 23.991 12.3138 24.0224 12.167 24.0224H11.6201V22.6514H12.1343C12.2647 22.6514 12.3678 22.6814 12.4429 22.7415C12.5166 22.8023 12.5528 22.8883 12.5528 23.0016C12.5528 23.0795 12.5344 23.1443 12.5002 23.1983C12.4647 23.2495 12.4149 23.2891 12.3534 23.3151C12.4388 23.3349 12.5023 23.3738 12.5474 23.4304Z"
                                className='fill-background' />
                            <path
                                d="M13.6829 23.5388L13.3866 22.8021L13.0923 23.5388H13.6829ZM13.7328 23.6569H13.0445L12.8963 24.0222H12.7598L13.3238 22.6519H13.4528L14.0175 24.0222H13.8789L13.7328 23.6569Z"
                                className='fill-background' />
                            <path
                                d="M55.8804 14.8002L55.8647 6.23413L52.0438 13.3256H51.0817L47.26 6.34614V14.8002H45.2178V1.87939H46.9951L51.5952 10.4263L56.1467 1.87939H57.9083L57.9411 14.8002H55.8804Z"
                                className='fill-foreground' />
                            <path
                                d="M69.9164 12.7888V14.8002H61.1963V1.87939H69.6822V3.8908H63.3539V7.24974H68.9679V9.22562H63.3539V12.7888H69.9164Z"
                                className='fill-foreground' />
                            <path d="M80.2127 3.9106H74.4492L74.4663 14.8002H72.3394V1.87939H80.2291L80.2127 3.9106Z" fill="#1E1E25"
                                className='fill-foreground' />
                            <path
                                d="M86.789 9.92842L84.5959 4.27873L82.4218 9.92842H86.789ZM87.5039 11.8107H81.6898L80.5441 14.8002H78.3188L83.5491 1.87939H85.6754L90.9261 14.8002H88.6667L87.5039 11.8107Z"
                                className='fill-foreground' />
                            <path
                                d="M94.7043 14.1286C93.7572 13.5536 93.015 12.7647 92.479 11.7553C91.9437 10.7472 91.6733 9.60862 91.6733 8.33894C91.6733 7.07405 91.9437 5.93482 92.4866 4.92673C93.0301 3.91522 93.773 3.125 94.7221 2.55334C95.6684 1.981 96.7274 1.69482 97.9032 1.69482C98.8557 1.69482 99.7222 1.87991 100.511 2.25009C101.295 2.61754 101.959 3.15301 102.503 3.85512L101.108 5.31193C100.266 4.30248 99.232 3.79843 98.0016 3.79843C97.2068 3.79843 96.4912 3.99445 95.8589 4.38102C95.2294 4.76759 94.735 5.3051 94.3813 5.99492C94.0263 6.68542 93.8481 7.46676 93.8481 8.33894C93.8481 9.2159 94.0263 9.99451 94.3813 10.6843C94.735 11.3735 95.2294 11.9117 95.8589 12.2975C96.4912 12.6875 97.2068 12.8822 98.0016 12.8822C99.232 12.8822 100.266 12.372 101.108 11.3502L102.503 12.8262C101.959 13.5297 101.293 14.0631 100.5 14.4326C99.7086 14.8007 98.8387 14.9858 97.8841 14.9858C96.7111 14.9858 95.652 14.6989 94.7043 14.1286Z"
                                className='fill-foreground' />
                            <path d="M114.813 1.87939V14.8002H112.686V3.9106H106.659V14.8002H104.532V1.87939H114.813Z" fill="#1E1E25"
                                className='fill-foreground' />
                            <path
                                d="M125.558 12.2975C126.178 11.9123 126.664 11.3721 127.019 10.6748C127.374 9.98016 127.551 9.20224 127.551 8.33894C127.551 7.47701 127.374 6.70045 127.019 6.00585C126.664 5.31057 126.178 4.76759 125.558 4.38102C124.937 3.99445 124.239 3.79843 123.465 3.79843C122.689 3.79843 121.993 3.99445 121.371 4.38102C120.751 4.76759 120.264 5.31057 119.911 6.00585C119.554 6.70045 119.379 7.47701 119.379 8.33894C119.379 9.20224 119.554 9.98016 119.911 10.6748C120.264 11.3721 120.751 11.9123 121.371 12.2975C121.993 12.6875 122.689 12.8822 123.465 12.8822C124.239 12.8822 124.937 12.6875 125.558 12.2975ZM120.258 14.1286C119.308 13.5536 118.558 12.762 118.018 11.7477C117.474 10.7328 117.204 9.59359 117.204 8.33894C117.204 7.08566 117.474 5.94985 118.018 4.93288C118.558 3.91795 119.308 3.125 120.258 2.55334C121.211 1.981 122.281 1.69482 123.465 1.69482C124.649 1.69482 125.719 1.981 126.67 2.55334C127.622 3.125 128.37 3.9159 128.912 4.92673C129.456 5.9355 129.726 7.07405 129.726 8.33894C129.726 9.60862 129.456 10.7472 128.912 11.7559C128.37 12.7647 127.622 13.5536 126.67 14.1286C125.719 14.6996 124.649 14.9858 123.465 14.9858C122.281 14.9858 121.211 14.6996 120.258 14.1286Z"
                                className='fill-foreground' />
                            <path
                                d="M138.944 8.37598C139.431 7.93409 139.676 7.29891 139.676 6.47454C139.676 5.65223 139.431 5.01568 138.944 4.57379C138.456 4.13257 137.744 3.9106 136.801 3.9106H134.278V9.0419H136.801C137.744 9.0419 138.456 8.82061 138.944 8.37598ZM139.535 2.43262C140.282 2.80348 140.855 3.33143 141.252 4.0192C141.653 4.70902 141.851 5.52792 141.851 6.47454C141.851 7.40956 141.653 8.22709 141.252 8.92101C140.855 9.61629 140.282 10.1483 139.535 10.5199C138.787 10.8873 137.909 11.0738 136.901 11.0738H134.278V14.8002H132.117V1.87939H136.901C137.909 1.87939 138.787 2.06244 139.535 2.43262Z"
                                className='fill-foreground' />
                            <path d="M151.999 3.9106H148.146V14.8002H146.004V3.9106H142.167V1.87939H151.999V3.9106Z" fill="#1E1E25"
                                className='fill-foreground' />
                            <path
                                d="M50.5888 19.417V25.8781H50.0002V20.7078L47.7149 25.0564H47.4261L45.1414 20.7365V25.8781H44.5508V19.417H45.0574L47.5831 24.2068L50.0835 19.417H50.5888Z"
                                className='fill-foreground' />
                            <path
                                d="M56.3463 24.9773C56.717 24.7472 57.0079 24.4262 57.2203 24.0178C57.4285 23.6093 57.5344 23.1517 57.5344 22.647C57.5344 22.1429 57.4285 21.686 57.2203 21.2762C57.0079 20.8692 56.717 20.5482 56.3463 20.318C55.9742 20.0851 55.5611 19.9697 55.1002 19.9697C54.6413 19.9697 54.2241 20.0851 53.8527 20.318C53.4758 20.5482 53.1822 20.8692 52.9705 21.2762C52.7568 21.686 52.6489 22.1429 52.6489 22.647C52.6489 23.1517 52.7568 23.6093 52.9705 24.0178C53.1822 24.4262 53.4758 24.7472 53.8527 24.9773C54.2241 25.2075 54.6413 25.3236 55.1002 25.3236C55.5611 25.3236 55.9742 25.2075 56.3463 24.9773ZM53.5359 25.5033C53.0668 25.2184 52.7008 24.8244 52.4386 24.3285C52.1764 23.8292 52.0439 23.2671 52.0439 22.647C52.0439 22.0262 52.1764 21.4641 52.4386 20.9668C52.7008 20.4703 53.0668 20.0776 53.5359 19.7921C54.0022 19.5039 54.5232 19.3618 55.1002 19.3618C55.6765 19.3618 56.1947 19.5039 56.6583 19.7873C57.1192 20.068 57.4825 20.4607 57.7488 20.96C58.0151 21.4641 58.1482 22.0262 58.1482 22.647C58.1482 23.2671 58.0151 23.8292 57.7488 24.334C57.4825 24.8312 57.1192 25.2239 56.6583 25.5108C56.1947 25.7908 55.6765 25.9349 55.1002 25.9349C54.5232 25.9349 54.0022 25.7908 53.5359 25.5033Z"
                                className='fill-foreground' />
                            <path
                                d="M60.6026 25.5111C60.1396 25.2249 59.7778 24.8315 59.5121 24.3343C59.2513 23.8295 59.1182 23.2674 59.1182 22.6473C59.1182 22.0264 59.2513 21.465 59.5121 20.9603C59.7778 20.461 60.141 20.0683 60.606 19.7876C61.0717 19.5049 61.5906 19.3628 62.1682 19.3628C62.5984 19.3628 62.9978 19.4413 63.3631 19.6005C63.7278 19.7617 64.0378 19.9973 64.2924 20.3033L63.9026 20.737C63.4478 20.2268 62.8736 19.9707 62.1839 19.9707C61.7244 19.9707 61.3059 20.0881 60.929 20.3231C60.5527 20.5553 60.2591 20.8756 60.0468 21.282C59.8317 21.6904 59.7259 22.1432 59.7259 22.6473C59.7259 23.152 59.8317 23.6062 60.0468 24.0119C60.2591 24.421 60.5527 24.7427 60.929 24.9701C61.3059 25.2085 61.7244 25.3239 62.1839 25.3239C62.8811 25.3239 63.4546 25.0678 63.9026 24.5467L64.2924 24.9831C64.0378 25.2898 63.7271 25.5288 63.3584 25.6893C62.9903 25.8519 62.5902 25.9359 62.158 25.9359C61.5831 25.9359 61.0628 25.7911 60.6026 25.5111Z"
                                className='fill-foreground' />
                            <path
                                d="M67.4899 22.9166H66.1611V25.8781H65.563V19.417H66.1611V22.3142H67.4899L69.4577 19.417H70.1214L67.9624 22.5553L70.2463 25.8781H69.5396L67.4899 22.9166Z"
                                className='fill-foreground' />
                            <path
                                d="M75.2713 24.0873C75.2713 23.2745 74.7695 22.8675 73.7665 22.8675H71.7986V25.331H73.7665C74.7695 25.331 75.2713 24.9192 75.2713 24.0873ZM71.7986 22.3422H73.5787C74.0252 22.3422 74.37 22.2391 74.6104 22.0397C74.8542 21.8361 74.9723 21.5404 74.9723 21.1497C74.9723 20.7652 74.8542 20.4702 74.6104 20.2666C74.37 20.0651 74.0252 19.9613 73.5787 19.9613H71.7986V22.3422ZM75.5602 23.0833C75.7712 23.3531 75.8784 23.7027 75.8784 24.1323C75.8784 24.6938 75.7001 25.1268 75.3417 25.4225C74.9832 25.7271 74.4595 25.8781 73.7665 25.8781H71.1943V19.417H73.6115C74.2321 19.417 74.7155 19.5597 75.061 19.8404C75.4127 20.1218 75.5875 20.5316 75.5875 21.0691C75.5875 21.4311 75.5035 21.7392 75.3376 21.9884C75.171 22.2371 74.9402 22.4228 74.6411 22.543C75.0453 22.6352 75.3512 22.8196 75.5602 23.0833Z"
                                className='fill-foreground' />
                            <path
                                d="M80.9115 23.5996L79.5158 20.1293L78.1195 23.5996H80.9115ZM81.1334 24.1515H77.8955L77.1977 25.8788H76.5586L79.2154 19.417H79.8238L82.4812 25.8788H81.8326L81.1334 24.1515Z"
                                className='fill-foreground' />
                        </g>
                    </svg>
                </div>
                <div className="main_head_and_btn positioning__main-atributes grid rowgap">
                    <h1 className='banner__wrapper__headline text-hl1_fs font-medium overflow-hidden'>
                        Автовыходные <br />
                        на Гребном канале</h1>
                    <Link href={'#tickets'} className='banner__wrapper__buy-ticket btn_buy_ticket bg-blue stroke-[#ffffff] text-[#fff] hover:text-[#000] hover:bg-green hover:stroke-[#000]' role='button'>
                        <span className='button_fs font-medium'>
                            Купить билет
                        </span>
                        <span>
                            <svg width="28" height="15" viewBox="0 0 28 15" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 7.5H26M26 7.5L20 1.5M26 7.5L20 13.5" strokeWidth="2" />
                            </svg>
                        </span>
                    </Link>
                </div>
                <div className='video__component w-full positioning__main-atributes'>
                    <VideoComponent />
                </div>

                <p className='lower-headings-first text-hl2_fs font-medium text-nowrap overflow-hidden'>
                    Выходные <br />
                    в атмосфере <br />
                    драйва и веселья
                </p>

                <p className='lower-headings-last text-large_fs font-normal large_fs'>
                    Идеология выставки объединяет
                    многочисленные ветви автомобильной
                    культуры и технических видов спорта
                    в России на одной площадке.
                </p>
            </div>
        </section>
    )
}

export default Banner
