import { FC, ChangeEventHandler, ReactElement, useState } from 'react';
import classNames from 'classnames/bind';
import { FieldText } from '@components/fieldText';
import { Button } from '@components/button';
import { ChangePage } from '../../../types';
import styles from './pageSelector.module.scss';

const cx = classNames.bind(styles);

interface PageSelectorProps {
  pageText: string;
  goActionText: string;
  totalPages: number;
  selectPage: ChangePage;
}

export const PageSelector: FC<PageSelectorProps> = ({
  totalPages,
  pageText,
  goActionText,
  selectPage,
}): ReactElement => {
  // TODO: think of replacing with react-hook-form or formik
  const [page, setPage] = useState('');
  const [valid, setValid] = useState(true);

  const onPageInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const pageValue = event.target.value.replace(/\D/g, '');
    const pageValueNumber = Number(pageValue);
    const isValid = pageValueNumber > 0 && pageValueNumber <= totalPages;

    setValid(isValid);
    setPage(pageValue);
  };

  const applyPage = () => {
    selectPage(Number(page));
  };

  return (
    <div className={cx('page-selector')}>
      <div className={cx('field-wrapper')}>
        <FieldText
          onChange={onPageInputChange}
          value={page}
          placeholder={pageText}
          error={valid ? '' : 'Error'}
          touched
          defaultWidth={false}
          displayError={false}
        />
      </div>
      <Button onClick={applyPage} disabled={!page || !valid} className={cx('apply-button')}>
        {goActionText}
      </Button>
    </div>
  );
};
