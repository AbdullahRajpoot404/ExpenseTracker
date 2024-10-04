import './SweetAlert.css';
import Swal from 'sweetalert2'


export const AprovalPopUp = () => {
  Swal.fire({
    title: '<strong>Expense Request</strong>',
    html: `
          <div class="text-left text-gray-400">
            <div class="flex justify-between items-center mb-2">
              <p class="font-bold text-[#A9A9AA]">Amount</p>
              <p class="text-white">€780.00</p>
            </div>
            <div class="flex justify-between items-center mb-2">
              <p class="font-bold text-[#A9A9AA]">Category</p>
              <p class="flex items-center text-white"><span class="text-purple-500 mr-1">●</span> Travel</p>
            </div>
            <div class="flex justify-between items-center mb-2">
              <p class="font-bold text-[#A9A9AA]">Project</p>
              <p class="text-white">Client Design</p>
            </div>
            <div class="flex items-center mb-2">
              <p class="font-bold text-[#A9A9AA] w-[300px]">Description</p>
              <p class="text-white text-right">Travel to client's HQ for pitch presentation. Travel to client's HQ for pitch presentation.</p>
            </div>
            <div class="flex justify-between items-center mb-2">
              <p class="font-bold text-[#A9A9AA]">Team</p>
              <p class="text-white">Websites</p>
            </div>
          </div>`,
    icon: null,
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: 'Approve',
    cancelButtonText: 'Decline',
    customClass: {
      popup: 'custom-swal',
      title: 'custom-title',
      confirmButton: 'custom-confirm',
      cancelButton: 'custom-cancel'
    }
  });
}      