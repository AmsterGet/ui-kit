import { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import { Tooltip } from '@components/tooltip';
import { ChangePage } from '../../../types';
import styles from './bar.module.scss';

const cx = classNames.bind(styles);

export interface BarProps {
  totalPages: number;
  activePage: number;
  changePage: ChangePage;
  captions: {
    goTo: string;
  };
}

const MIN_SELECTOR_WIDTH = 13;
const BAR_WIDTH = 260;

export const Bar: FC<BarProps> = ({
  totalPages,
  activePage,
  changePage,
  captions,
}): ReactElement => {
  const pixelsPerPage = BAR_WIDTH / totalPages;
  const sectionsCount = Math.min(Math.ceil(BAR_WIDTH / MIN_SELECTOR_WIDTH), totalPages);
  const selectorWidth = Math.max(MIN_SELECTOR_WIDTH, pixelsPerPage);

  const sections = [];
  for (let i = 1; i <= totalPages; i++) {
    sections.push({
      end: i * pixelsPerPage,
      page: i,
    });
  }

  const mergedSections: Array<{ pages: Array<number> }> = Array.from(
    { length: sectionsCount },
    () => ({ pages: [] }),
  );
  sections.forEach((section) => {
    const index = Math.ceil(section.end / selectorWidth) - 1;
    mergedSections[index].pages.push(section.page);
  });

  return (
    <div className={cx('bar')}>
      {mergedSections.map((section, index) => (
        <div
          className={cx('section-with-tooltip')}
          style={{ width: selectorWidth }}
          onClick={() => changePage(section.pages[0])}
        >
          <Tooltip
            content={
              <div className={cx('tooltip')}>
                <div className={cx('tooltip-text')}>{captions.goTo}</div>
                <div className={cx('page-number')}>{section.pages[0]}</div>
              </div>
            }
            className={cx('tooltip-wrapper')}
            placement={'top'}
          >
            <div
              key={index}
              className={cx('section', { selected: section.pages.includes(activePage) })}
            />
          </Tooltip>
        </div>
      ))}
    </div>
  );
};
