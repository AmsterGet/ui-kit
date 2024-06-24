import { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import { BaseIconButton, PrevPageIcon, PrevChapterIcon } from '@components/icons';
import { Bar } from './bar';
import { ChangePage } from '../../types';
import styles from './pageNavigator.module.scss';

const cx = classNames.bind(styles);

export interface PageNavigatorProps {
  activePage: number;
  totalPages: number;
  changePage: ChangePage;
  captions: {
    goTo: string;
  };
}

export const PageNavigator: FC<PageNavigatorProps> = ({
  activePage,
  changePage,
  totalPages,
  captions,
}): ReactElement => {
  const toFirstPage = () => {
    changePage(1);
  };
  const toPrevPage = () => {
    changePage(activePage - 1);
  };
  const toNextPage = () => {
    changePage(activePage + 1);
  };
  const toLastPage = () => {
    changePage(totalPages);
  };

  return (
    <div className={cx('page-navigator')}>
      <div className={cx('page-buttons')}>
        <BaseIconButton
          className={cx('page-button')}
          onClick={toFirstPage}
          disabled={activePage === 1}
        >
          <PrevChapterIcon />
        </BaseIconButton>
        <BaseIconButton
          className={cx('page-button')}
          onClick={toPrevPage}
          disabled={activePage === 1}
        >
          <PrevPageIcon />
        </BaseIconButton>
      </div>
      <Bar
        totalPagesCount={totalPages}
        selectedPageNumber={activePage}
        setSelectedPageNumber={changePage}
        captions={captions}
      />
      <div className={cx('page-buttons')}>
        <BaseIconButton
          className={cx('page-button', 'next')}
          onClick={toNextPage}
          disabled={activePage === totalPages}
        >
          <PrevPageIcon />
        </BaseIconButton>
        <BaseIconButton
          className={cx('page-button', 'next')}
          onClick={toLastPage}
          disabled={activePage === totalPages}
        >
          <PrevChapterIcon />
        </BaseIconButton>
      </div>
    </div>
  );
};
