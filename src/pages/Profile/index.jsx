import { useParams } from 'react-router';

function Profile() {
    const { nickname } = useParams();
    return (
        <div>
            <h2>Profile page</h2>
            <h2>Tiktoker: {nickname}</h2>
        </div>
    );
}

export default Profile;
