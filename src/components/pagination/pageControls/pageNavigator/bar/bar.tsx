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

const MIN_SECTION_WIDTH = 13;
const BAR_WIDTH = 260;

export const Bar: FC<BarProps> = ({
  totalPages,
  activePage,
  changePage,
  captions,
}): ReactElement => {
  const pixelsPerPage = BAR_WIDTH / totalPages;
  const sectionsCount = Math.min(Math.ceil(BAR_WIDTH / MIN_SECTION_WIDTH), totalPages);
  const sectionWidth = Math.max(MIN_SECTION_WIDTH, pixelsPerPage);

  const pages: Array<{ end: number; pageNumber: number }> = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push({
      end: i * pixelsPerPage,
      pageNumber: i,
    });
  }

  const sections: Array<{ pages: { from: number | undefined; to: number | undefined } }> =
    Array.from({ length: sectionsCount }, () => ({ pages: { from: undefined, to: undefined } }));

  sections.forEach((section, index) => {
    section.pages.from = pages[0].pageNumber;

    while (sectionWidth * (index + 1) > pages[0].end) {
      pages.shift();
    }

    section.pages.to = pages[0].pageNumber;
    pages.shift();
  });

  return (
    <div className={cx('bar')}>
      {sections.map((section, index) => (
        <div
          key={index}
          className={cx('section-with-tooltip')}
          style={{ width: sectionWidth }}
          onClick={() => section.pages.from && changePage(section.pages.from)}
        >
          <Tooltip
            content={
              <div className={cx('tooltip')}>
                <div className={cx('tooltip-text')}>{captions.goTo}</div>
                <div className={cx('page-number')}>{section.pages.from}</div>
              </div>
            }
            wrapperClassName={cx('tooltip-wrapper')}
            placement={'top'}
          >
            <div
              className={cx('section', {
                selected:
                  section.pages.from &&
                  section.pages.to &&
                  section.pages.from <= activePage &&
                  activePage <= section.pages.to,
              })}
            />
          </Tooltip>
        </div>
      ))}
    </div>
  );
};
