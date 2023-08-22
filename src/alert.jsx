import './encrypt.css'
export default function Alert(props) {
    return (
        <>
            {
                (props.alert.valid) &&
                <div className="alert  rang text-center" role="alert">
                    {props.alert.msg}
                </div>
            }
        </>
    );

}