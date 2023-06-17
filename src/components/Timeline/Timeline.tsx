import './Timeline.scss';

const Timeline = () => {
    return (
        <div className="Timeline">
                <ul>
                    <li>
                        <span className="Timeline_point"></span>
                        <span className="Timeline_date">2017</span>
                        <p> License informatique</p>
                    </li>
                    <li>
                        <span className="Timeline_point"></span>
                        <span className="Timeline_date">2020</span>
                        <p> Lorem Ipsum</p>
                    </li>
                    <li>
                        <span className="Timeline_point"></span>
                        <span className="Timeline_date">2020</span>
                        <p> Lorem Ipsum</p>
                    </li>
                    <li>
                        <span className="Timeline_point"></span>
                        <span className="Timeline_date">2020</span>
                        <p> Lorem Ipsum</p>
                    </li>
                </ul>
        </div>
    )
};

export default Timeline;