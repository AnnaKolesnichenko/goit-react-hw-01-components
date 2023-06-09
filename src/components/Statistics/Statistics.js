import PropTypes from 'prop-types';

import css from "./statistics.module.css";

const Statistics = ({title, stats}) => {

    return (
        <section className={css.statistics}>
            {title ? <h2 className={css.title}>{title}</h2> : null}
            {/* <h2 class="title">{title}</h2> */}

            <ul className={css.stat_list}>
                {stats.map(stat => {
                    return (
                        <li className={css.stat_item} key={stat.id}>
                            <span className={css.label}>{stat.label}</span>
                            <span className={css.percentage}>{stat.percentage}</span>
                        </li>  
                    );        
                })}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired,
}

export default Statistics;