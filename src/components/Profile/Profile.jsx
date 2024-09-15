import css from './Profile.module.css';


// import { AiFillAccountBook } from "react-icons/ai";



export default function Profile({ name, tag, location, image, stats: { followers, views, likes } = {} }) {
    return (
        <div className={css.card}>
            <div className={css.cardTop}>
                <img
                    className={css.image}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.title}>{name}</p>
                <p className={css.text}>@{tag}</p>
                <p className={css.text}>{location}</p>
            </div>

            <ul className={css.list}>
                <li className={css.item}>
                    <span>Followers</span>
                    <span className={css.bold}>{followers}</span>
                </li>
                <li className={css.item}>
                    <span>Views</span>
                    <span className={css.bold}>{views}</span>
                </li>
                <li className={css.item}>
                    <span>Likes</span>
                    <span className={css.bold}>{likes}</span>
                </li>
            </ul>
        </div>

    );
};