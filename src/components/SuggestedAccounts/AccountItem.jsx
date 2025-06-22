import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/1535a1114ee1e60260e0a13c5bedccd9~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=085c5d04&x-expires=1750410000&x-signature=Pd32gBFIMoXlGoNJKsX5RQ828ek%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt="Tớ là Trang hẹ hẹ"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>phongzau2004</strong>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Phong NTM</p>
            </div>
        </div>
    );
}

export default AccountItem;
