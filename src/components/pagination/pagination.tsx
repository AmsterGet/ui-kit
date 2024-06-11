import { FC, ReactElement } from 'react';
import classNames from 'classnames/bind';
import { ItemCounter } from './itemsCounter/itemCounter';
import { PageSizeControl } from './pageSizeControl/pageSizeControl';
import { PageControls } from './pageControls/pageControls';
import { ChangePageSize, ChangePage } from './types';
import styles from './pagination.module.scss';

const cx = classNames.bind(styles);

type PaginationCaptions = {
  items?: string;
  of?: string;
  page?: string;
  goTo?: string;
  goAction?: string;
  perPage?: string;
};

export interface PaginationProps {
  activePage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  pageSizeOptions: number[];
  changePage: ChangePage;
  changePageSize: ChangePageSize;
  captions?: PaginationCaptions;
}

export const Pagination: FC<PaginationProps> = ({
  activePage,
  totalPages,
  pageSize,
  totalItems,
  pageSizeOptions,
  changePage,
  changePageSize,
  captions,
}): ReactElement => {
  const ofText = captions?.of || 'of';
  const pageText = captions?.page || 'Page';

  return (
    <div className={cx('pagination')}>
      <ItemCounter
        activePage={activePage}
        pageSize={pageSize}
        totalItems={totalItems}
        ofText={ofText}
        itemsText={captions?.items || 'items'}
      />
      {totalPages > 1 && (
        <PageControls
          activePage={activePage}
          totalPages={totalPages}
          changePage={changePage}
          captions={{
            page: pageText,
            of: ofText,
            goTo: captions?.goTo || 'Go to page',
            goAction: captions?.goAction || 'Go',
          }}
        />
      )}
      <PageSizeControl
        size={pageSize}
        sizeOptions={pageSizeOptions}
        changeSize={changePageSize}
        perPageText={captions?.perPage || 'per page'}
      />
    </div>
  );
};
