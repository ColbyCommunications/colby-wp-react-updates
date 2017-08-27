/* eslint react/no-danger: 0 */
import PropTypes from 'prop-types';
import React from 'react';
import dateFns from 'date-fns';

import styles from './Updates.module.scss';

const Updates = ({ moreLink, style, title, updates }) =>
  (<div className={`${style === 'card' ? 'card' : ''} ${styles.Updates}`}>
    <div className={styles.badgeContainer}>
      <span className={`badge ${styles.badge}`} dangerouslySetInnerHTML={{ __html: title }} />
    </div>
    {(updates || []).map(update =>
      (<div key={update.id} className={styles.update}>
        <h4>
          <a href={update.link} dangerouslySetInnerHTML={{ __html: update.title.rendered }} />
        </h4>
        <div className={styles.updateDate}>
          {dateFns.format(update.date, 'MMMM DD, YYYY')}
        </div>
        <div
          className={`${styles.excerpt} pt-2`}
          dangerouslySetInnerHTML={{
            __html: `${update.excerpt.rendered
              .replace('</p>', '')
              .split(' ')
              .slice(0, 30)
              .join(' ')
              .replace('&#8230;', '')} ... <a class="continue-link display-3" href=${update.link}>
                Continue reading
              </a>`,
          }}
        />
      </div>),
    )}
    {moreLink
      ? <a className={styles.moreLink} href={moreLink}>
          More
      </a>
      : null}
  </div>);

Updates.propTypes = {
  moreLink: PropTypes.string,
  style: PropTypes.string,
  title: PropTypes.string,
  updates: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Updates.defaultProps = {
  moreLink: null,
  style: null,
  title: 'Updates',
};

export default Updates;
