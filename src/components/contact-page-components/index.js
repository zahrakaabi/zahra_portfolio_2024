/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages

// Styles
import styles from './index.module.scss';

/* -------------------------------------------------------------------------- */
/*                             CONTACT COMPOENENT                             */
/* -------------------------------------------------------------------------- */
function Contact() {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <section id="contact" className={styles.contactWrapper}>
        <div className={`${styles.contactContainer} container`}>
            <h1>
                <span>Let&apos;s start a</span>
                <span>project together</span>
            </h1>

            <div className={`${styles.arrow} flex items-end justify-end`}>
                <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1">
                    <title>arrow-up-right</title>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Artboard" transform="translate(-1019.000000, -279.000000)" stroke="#FFFFFF" stroke-width="1.5">
                            <g id="arrow-up-right" transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)">
                                <polyline id="Path" points="2.76923077 0 12 0 12 9.23076923"></polyline>
                                <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>

            <div className='flex'>
                <div className={styles.form}>
                    <form id='email-form' className='flex flex-column' name='email-form' data-name='Email Form' aria-label='Email Form'>
                        <div className={styles.fieldWrapper}>
                            <label for='Name' className={styles.fielLabel}>Name</label>
                            <input 
                                className={styles.contactField} 
                                id='Name'
                                name='Name' 
                                data-name='Name' 
                                placeholder='ex: Zahra Kaabi'
                                type='text'
                                maxLength={256} 
                            />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label for='Email' className={styles.fielLabel}>E-mail</label>
                            <input 
                                className={styles.contactField} 
                                id='Email'
                                name='Email' 
                                data-name='Email' 
                                placeholder='ex: kaabizahra@gmail.com'
                                type='email'
                                maxLength={256} 
                            />
                        </div>
                        <div className={styles.fieldWrapper}>
                            <label for='Message' className={styles.fielLabel}>Message</label>
                            <textarea
                                className={styles.contactField} 
                                id='field'
                                name='field'
                                data-name='field'
                                placeholder='ex: Hello zahra, can you help me with...'
                                maxLength={5000} 
                            />
                        </div>
                    </form>
                </div>
                <div className={styles.contacts}>
                    <h5>Contact Details</h5>
                    <ul>
                        <li className='flex items-center'>kaabizahra@gmail.com</li>
                    </ul>
                    <h5>Socials</h5>
                    <ul>
                        <li className='flex items-center'>
                            <a className={styles.socialLinkClick} href='' target='_blank'>Dribble</a>
                        </li>
                        <li className='flex items-center'>
                            <a className={styles.socialLinkClick} href='' target='_blank'>Medium</a>
                        </li>
                        <li className='flex items-center'>
                            <a className={styles.socialLinkClick} href='' target='_blank'>Github 1</a>
                        </li>
                        <li className='flex items-center'>
                            <a className={styles.socialLinkClick} href='' target='_blank'>Github 2</a>
                        </li>
                        <li className='flex items-center'>
                            <a className={styles.socialLinkClick} href='' target='_blank'>LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
};

export default Contact;