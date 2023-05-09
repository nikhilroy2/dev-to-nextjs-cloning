import React from 'react';
import './css/Header.css';
import Image from 'next/image';
function Header(props) {
    return (
        <header id='Header'>
            <div className="section_container">
                <div className="header_wrapper">
                    <div className="flex_row">
                        <div className="flex_col">
                            <a href="#" className='logo_link'>
                                <Image priority={true} height={40} width={50} src="/images/logo.png" alt='logo'></Image>
                            </a>

                            <div className="form_group">
                                <input type="text" placeholder='Search...' className="form_search" />
                                <button className="form_search_btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className="crayons-icon c-btn__icon" focusable="false">
                                        <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex_col">
                            <ul className="user_menu_list">
                                <li>
                                    <a href="#" className="btn_post">
                                        Create Post
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className='btn_notify'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" role="img" aria-labelledby="aig6f2s1vsyqtrnpm9nr3q2wdyai4q9s" className="crayons-icon"><title id="aig6f2s1vsyqtrnpm9nr3q2wdyai4q9s">Notifications</title>
                                            <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <button className="btn_profile">
                                        <Image height={32} width={32} src="/images/user.webp" alt='user'></Image>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;