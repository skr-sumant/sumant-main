const form = document.getElementById('feedback-form');
        const successModal = new bootstrap.Modal(document.getElementById('success-modal'));
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const feedback = document.getElementById('feedback').value;
            // Simulate server response
            setTimeout(() => {
                // Clear form fields
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('feedback').value = '';
                // Show success modal
                successModal.show();
            }, 1000);
        });