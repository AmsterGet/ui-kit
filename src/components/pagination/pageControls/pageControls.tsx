import { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import { ChangePage } from '../types';
import { ActivePage } from './activePage/activePage';
import { PageNavigator } from './pageNavigator/pageNavigator';
import styles from './pageControls.module.scss';

const cx = classNames.bind(styles);

type PageControlsCaptions = {
  page: string;
  goTo: string;
  goAction: string;
  of: string;
};

export interface PageControlsProps {
  activePage: number;
  totalPages: number;
  changePage: ChangePage;
  captions: PageControlsCaptions;
}

export const PageControls: FC<PageControlsProps> = ({
  activePage,
  changePage,
  captions,
  totalPages,
}): ReactElement => {
  return (
    <div className={cx('page-controls')}>
      <ActivePage
        activePage={activePage}
        totalPages={totalPages}
        changePage={changePage}
        pageText={captions.page}
        goToText={captions.goTo}
        goActionText={captions.goAction}
      />
      <PageNavigator
        changePage={changePage}
        activePage={activePage}
        totalPages={totalPages}
        captions={captions}
      />
      <span className={cx('total-pages')}>
        {`${captions.of} `}
        {totalPages}
      </span>
    </div>
  );
};
