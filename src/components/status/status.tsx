import './statusStyles.scss';

export default function Status(props: any) {
    let statusColor;
    let statusText;

    if (props.status == 'completed') {
        statusColor = "status-color status-color--complete";
        statusText = "Completed";
    }
    if (props.status == 'in progress') {
        statusColor = "status-color status-color--progress";
        statusText = "In Progress";
    }
    if (props.status == 'active') {
        statusColor = "status-color status-color--active";
        statusText = "Active";
    }

    return (
        <div className="status-badge">
            <span className={statusColor}></span>
            <p className='status-text'>{statusText}</p>

            <p className='status-tooltip'></p>
        </div>
    )
}
