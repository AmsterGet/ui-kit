import { FC, ReactElement, useState } from 'react';
import classNames from 'classnames/bind';
import { Popover } from '@components/popover';
import { Button } from '@components/button';
import { PageSelector } from './pageSelector/pageSelector';
import { ChangePage } from '../../types';
import styles from './activePage.module.scss';

const cx = classNames.bind(styles);

interface ActivePageProps {
  activePage: number;
  totalPages: number;
  pageText: string;
  goToText: string;
  goActionText: string;
  changePage: ChangePage;
}

export const ActivePage: FC<ActivePageProps> = ({
  activePage,
  totalPages,
  pageText,
  goToText,
  goActionText,
  changePage,
}): ReactElement => {
  const [isPageSelectorOpened, setIsPageSelectorOpened] = useState(false);

  const selectPage: ChangePage = (newPage) => {
    changePage(newPage);
    setIsPageSelectorOpened(false);
  };

  return (
    <div className={cx('active-page')}>
      {`${pageText} `}
      <Popover
        content={
          <PageSelector
            pageText={pageText}
            goActionText={goActionText}
            selectPage={selectPage}
            totalPages={totalPages}
          />
        }
        title={goToText}
        placement="top"
        isOpened={isPageSelectorOpened}
        setIsOpened={setIsPageSelectorOpened}
        className={cx('page-selector')}
      >
        <Button className={cx('page-selector-button')} variant="text">
          {activePage}
        </Button>
      </Popover>
    </div>
  );
};
