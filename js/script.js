// Simple script to show/hide the apply form in careers.html
document.addEventListener('DOMContentLoaded', function() {
    const applyForm = document.getElementById('apply-form');
    if (applyForm) {
        applyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Application submitted!');
            applyForm.style.display = 'none';
        });
    }
});
