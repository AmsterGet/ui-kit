import { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import { Tooltip } from '@/components';
import styles from './bar.module.scss';

const cx = classNames.bind(styles);

export interface BarProps {
  totalPagesCount: number;
  selectedPageNumber: number;
  setSelectedPageNumber: (pageNumber: number) => void;
  captions: {
    goTo: string;
  };
}

const MIN_SELECTOR_WIDTH = 13;
const BAR_WIDTH = 260;

export const Bar: FC<BarProps> = ({
  totalPagesCount,
  selectedPageNumber,
  setSelectedPageNumber,
  captions,
}): ReactElement => {
  const pixelsPerPage = BAR_WIDTH / totalPagesCount;
  const sectionsCount = Math.min(Math.ceil(BAR_WIDTH / MIN_SELECTOR_WIDTH), totalPagesCount);
  const selectorWidth = Math.max(MIN_SELECTOR_WIDTH, pixelsPerPage);

  const sections = [];
  for (let i = 0; i < totalPagesCount; i++) {
    sections.push({
      end: (i + 1) * pixelsPerPage,
      page: i + 1,
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
          onClick={() => setSelectedPageNumber(section.pages[0])}
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
              className={cx('section', { selected: section.pages.includes(selectedPageNumber) })}
            />
          </Tooltip>
        </div>
      ))}
    </div>
  );
};
