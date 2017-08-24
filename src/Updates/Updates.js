/* eslint react/no-danger: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import dateFns from 'date-fns';

import styles from './Updates.module.scss';

const Updates = ({
  extraClass,
  moreLink,
  style,
  title,
  updates,
  accent,
  accentText,
}) =>
  (<div
    className={`${style === 'card' ? 'card' : ''} ${styles.Updates} ${styles[
      extraClass
    ]}`}
  >
    <div className={styles.badgeContainer}>
      <span
        className={`badge ${styles.badge}`}
        dangerouslySetInnerHTML={{ __html: title }}
        style={{ color: accentText, backgroundColor: accent }}
      />
    </div>
    {(updates || []).map((update) =>
      (<div key={update.id} className={styles.update}>
        <a
          href={update.link}
          dangerouslySetInnerHTML={{ __html: update.title.rendered }}
        />
        <div className={styles.updateDate}>
          {dateFns.format(update.date, 'MMMM DD, YYYY')}
        </div>
        <div
          className={`${styles.excerpt} pt-2`}
          dangerouslySetInnerHTML={{
            __html: `${update.excerpt.rendered
              .split(' ')
              .slice(0, 30)
              .join(' ')
              .replace(
                '&#8230;',
                ''
              )} ... <a class="continue-link" href=${update.link}>Continue reading</a>`,
          }}
        />
      </div>)
    )}
    {moreLink
      ? <a className={styles.moreLink} href={moreLink}>
          More
      </a>
      : null}
  </div>);

Updates.propTypes = {
  accent: PropTypes.string,
  accentText: PropTypes.string,
  extraClass: PropTypes.string,
  moreLink: PropTypes.string,
  style: PropTypes.string,
  title: PropTypes.string,
  updates: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Updates.defaultProps = {
  accent: null,
  accentText: null,
  extraClass: '',
  moreLink: null,
  style: null,
  title: 'Updates',
};

export default Updates;
