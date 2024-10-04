import Swal from 'sweetalert2';
import "../Style.css"

export function invalidCredentials() {
    Swal.fire({
        title: "Ivalid Credentials",
        text: "Invalid username or password",
        icon: "question"
    });
}