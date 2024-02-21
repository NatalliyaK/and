import { FC } from 'react'

export type Prop = {
    onClick: () => void
}

export const EyeOpen: FC<Prop> = ({onClick}) => {
    return (
        <div onClick={onClick}>
            <svg fill="#000000" width="80px" height="80px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9998 20.6667C21.0832 20.6667 22.854 19.9375 24.3123 18.4792C25.7707 17.0209 26.4998 15.25 26.4998 13.1667C26.4998 11.0834 25.7707 9.31252 24.3123 7.85419C22.854 6.39585 21.0832 5.66669 18.9998 5.66669C16.9165 5.66669 15.1457 6.39585 13.6873 7.85419C12.229 9.31252 11.4998 11.0834 11.4998 13.1667C11.4998 15.25 12.229 17.0209 13.6873 18.4792C15.1457 19.9375 16.9165 20.6667 18.9998 20.6667ZM18.9998 17.6667C17.7498 17.6667 16.6873 17.2292 15.8123 16.3542C14.9373 15.4792 14.4998 14.4167 14.4998 13.1667C14.4998 11.9167 14.9373 10.8542 15.8123 9.97919C16.6873 9.10419 17.7498 8.66669 18.9998 8.66669C20.2498 8.66669 21.3123 9.10419 22.1873 9.97919C23.0623 10.8542 23.4998 11.9167 23.4998 13.1667C23.4998 14.4167 23.0623 15.4792 22.1873 16.3542C21.3123 17.2292 20.2498 17.6667 18.9998 17.6667ZM18.9998 25.6667C14.9443 25.6667 11.2498 24.5347 7.9165 22.2709C4.58317 20.007 2.1665 16.9722 0.666504 13.1667C2.1665 9.36113 4.58317 6.32641 7.9165 4.06252C11.2498 1.79863 14.9443 0.666687 18.9998 0.666687C23.0554 0.666687 26.7498 1.79863 30.0832 4.06252C33.4165 6.32641 35.8332 9.36113 37.3332 13.1667C35.8332 16.9722 33.4165 20.007 30.0832 22.2709C26.7498 24.5347 23.0554 25.6667 18.9998 25.6667ZM18.9998 22.3334C22.1387 22.3334 25.0207 21.507 27.6457 19.8542C30.2707 18.2014 32.2776 15.9722 33.6665 13.1667C32.2776 10.3611 30.2707 8.13196 27.6457 6.47919C25.0207 4.82641 22.1387 4.00002 18.9998 4.00002C15.8609 4.00002 12.979 4.82641 10.354 6.47919C7.729 8.13196 5.72206 10.3611 4.33317 13.1667C5.72206 15.9722 7.729 18.2014 10.354 19.8542C12.979 21.507 15.8609 22.3334 18.9998 22.3334Z" fill="#3E2235"/>
            </svg>
        </div>
    );
};
